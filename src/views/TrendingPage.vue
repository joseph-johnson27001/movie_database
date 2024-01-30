<template>
  <div>
    <h2>Trending</h2>
    <MovieGrid :movies="trendingMovies" />
  </div>
</template>

<script>
import { fetchTrendingMovies } from "@/services/movieService.js";
import MovieGrid from "@/components/MovieGrid.vue";

export default {
  name: "TrendingPage",
  components: {
    MovieGrid,
  },
  data() {
    return {
      trendingMovies: [], // Initialize as empty array
    };
  },
  async mounted() {
    // Fetch trending movies and assign to trendingMovies
    this.trendingMovies = await fetchTrendingMovies();
  },
};
</script>
