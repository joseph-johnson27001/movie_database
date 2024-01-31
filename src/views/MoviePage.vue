<template>
  <div class="movie-page">
    <div class="movie-header">
      <!-- Display movie title -->
      <h1 class="movie-title">{{ movie.title }}</h1>
      <!-- Display movie poster -->
      <img :src="movie.poster" :alt="movie.title" class="movie-poster" />
    </div>

    <div class="movie-details">
      <!-- Display movie release date -->
      <p><strong>Release Date:</strong> {{ movie.releaseDate }}</p>
      <!-- Display movie overview -->
      <p><strong>Overview:</strong> {{ movie.overview }}</p>
      <!-- Display movie genres -->
      <p><strong>Genres:</strong> {{ movie.genres.join(", ") }}</p>
      <!-- Display movie runtime -->
      <p><strong>Runtime:</strong> {{ movie.runtime }} minutes</p>
      <!-- Display movie rating -->
      <p><strong>Rating:</strong> {{ movie.rating }}/10</p>
      <!-- Display movie cast -->
      <p><strong>Cast:</strong> {{ movie.cast.join(", ") }}</p>
      <!-- Display movie director -->
      <p><strong>Director:</strong> {{ movie.director }}</p>
      <!-- Display movie production companies -->
      <p>
        <strong>Production Companies:</strong>
        {{ movie.productionCompanies.join(", ") }}
      </p>
      <!-- Display movie budget -->
      <p><strong>Budget:</strong> ${{ movie.budget }}</p>
      <!-- Display movie revenue -->
      <p><strong>Revenue:</strong> ${{ movie.revenue }}</p>
    </div>

    <div class="movie-trailers">
      <!-- Display movie trailers -->
      <h2>Trailers</h2>
      <div v-if="movie.trailers.length > 0" class="trailers-container">
        <iframe
          v-for="(trailer, index) in movie.trailers"
          :key="index"
          :src="'https://www.youtube.com/embed/' + trailer.key"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <p v-else>No trailers available</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviePage",
  data() {
    return {
      movie: {
        title: "Sample Movie",
        poster: "https://via.placeholder.com/300",
        releaseDate: "2023-01-01",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        genres: ["Action", "Adventure", "Science Fiction"],
        runtime: 120,
        rating: 7.5,
        cast: ["Actor 1", "Actor 2", "Actor 3"],
        director: "Director Name",
        productionCompanies: ["Production Company 1", "Production Company 2"],
        budget: 10000000,
        revenue: 50000000,
        trailers: [
          { key: "trailer_key_1" }, // Sample trailer key
          { key: "trailer_key_2" }, // Sample trailer key
        ],
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
/* Styles for movie header */
.movie-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.movie-title {
  margin: 0;
}

.movie-poster {
  width: 200px;
  height: auto;
}

/* Styles for movie details */
.movie-details {
  margin-top: 20px;
}

/* Styles for movie trailers */
.movie-trailers {
  margin-top: 20px;
}

.trailers-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

iframe {
  width: 100%;
  height: 200px;
}
</style>
