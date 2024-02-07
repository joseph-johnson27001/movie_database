<template>
  <div class="upcoming-page">
    <h2>Upcoming Movies</h2>
    <MovieGrid
      :movies="upcomingMovies"
      @update:movies="upcomingMovies = $event"
    />
  </div>
</template>

<script>
import {
  fetchMovieDetailsByURL,
  fetchUpcomingMovies,
} from "../services/movieService";
import MovieGrid from "@/components/MovieGrid.vue";

export default {
  name: "UpcomingPage",
  inject: ["state"],
  components: {
    MovieGrid,
  },
  data() {
    return {
      upcomingMovies: [],
    };
  },
  async mounted() {
    try {
      if (this.state.apiLink == null) {
        this.upcomingMovies = await fetchUpcomingMovies();
      } else {
        this.upcomingMovies = await fetchMovieDetailsByURL(this.state.apiLink);
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
