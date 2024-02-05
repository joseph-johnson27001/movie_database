<template>
  <div>
    <h2>New Releases</h2>
    <MovieGrid :movies="newReleases" @update:movies="newReleases = $event" />
  </div>
</template>

<script>
import MovieGrid from "@/components/MovieGrid.vue";
import { fetchNewReleases } from "@/services/movieService.js";

export default {
  name: "NewReleasesPage",
  components: {
    MovieGrid,
  },
  data() {
    return {
      newReleases: [],
    };
  },
  async mounted() {
    try {
      this.newReleases = await fetchNewReleases();
    } catch (error) {
      console.error("Error fetching new releases:", error);
    }
  },
};
</script>

<style scoped>
h2 {
  text-align: center !important;
}
</style>
