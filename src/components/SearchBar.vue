<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Search movies..."
      v-model="query"
      @keyup.enter="searchMovies"
    />
    <button v-if="query" @click="clearInput" class="cancel-btn">X</button>
    <button @click="searchMovies" class="search-btn">Search</button>
  </div>
</template>

<script>
export default {
  inject: ["state"],
  name: "SearchBar",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    searchMovies() {
      if (this.query != "") {
        const movieGrid = document.querySelector(".movie-grid");
        const loadingAnimation = document.querySelector(
          ".loading-animation-container"
        );
        const paginationButtons = document.querySelector("#pagination-buttons");
        movieGrid.style.display = "none";
        paginationButtons.style.display = "none";
        loadingAnimation.style.display = "block";
        this.state.searchQuery = this.query;
        movieGrid.style.display = "none";
        if (this.query.length !== 0) {
          this.state.movieLength = 0;
          this.state.currentPage = 1;
          this.$emit("search", this.query);
        }
        this.clearInput();
      }
    },
    clearInput() {
      this.query = "";
    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  position: relative;
}

input {
  flex: 1;
  padding: 15px 15px;
  border: 1px solid darkgrey;
  border-radius: 20px;
  margin-right: 10px;
  outline: none;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
  background-color: #f7f7f7;
  position: relative;
}

input:focus {
  border: 1px solid #3498db;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.7);
}

.cancel-btn {
  background-color: #f7f7f7;
  border: none;
  position: absolute;
  right: 110px;
  cursor: pointer;
}

.search-btn {
  padding: 12px 16px;
  background-color: #0d253f;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: color 0.2s;
}

.search-btn:hover {
  color: gold;
}
</style>
