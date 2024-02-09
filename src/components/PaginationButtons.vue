<template>
  <div class="pagination-buttons">
    <button @click="goToPreviousPage" :disabled="this.state.currentPage === 1">
      Previous
    </button>
    <button @click="goToNextPage" :disabled="this.state.movieLength < 20">
      Next
    </button>
  </div>
</template>

<script>
import {
  fetchTrendingMovies,
  fetchTopRatedMovies,
  fetchNowPlaying,
  fetchUpcomingMovies,
  searchMovies,
} from "../services/movieService";

export default {
  inject: ["state"],
  props: {
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
  mounted() {
    this.context = this.$route.path;
    if (this.state.apiLink) {
      const urlParams = new URLSearchParams(this.state.apiLink);
      const pageValue = urlParams.get("page");
      if (pageValue) {
        this.currentPage = parseInt(pageValue);
      }
    }
  },
  methods: {
    async goToPreviousPage() {
      this.currentPage = this.currentPage - 1;
      this.state.currentPage = this.currentPage;
      await this.fetchMovies(this.currentPage);
    },

    async goToNextPage() {
      this.currentPage = this.currentPage + 1;
      this.state.currentPage = this.currentPage;
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
        case "/now-playing":
          fetchFunction = fetchNowPlaying;
          break;
        case "/upcoming":
          fetchFunction = fetchUpcomingMovies;
          break;
        case "/search":
          fetchFunction = searchMovies;
          break;
        default:
          console.error("Invalid context:", this.context);
          return;
      }

      try {
        let movies;
        if (this.state.searchQuery !== "") {
          movies = await fetchFunction(this.state.searchQuery, pageNumber);
        } else {
          movies = await fetchFunction(pageNumber);
        }
        this.$emit("movies-fetched", movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
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
  padding: 10px 16px;
  font-size: 14px;
  border: 1px solid white;
  background-color: #0d253f;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  margin: 0 4px;
  border-radius: 20px;
}

.pagination-buttons button:hover {
  color: gold;
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
