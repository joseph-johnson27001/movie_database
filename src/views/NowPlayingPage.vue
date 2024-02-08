<template>
  <div>
    <h2>Now Playing</h2>
    <MovieGrid :movies="nowPlaying" @update:movies="nowPlaying = $event" />
  </div>
</template>

<script>
import MovieGrid from "@/components/MovieGrid.vue";
import {
  fetchNowPlaying,
  fetchMovieDetailsByURL,
} from "@/services/movieService.js";

export default {
  name: "NowPlayingPage",
  inject: ["state"],
  components: {
    MovieGrid,
  },
  data() {
    return {
      nowPlaying: [],
    };
  },
  async mounted() {
    try {
      if (this.state.apiLink == null) {
        this.nowPlaying = await fetchNowPlaying();
      } else {
        this.nowPlaying = await fetchMovieDetailsByURL(this.state.apiLink);
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
