const fetch = require("node-fetch");

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTUzNWViZmNhMWJjNmY2YjUzODgzZGM2ZWU3YTUwYiIsInN1YiI6IjY1YjMxOTM0ODczZjAwMDE2MmY1OTJiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.syug0sjXoD5CCS1yvDVMwK9KO5BRdHwN-TX0yTO4gaM";
const BASE_URL = "https://api.themoviedb.org/3";

async function fetchTrendingMovies(page = 1) {
  const url = `${BASE_URL}/trending/movie/week?include_adult=false&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to fetch trending movies");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
}

async function fetchTopRatedMovies(page = 1) {
  const url = `${BASE_URL}/movie/top_rated?include_adult=false&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to fetch top rated movies");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching top rated movies:", error);
    return [];
  }
}
async function fetchNewReleases(page = 1) {
  const url = `${BASE_URL}/movie/now_playing?include_adult=false&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to fetch new releases");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching new releases:", error);
    return [];
  }
}

async function searchMovies(query, page = 1) {
  const url = `${BASE_URL}/search/movie?query=${query}
  )}&page=${page}`;
  console.log(page);

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to search movies");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
}

async function fetchMovieDetails(movieId) {
  const url = `${BASE_URL}/movie/${movieId}`;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
}

async function fetchUpcomingMovies(page = 1) {
  const currentYear = new Date().getFullYear();
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=${page}&sort_by=popularity.desc&with_release_type=1&release_date.gte=${currentYear}`;

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to fetch upcoming movies");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    return [];
  }
}

module.exports = {
  fetchTrendingMovies,
  fetchTopRatedMovies,
  fetchNewReleases,
  searchMovies,
  fetchMovieDetails,
  fetchUpcomingMovies,
};
