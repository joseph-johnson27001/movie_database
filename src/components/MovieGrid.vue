<template>
  <div class="movie-grid">
    <div v-for="(movie, index) in movies" :key="index" class="movie-container">
      <div class="movie-item">
        <img
          :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          :alt="movie.title"
          class="movie-image"
        />
        <div
          class="rating-indicator"
          :style="{
            '--rating-percent': getRatingPercentage(movie.vote_average),
            '--rating-color': getRatingColor(movie.vote_average),
          }"
        >
          <span class="percentage">
            <strong>{{ Math.round(movie.vote_average * 10) }}%</strong>
          </span>
        </div>
      </div>
      <div class="movie-title">
        <p>{{ movie.title }} ({{ getReleaseYear(movie.release_date) }})</p>
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
  methods: {
    getReleaseYear(releaseDate) {
      return new Date(releaseDate).getFullYear();
    },
    getRatingPercentage(voteAverage) {
      return Math.round(voteAverage * 10);
    },
    getRatingColor(voteAverage) {
      if (voteAverage >= 7.5) {
        return "#4caf50";
      } else if (voteAverage >= 5) {
        return "#ffc107";
      } else {
        return "#f44336";
      }
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
  position: relative;
}

.movie-image {
  width: 100%;
  border-radius: 8px;
}

.rating-indicator {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--rating-color);
}

.percentage {
  color: inherit;
  font-size: 0.8em;
}
</style>
