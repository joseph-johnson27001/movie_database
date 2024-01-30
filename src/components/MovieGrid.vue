<template>
  <div class="movie-grid">
    <div v-for="(movie, index) in movies" :key="index" class="movie-container">
      <div class="movie-item">
        <img :src="movie.poster" :alt="movie.title" class="movie-image" />
      </div>
      <div class="movie-title">
        <p>{{ movie.title }}</p>
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
      // No need to initialize movies here since it's a prop
    };
  },
  mounted() {
    console.log("Movies prop in MovieGrid:", this.movies);
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
</style>
