<template>
  <div>
    <h2>Top Rated</h2>
    <MovieGrid
      :movies="topRatedMovies"
      @update:movies="topRatedMovies = $event"
    />
  </div>
</template>

<script>
import MovieGrid from "@/components/MovieGrid.vue";
import {
  fetchTopRatedMovies,
  fetchMovieDetailsByURL,
} from "@/services/movieService.js";

export default {
  name: "TopRatedPage",
  inject: ["state"],
  components: {
    MovieGrid,
  },
  data() {
    return {
      topRatedMovies: [],
    };
  },

  async mounted() {
    try {
      if (this.state.apiLink == null) {
        this.topRatedMovies = await fetchTopRatedMovies();
      } else {
        this.topRatedMovies = await fetchMovieDetailsByURL(this.state.apiLink);
      }
    } catch (error) {
      console.error("Error fetching top rated movies:", error);
    }
  },
};
</script>

<style scoped>
h2 {
  text-align: center !important;
}
</style>
