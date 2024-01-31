<template>
  <div class="upcoming-page">
    <h2>Upcoming Movies</h2>
    <MovieGrid :movies="upcomingMovies" />
  </div>
</template>

<script>
import { fetchUpcomingMovies } from "../services/movieService";
import MovieGrid from "@/components/MovieGrid.vue";

export default {
  name: "UpcomingPage",
  components: {
    MovieGrid,
  },
  data() {
    return {
      upcomingMovies: [],
    };
  },
  async created() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      try {
        this.upcomingMovies = await fetchUpcomingMovies();
      } catch (error) {
        console.error("Error fetching upcoming movies:", error);
      }
    },
  },
};
</script>

<style scoped>
.upcoming-page {
  padding: 20px;
}
</style>
