<template>
  <div>
    <div v-show="loading" class="loading-animation-container">
      <div class="loading-animation"></div>
    </div>
    <div v-show="!loading" class="movie-grid">
      <router-link
        v-for="(movie, index) in movies"
        :key="index"
        :to="'/movie/' + movie.id"
      >
        <div class="movie-container">
          <div class="movie-item">
            <img
              v-if="movie.poster_path"
              :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
              :alt="movie.title"
              class="movie-image"
              @load="imageLoaded"
            />
            <img
              v-else
              :src="backupImage"
              class="movie-image"
              @load="imageLoaded"
            />
            <div
              v-if="movie.vote_count != 0"
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
            <p>
              {{ movie.title }}
              <template v-if="movie.release_date">
                ({{ getReleaseYear(movie.release_date) }})
              </template>
            </p>
          </div>
        </div>
      </router-link>
    </div>
    <div>
      <pagination-buttons
        v-if="!this.loading"
        @movies-fetched="handleMoviesFetched"
      />
    </div>
  </div>
</template>

<script>
import PaginationButtons from "@/components/PaginationButtons.vue";

export default {
  name: "MovieGrid",
  components: {
    PaginationButtons,
  },
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      loading: true,
      movieLength: 0,
      loadedImages: 0,
      backupImage: "/movie_camera_poster.JPG",
      visiblePageCount: 0,
    };
  },
  methods: {
    handleMoviesFetched(movies) {
      this.$emit("update:movies", movies);
    },
    imageLoaded() {
      this.loadedImages++;
      if (this.loadedImages == this.movieLength && this.loadedImages !== 0) {
        this.loading = false;
      }
    },
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
  watch: {
    movies: {
      handler() {
        this.movieLength = this.movies.length;
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

.movie-grid p {
  text-align: center;
}

.movie-item {
  position: relative;
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

.rating-indicator {
  position: absolute;
  bottom: 20px;
  right: 20px;
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

.loading-animation-container {
  width: 100%;
  height: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-animation {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid #ccc;
  border-top-color: #2196f3;
  animation: spin 1s infinite linear;
}

a:-webkit-any-link {
  color: inherit !important;
  cursor: inherit !important;
  text-decoration: inherit !important;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
