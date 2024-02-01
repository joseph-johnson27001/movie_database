<template>
  <div v-show="loading" class="loading-animation-container">
    <div class="loading-animation"></div>
  </div>
  <div v-show="!loading" class="movie-page">
    <h2 class="movie-title">{{ movie.title }}</h2>
    <img
      v-if="movie.backdrop_path"
      :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path"
      class="jumbo-area"
      alt="Backdrop"
      @load="imageLoaded"
    />
    <img
      v-else
      src="/jumbo-movie-image.jpg"
      class="jumbo-area"
      alt="Default Image"
      @load="imageLoaded"
    />

    <!-- Movie details -->
    <div class="movie-details">
      <p v-if="movie.release_date">
        <strong>Release Date:</strong> {{ getReleaseYear(movie.release_date) }}
      </p>
      <p v-if="movie.overview">
        <strong>Overview:</strong> {{ movie.overview }}
      </p>
      <p v-if="movie.genres && movie.genres.length">
        <strong>Genres:</strong> {{ getGenres(movie.genres) }}
      </p>
      <p v-if="movie.runtime">
        <strong>Runtime:</strong> {{ movie.runtime }} minutes
      </p>
      <p v-if="movie.vote_average">
        <strong>Rating:</strong> {{ movie.vote_average }}/10
      </p>
      <p v-if="movie.tagline"><strong>Tagline:</strong> {{ movie.tagline }}</p>
      <p v-if="movie.status"><strong>Status:</strong> {{ movie.status }}</p>
      <p v-if="movie.production_companies">
        <strong>Production Companies:</strong>
        {{ getProductionCompanies(movie.production_companies) }}
      </p>
      <p v-if="movie.budget"><strong>Budget:</strong> ${{ movie.budget }}</p>
      <p v-if="movie.revenue"><strong>Revenue:</strong> ${{ movie.revenue }}</p>
    </div>

    <!-- Link to movie page -->
    <div class="movie-link" v-if="movie.homepage">
      <a
        :href="movie.homepage"
        target="_blank"
        rel="noopener noreferrer"
        class="visit-page"
        >Visit Movie Page</a
      >
    </div>
  </div>
</template>

<script>
import { fetchMovieDetails } from "../services/movieService";

export default {
  name: "MoviePage",
  data() {
    return {
      movie: false,
      loading: true,
      loadedImage: false,
    };
  },
  async created() {
    const movieId = this.$route.params.id;
    const movieDetails = await fetchMovieDetails(movieId);
    if (movieDetails) {
      this.movie = await movieDetails;
      if (this.loadedImage) {
        this.loading = false;
      }
    }
  },
  methods: {
    getReleaseYear(releaseDate) {
      return new Date(releaseDate).getFullYear();
    },
    getGenres(genres) {
      return genres.map((genre) => genre.name).join(", ");
    },
    getProductionCompanies(companies) {
      if (companies) {
        return companies.map((company) => company.name).join(", ");
      }
    },
    imageLoaded() {
      this.loadedImage = true;
      if (this.movie) {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.movie-page {
  display: flex;
  flex-direction: column;
}

.jumbo-area {
  background-color: #333333;
  color: white;
  padding: 20px;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  min-height: 500px;
  height: auto;
  max-width: 1160px;
  max-height: 650px;
}

.movie-details {
  margin-top: 20px;
}

.movie-link {
  margin-top: 20px;
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
  color: inherit;
  cursor: inherit;
  text-decoration: inherit;
}

.visit-page {
  cursor: pointer !important;
  color: #2196f3 !important;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
