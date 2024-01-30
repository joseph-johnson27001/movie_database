<template>
  <div>
    <h2>Trending</h2>
    <MovieGrid :movies="trendingMovies" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { fetchTrendingMovies } from "@/services/movieService.js";
import MovieGrid from "@/components/MovieGrid.vue";

export default {
  name: "TrendingPage",
  components: {
    MovieGrid,
  },
  setup() {
    const trendingMovies = ref([]);

    onMounted(async () => {
      trendingMovies.value = await fetchTrendingMovies();
    });

    return {
      trendingMovies,
    };
  },
};
</script>
