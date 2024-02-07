<template>
  <div>
    <h2>New Releases</h2>
    <MovieGrid :movies="newReleases" @update:movies="newReleases = $event" />
  </div>
</template>

<script>
import MovieGrid from "@/components/MovieGrid.vue";
import {
  fetchNewReleases,
  fetchMovieDetailsByURL,
} from "@/services/movieService.js";

export default {
  name: "NewReleasesPage",
  inject: ["state"],
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
      if (this.state.apiLink == null) {
        this.newReleases = await fetchNewReleases();
      } else {
        this.newReleases = await fetchMovieDetailsByURL(this.state.apiLink);
      }
    } catch (error) {
      console.error("Error fetching new releases:", error);
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
