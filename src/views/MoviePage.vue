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
      <div v-if="movie.overview" class="movie-overview">
        <h3>Overview</h3>
        <p>{{ movie.overview }}</p>
      </div>
      <div class="movie-details-container">
        <div>
          <strong class="rating-heading">Rating</strong>
          <div v-if="movie.vote_average" class="rating-container">
            <div
              class="rating-indicator"
              :style="getRatingStyle(movie.vote_average)"
            >
              <span class="percentage"
                >{{ Math.round(movie.vote_average * 10) }}%</span
              >
            </div>
          </div>
          <div v-if="movie.genres && movie.genres.length">
            <strong>Genres</strong>
            <p>{{ getGenres(movie.genres) }}</p>
          </div>
          <div v-if="movie.runtime">
            <strong>Runtime</strong>
            <p>{{ movie.runtime }} minutes</p>
          </div>
        </div>
        <div>
          <!-- Second container -->
          <strong class="status-heading">Status</strong>
          <div v-if="movie.status" class="status-container">
            <div
              class="status-indicator"
              :class="{ released: movie.status.toLowerCase() === 'released' }"
            >
              {{ movie.status }}
            </div>
          </div>
          <div v-if="movie.budget">
            <strong>Budget</strong>
            <p>${{ numberWithCommas(movie.budget) }}</p>
          </div>
          <div v-if="movie.revenue">
            <strong>Revenue</strong>
            <p>${{ numberWithCommas(movie.revenue) }}</p>
          </div>
        </div>
      </div>

      <div v-if="movie.production_companies">
        <h3>Production Companies</h3>
        <div class="production-companies">
          <div
            v-for="company in movie.production_companies"
            :key="company.name"
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

.movie-details {
  margin-top: 20px;
  font-size: 16px;
  text-align: left;
}

.movie-details p {
  margin-bottom: 10px;
}

.movie-details-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* text-align: center; */
}

.details-container {
  width: 100%;
}

.movie-link {
  margin-top: 20px;
  text-align: center;
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
.rating-container,
.status-container {
  /* display: flex;
  justify-content: center;
  flex-direction: column; */
  /* align-items: center; */
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

.movie-details {
  margin-top: 20px;
}

.movie-details strong {
  display: block;
  margin-bottom: 5px;
  color: #0d253f;
}

.movie-details p {
  margin-bottom: 10px;
  color: #333;
}

.production-companies {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.production-companies p {
  font-size: large;
  padding: 0px 20px;
}

.production-company-logo {
  width: 100px;
  margin-right: 10px;
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

  .movie-details {
    font-size: 14px;
  }

  .visit-page {
    font-size: 16px;
  }

  .movie-details-container {
    grid-template-columns: 1fr;
    text-align: start;
  }
}
</style>
