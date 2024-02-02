<template>
  <div v-show="loading" class="loading-animation-container">
    <div class="loading-animation"></div>
  </div>
  <div v-show="!loading" class="movie-page">
    <h2 class="movie-title">
      {{ movie.title }}
      <span v-if="movie.release_date"
        >({{ getReleaseYear(movie.release_date) }})</span
      >
    </h2>
    <p v-if="movie.tagline" class="tagline">{{ movie.tagline }}</p>
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
    <div class="details-container">
      <div class="details-card">
        <strong class="card-header">Rating</strong>
        <div v-if="movie.vote_average" class="rating-container card-content">
          <div
            class="rating-indicator"
            :style="getRatingStyle(movie.vote_average)"
          >
            <span class="percentage">
              {{ Math.round(movie.vote_average * 10) }}%
            </span>
          </div>
        </div>
      </div>

      <div class="details-card">
        <strong class="card-header">Genres</strong>
        <div v-if="movie.genres && movie.genres.length" class="card-content">
          <p>{{ getGenres(movie.genres) }}</p>
        </div>
      </div>

      <div class="details-card">
        <strong class="card-header">Runtime</strong>
        <div v-if="movie.runtime" class="card-content">
          <p>{{ movie.runtime }} minutes</p>
        </div>
      </div>

      <div class="details-card">
        <strong class="card-header">Status</strong>
        <div v-if="movie.status" class="status-container card-content">
          <div
            class="status-indicator"
            :class="{ released: movie.status.toLowerCase() === 'released' }"
          >
            {{ movie.status }}
          </div>
        </div>
      </div>

      <div class="details-card" v-if="movie.budget">
        <strong class="card-header">Budget</strong>
        <div class="card-content">
          <p>${{ numberWithCommas(movie.budget) }}</p>
        </div>
      </div>

      <div class="details-card" v-if="movie.revenue">
        <strong class="card-header">Revenue</strong>
        <div class="card-content">
          <p>${{ numberWithCommas(movie.revenue) }}</p>
        </div>
      </div>
    </div>

    <!-- Production Companies -->
    <div class="details-card" v-if="movie.production_companies">
      <strong class="card-header">Production Companies</strong>
      <div class="card-content production-companies">
        <div
          v-for="company in movie.production_companies"
          :key="company.name"
          class="company"
        >
          <img
            v-if="company.logo_path"
            :src="'https://image.tmdb.org/t/p/original' + company.logo_path"
            :alt="company.name"
            class="production-company-logo"
          />
          <p v-else>{{ company.name }}</p>
        </div>
      </div>
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
    getRatingStyle(voteAverage) {
      let color;
      if (voteAverage >= 7.5) {
        color = "#4caf50";
      } else if (voteAverage >= 5) {
        color = "#ffc107";
      } else {
        color = "#f44336";
      }
      return {
        "--rating-color": color,
      };
    },
    getReleaseYear(releaseDate) {
      return new Date(releaseDate).getFullYear();
    },
    getGenres(genres) {
      return genres.map((genre) => genre.name).join(", ");
    },
    imageLoaded() {
      this.loadedImage = true;
      if (this.movie) {
        this.loading = false;
      }
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style scoped>
.movie-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.movie-title {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  color: #0d253f;
}

.movie-overview p {
  text-align: justify;
}

.jumbo-area {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h3 {
  color: #0d253f;
  text-align: center;
}

.details-container {
  width: 100%;
  margin-top: 20px;
}

.details-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}

.card-header {
  font-weight: bold;
}

.card-content {
  margin-top: 10px;
}

.rating-indicator,
.status-indicator {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
  padding: 5px;
  color: white;
}

.rating-indicator {
  background-color: var(--rating-color);
}

.status-indicator.released {
  background-color: #4caf50;
}

.status-indicator:not(.released) {
  background-color: #f44336;
}

.percentage {
  color: white;
  font-size: 0.8em;
}

.production-companies {
  margin-top: 20px;
}

.companies-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
}

.company {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.production-company-logo {
  width: 100px;
  margin-right: 10px;
}

.visit-page {
  cursor: pointer;
  color: #2196f3;
  text-decoration: none;
  font-size: 18px;
}

.loading-animation-container {
  width: 100%;
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

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

.tagline {
  margin-bottom: 20px;
  font-style: italic;
  color: #888;
  margin-top: 0px;
}

@media screen and (max-width: 768px) {
  .movie-page {
    padding: 10px;
  }

  .movie-title {
    font-size: 24px;
  }

  .jumbo-area {
    max-width: 100%;
    height: auto;
  }

  .visit-page {
    font-size: 16px;
  }
}
</style>
