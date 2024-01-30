<template>
  <div>
    <h2>New Releases</h2>
    <MovieGrid />
  </div>
</template>

<script>
import MovieGrid from "@/components/MovieGrid.vue";

export default {
  name: "NewReleasesPage",
  components: {
    MovieGrid,
  },
};
</script>
