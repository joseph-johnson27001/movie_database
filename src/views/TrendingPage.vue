<template>
  <div>
    <h2>Trending</h2>
    <MovieGrid
      :movies="trendingMovies"
      @update:movies="trendingMovies = $event"
    />
  </div>
</template>

<script>
import {
  fetchTrendingMovies,
  fetchMovieDetailsByURL,
} from "@/services/movieService.js";
import MovieGrid from "@/components/MovieGrid.vue";

export default {
  name: "TrendingPage",
  inject: ["state"],
  components: {
    MovieGrid,
  },
  data() {
    return {
      trendingMovies: [],
    };
  },

  async mounted() {
    try {
      if (this.state.apiLink == null) {
        this.trendingMovies = await fetchTrendingMovies();
      } else {
        this.trendingMovies = await fetchMovieDetailsByURL(this.state.apiLink);
      }
    } catch (error) {
      console.error("Error fetching top rated movies:", error);
    }
    this.state.apiLink = null;
  },
};
</script>

<style scoped>
h2 {
  text-align: center !important;
}
</style>
