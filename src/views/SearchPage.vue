<template>
  <div>
    <div class="search">
      <SearchBar @search="fetchSearchResults" />
    </div>
    <div v-show="showGrid">
      <MovieGrid
        :movies="searchResults"
        @update:movies="searchResults = $event"
      />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import MovieGrid from "@/components/MovieGrid.vue";
import {
  searchMovies,
  fetchMovieDetailsByURL,
} from "@/services/movieService.js";

export default {
  name: "HomePage",
  inject: ["state"],
  components: {
    SearchBar,
    MovieGrid,
  },
  data() {
    return {
      searchResults: [],
      showGrid: false,
    };
  },
  async mounted() {
    if (this.state.apiLink != null) {
      this.searchResults = await fetchMovieDetailsByURL(this.state.apiLink);
      this.showGrid = true;
    }
    this.state.apiLink = null;
  },
  methods: {
    async fetchSearchResults(query) {
      try {
        this.showGrid = true;
        const searchResults = await searchMovies(query);
        this.searchResults = searchResults;
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    },
  },
};
</script>

<style scoped>
.search {
  max-width: 1200px;
  margin: 0px auto;
  padding: 20px;
}
</style>
