<template>
  <div>
    <h2>Top Rated</h2>
    <MovieGrid :movies="topRatedMovies" />
  </div>
</template>

<script>
import MovieGrid from "@/components/MovieGrid.vue";
import { fetchTopRatedMovies } from "@/services/movieService.js";

export default {
  name: "TopRatedPage",
  components: {
    MovieGrid,
  },
  data() {
    return {
      topRatedMovies: [],
    };
  },
  async mounted() {
    this.topRatedMovies = await fetchTopRatedMovies();
    console.log(this.topRatedMovies);
  },
};
</script>
