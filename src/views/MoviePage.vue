<template>
  <div class="movie-page">
    <div class="dark-area">
      <h1 class="movie-title">{{ movie.title }}</h1>

      <div class="poster-trailer-container">
        <img :src="movie.poster" :alt="movie.title" class="movie-poster" />

        <div v-if="movie.trailers.length > 0" class="trailer-container">
          <iframe
            :src="'https://www.youtube.com/embed/' + movie.trailers[0].key"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <p v-else>No trailer available</p>
      </div>
    </div>

    <div class="movie-details">
      <p><strong>Release Date:</strong> {{ movie.releaseDate }}</p>
      <p><strong>Overview:</strong> {{ movie.overview }}</p>
      <p><strong>Genres:</strong> {{ movie.genres.join(", ") }}</p>
      <p><strong>Runtime:</strong> {{ movie.runtime }} minutes</p>
      <p><strong>Rating:</strong> {{ movie.rating }}/10</p>
      <p><strong>Cast:</strong> {{ movie.cast.join(", ") }}</p>
      <p><strong>Director:</strong> {{ movie.director }}</p>
      <p>
        <strong>Production Companies:</strong>
        {{ movie.productionCompanies.join(", ") }}
      </p>
      <p><strong>Budget:</strong> ${{ movie.budget }}</p>
      <p><strong>Revenue:</strong> ${{ movie.revenue }}</p>
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
        trailers: [{ key: "trailer_key_1" }, { key: "trailer_key_2" }],
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
  display: flex;
  flex-direction: column;
}

.dark-area {
  background-color: #333333;
  color: white;
  padding: 20px;
}

.poster-trailer-container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 20px;
  align-items: center;
}

.movie-poster {
  width: 100%;
  height: 100%;
}

.trailer-container {
  width: 100%;
}

iframe {
  width: 100%;
  height: 400px;
}
</style>
