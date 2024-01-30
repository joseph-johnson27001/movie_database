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
  data() {
    return {
      movies: [
        { id: 1, title: "Movie 1", poster: "/path/to/movie1.jpg" },
        { id: 2, title: "Movie 2", poster: "/path/to/movie2.jpg" },
        { id: 3, title: "Movie 3", poster: "/path/to/movie3.jpg" },
        { id: 4, title: "Movie 4", poster: "/path/to/movie4.jpg" },
        { id: 5, title: "Movie 5", poster: "/path/to/movie5.jpg" },
        { id: 6, title: "Movie 6", poster: "/path/to/movie6.jpg" },
        { id: 7, title: "Movie 7", poster: "/path/to/movie7.jpg" },
        { id: 8, title: "Movie 8", poster: "/path/to/movie8.jpg" },
        { id: 9, title: "Movie 9", poster: "/path/to/movie9.jpg" },
        { id: 10, title: "Movie 10", poster: "/path/to/movie10.jpg" },
        { id: 11, title: "Movie 11", poster: "/path/to/movie11.jpg" },
        { id: 12, title: "Movie 12", poster: "/path/to/movie12.jpg" },
        { id: 13, title: "Movie 13", poster: "/path/to/movie13.jpg" },
        { id: 14, title: "Movie 14", poster: "/path/to/movie14.jpg" },
        { id: 15, title: "Movie 15", poster: "/path/to/movie15.jpg" },
      ],
    };
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
