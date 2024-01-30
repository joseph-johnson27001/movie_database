<template>
  <div>
    <div v-if="loading" class="loading-message">Loading...</div>
    <div v-else class="movie-grid">
      <div
        v-for="(movie, index) in movies"
        :key="index"
        class="movie-container"
      >
        <div class="movie-item">
          <img
            :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
            :alt="movie.title"
            class="movie-image"
          />
        </div>
        <div class="movie-title">
          <p>{{ movie.title }} ({{ getReleaseYear(movie.release_date) }})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieGrid",
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    getReleaseYear(releaseDate) {
      return new Date(releaseDate).getFullYear();
    },
  },
  watch: {
    movies: {
      handler() {
        this.loading = false;
      },
    },
  },
};
</script>

<style scoped>
.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.movie-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  background: white;
  cursor: pointer;
  transition: transform 0.1s ease-in-out, border 0.1s ease-in-out,
    box-shadow 0.1s ease-in-out;
}

.movie-item:hover {
  transform: scale(1.05);
  border: 1px solid #3498db;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.7);
}

.movie-image {
  width: 100%;
  border-radius: 8px;
}

.movie-title {
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
}
.loading-message {
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
}
</style>
