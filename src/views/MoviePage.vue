<template>
  <div v-show="loading" class="loading-animation-container">
    <loading-animation />
  </div>
  <div v-show="!loading" class="movie-page">
    <h2 class="movie-title">
      {{ movie.title }}
      <span v-if="movie.release_date"
        >({{ getReleaseYear(movie.release_date) }})</span
      >
    </h2>
    <p v-if="movie.tagline" class="tagline">{{ movie.tagline }}</p>
    <div v-if="movie.overview" class="movie-overview">
      <p>{{ movie.overview }}</p>
    </div>

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
      <div class="details-card" v-if="movie.vote_average">
        <strong class="card-header">Rating</strong>
        <div class="rating-container card-content">
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

      <div v-if="movie.genres && movie.genres.length" class="details-card">
        <strong class="card-header">Genres</strong>
        <div class="card-content">
          <p>{{ getGenres(movie.genres) }}</p>
        </div>
      </div>

      <div v-if="movie.runtime" class="details-card">
        <strong class="card-header">Runtime</strong>
        <div class="card-content">
          <p>{{ movie.runtime }} minutes</p>
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

      <div class="details-card">
        <strong class="card-header">Status</strong>
        <div v-if="movie.status" class="status-container card-content">
          <div
            v-if="movie.status.toLowerCase() === 'released'"
            class="status-indicator"
            :class="{ released: movie.status.toLowerCase() === 'released' }"
          >
            {{ movie.status }}
          </div>
          <div style="text-align: center" v-else class="status-indicator">
            Not Released
          </div>
        </div>
      </div>
    </div>

    <!-- Production Companies -->
    <div
      class="details-card companies-container"
      v-if="movie.production_companies"
    >
      <strong class="">Production Companies</strong>
      <div class="production-companies">
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
    <div class="links-container">
      <button
        v-if="movie.homepage"
        class="visit-page-button"
        @click="visitMoviePage(movie.homepage)"
      >
        Movie Page
      </button>
      <button
        v-if="movie.imdb_id"
        class="visit-page-button"
        @click="visitIMDBPage(movie.imdb_id)"
      >
        IMDB Page
      </button>
    </div>
  </div>
</template>

<script>
import { fetchMovieDetails } from "../services/movieService";
import LoadingAnimation from "@/components/LoadingAnimation.vue";

export default {
  name: "MoviePage",
  components: {
    LoadingAnimation,
  },
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
    visitMoviePage(url) {
      window.open(url, "_blank").focus();
    },
    visitIMDBPage(imdbId) {
      const url = `https://www.imdb.com/title/${imdbId}`;
      window.open(url, "_blank").focus();
    },
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

.movie-overview {
  margin-bottom: 10px !important;
}

.movie-overview p {
  text-align: justify;
}

.jumbo-area {
  width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border: 1px solid black;
}

h3 {
  color: #0d253f;
  text-align: center;
}

.details-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 100%;
  margin: 20px 0px;
}

.details-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: box-shadow 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card-header {
  font-weight: bold;
}

.card-content {
  margin-top: 10px;
}

.rating-indicator,
.status-indicator {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
  padding: 20px;
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

.companies-container {
  width: 100%;
  padding: 20px 0px;
}

.production-companies {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0px;
  width: 100%;
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

.links-container {
  margin-top: 20px;
}

.visit-page-button {
  cursor: pointer;
  color: #1976d2;
  text-decoration: none;
  padding: 8px 16px;
  margin: 0px 10px;
  border: none;
  border-radius: 4px;
  background-color: #1976d2;
  color: #fff;
  transition: background-color 0.2s;
}

.visit-page-button:hover {
  background-color: #0d47a1;
}

.loading-animation-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

.tagline {
  font-style: italic;
  color: #888;
  margin-top: 0px;
}

@media screen and (max-width: 768px) {
  .details-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    width: 100%;
    margin-top: 20px;
  }

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
