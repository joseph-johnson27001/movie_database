<template>
  <div>
    <h2>Trending</h2>
    <MovieGrid />
  </div>
</template>

<script>
import MovieGrid from "@/components/MovieGrid.vue";

export default {
  name: "HomePage",
  components: {
    MovieGrid,
  },
};
</script>
