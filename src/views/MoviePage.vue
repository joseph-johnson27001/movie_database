<template>
  <div class="movie-page">
    <h2 class="movie-title">{{ movie.title }}</h2>
    <div
      v-if="movie.backdrop_path"
      class="jumbo-area"
      :style="{
        backgroundImage:
          'url(https://image.tmdb.org/t/p/original' + movie.backdrop_path + ')',
      }"
    ></div>
    <div
      v-else
      class="jumbo-area"
      :style="{ backgroundImage: 'url(/movie_camera_poster.JPG)' }"
    ></div>

    <!-- Movie details -->
    <div class="movie-details">
      <p>
        <strong>Release Date:</strong> {{ getReleaseYear(movie.release_date) }}
      </p>
      <p><strong>Overview:</strong> {{ movie.overview }}</p>
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
      <a :href="movie.homepage" target="_blank" rel="noopener noreferrer"
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
      movie: {},
    };
  },
  async created() {
    const movieId = this.$route.params.id;
    const movieDetails = await fetchMovieDetails(movieId);
    if (movieDetails) {
      this.movie = await movieDetails;
      console.log(this.movie);
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
}

.movie-details {
  margin-top: 20px;
}

.movie-link {
  margin-top: 20px;
}
</style>
