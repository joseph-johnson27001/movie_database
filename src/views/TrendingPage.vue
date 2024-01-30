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
      trendingMovies: [],
    };
  },
  async mounted() {
    this.trendingMovies = await fetchTrendingMovies();
  },
};
</script>
