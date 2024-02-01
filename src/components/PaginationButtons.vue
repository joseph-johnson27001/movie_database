<template>
  <div class="pagination-buttons">
    <button @click="goToPreviousPage" :disabled="currentPage === 1">
      Previous
    </button>
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
import {
  fetchTrendingMovies,
  fetchTopRatedMovies,
  fetchNewReleases,
  fetchUpcomingMovies,
  searchMovies,
} from "../services/movieService";

export default {
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    visiblePageCount: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      context: "",
      currentPage: 1,
    };
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
  mounted() {
    this.context = this.$route.path;
  },
  methods: {
    async goToPreviousPage() {
      console.log(this.currentPage);
      if (this.currentPage > 1) {
        this.currentPage--;
        await this.fetchMovies(this.currentPage - 1);
      }
    },
    async goToPage(pageNumber) {
      await this.fetchMovies(pageNumber);
    },
    async goToNextPage() {
      this.currentPage++;
      await this.fetchMovies(this.currentPage);
    },
    async fetchMovies(pageNumber) {
      let fetchFunction;
      switch (this.context) {
        case "/trending":
          fetchFunction = fetchTrendingMovies;
          break;
        case "/top-rated":
          fetchFunction = fetchTopRatedMovies;
          break;
        case "/new-releases":
          fetchFunction = fetchNewReleases;
          break;
        case "/upcoming":
          fetchFunction = fetchUpcomingMovies;
          break;
        case "/":
          fetchFunction = searchMovies;
          break;
        default:
          console.error("Invalid context:", this.context);
          return;
      }

      try {
        console.log(fetchFunction);
        const movies = await fetchFunction(pageNumber);
        this.$emit("movies-fetched", movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
        // Handle error, if needed
      }
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
