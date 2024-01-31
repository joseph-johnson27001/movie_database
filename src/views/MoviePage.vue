<template>
  <div class="movie-page">
    <!-- Movie Title -->
    <h1 class="movie-title">{{ movie.title }}</h1>

    <!-- Movie Poster -->
    <img :src="movie.poster" :alt="movie.title" class="movie-poster" />

    <!-- Movie Details -->
    <div class="movie-details">
      <!-- Release Date -->
      <p><strong>Release Date:</strong> {{ movie.releaseDate }}</p>

      <!-- Overview -->
      <p><strong>Overview:</strong> {{ movie.overview }}</p>

      <!-- Genres -->
      <p><strong>Genres:</strong> {{ movie.genres.join(", ") }}</p>

      <!-- Runtime -->
      <p><strong>Runtime:</strong> {{ movie.runtime }} minutes</p>

      <!-- Rating -->
      <p><strong>Rating:</strong> {{ movie.rating }}/10</p>

      <!-- Cast -->
      <p><strong>Cast:</strong> {{ movie.cast.join(", ") }}</p>

      <!-- Director -->
      <p><strong>Director:</strong> {{ movie.director }}</p>

      <!-- Production Companies -->
      <p>
        <strong>Production Companies:</strong>
        {{ movie.productionCompanies.join(", ") }}
      </p>

      <!-- Budget -->
      <p v-if="movie.budget"><strong>Budget:</strong> ${{ movie.budget }}</p>

      <!-- Revenue -->
      <p v-if="movie.revenue"><strong>Revenue:</strong> ${{ movie.revenue }}</p>
    </div>

    <!-- Similar Movies -->
    <div class="similar-movies">
      <h2>Similar Movies</h2>
      <ul>
        <li v-for="(similarMovie, index) in movie.similarMovies" :key="index">
          {{ similarMovie.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviePage",
  data() {
    return {
      movie: {
        title: "Dummy Movie",
        poster: "https://via.placeholder.com/300",
        releaseDate: "2023-01-01",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        genres: ["Action", "Adventure", "Sci-Fi"],
        runtime: 120,
        rating: 7.5,
        cast: ["Actor 1", "Actor 2", "Actor 3"],
        director: "Director Name",
        productionCompanies: ["Company 1", "Company 2"],
        budget: 100000000,
        revenue: 500000000,
        similarMovies: [
          { title: "Similar Movie 1" },
          { title: "Similar Movie 2" },
          { title: "Similar Movie 3" },
        ],
      },
    };
  },
};
</script>

<style scoped>
.movie-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.movie-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.movie-poster {
  width: 100%;
  margin-bottom: 20px;
}

.movie-details p {
  margin-bottom: 10px;
}

.similar-movies {
  margin-top: 30px;
}

.similar-movies h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.similar-movies ul {
  list-style-type: none;
  padding: 0;
}

.similar-movies li {
  margin-bottom: 5px;
}
</style>
