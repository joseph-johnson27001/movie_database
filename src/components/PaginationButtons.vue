<template>
  <div class="pagination-buttons">
    <button @click="goToPreviousPage">Previous</button>
    <button
      v-for="pageNumber in visiblePageNumbers"
      :key="pageNumber"
      @click="goToPage(pageNumber)"
      :class="{ active: pageNumber === currentPage }"
    >
      {{ pageNumber }}
    </button>
    <button @click="goToNextPage">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    visiblePageCount: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    visiblePageNumbers() {
      const from = Math.max(
        1,
        this.currentPage - Math.floor(this.visiblePageCount / 2)
      );
      const to = Math.min(this.totalPages, from + this.visiblePageCount - 1);
      return Array.from({ length: to - from + 1 }, (_, index) => from + index);
    },
  },
  methods: {
    goToPreviousPage() {
      this.$emit("go-to-page", this.currentPage - 1);
    },
    goToPage(pageNumber) {
      this.$emit("go-to-page", pageNumber);
    },
    goToNextPage() {
      this.$emit("go-to-page", this.currentPage + 1);
    },
  },
};
</script>

<style scoped>
.pagination-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.pagination-buttons button {
  padding: 8px 16px;
  font-size: 14px;
  border: 2px solid #2196f3;
  background-color: #2196f3;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  margin: 0 4px;
  border-radius: 20px;
}

.pagination-buttons button:hover {
  background-color: #007bff;
  color: #fff;
}

.pagination-buttons button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-buttons button.active {
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;
}
</style>
