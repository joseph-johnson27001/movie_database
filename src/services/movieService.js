const fetch = require("node-fetch");

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTUzNWViZmNhMWJjNmY2YjUzODgzZGM2ZWU3YTUwYiIsInN1YiI6IjY1YjMxOTM0ODczZjAwMDE2MmY1OTJiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.syug0sjXoD5CCS1yvDVMwK9KO5BRdHwN-TX0yTO4gaM";
const BASE_URL = "https://api.themoviedb.org/3";

async function fetchTrendingMovies() {
  const url = `${BASE_URL}/trending/movie/week`;
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

async function fetchTopRatedMovies() {
  const url = `${BASE_URL}/movie/top_rated`;
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

async function fetchNewReleases() {
  const url = `${BASE_URL}/movie/now_playing`;
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

async function searchMovies(query) {
  const url = `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`;
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

module.exports = {
  fetchTrendingMovies,
  fetchTopRatedMovies,
  fetchNewReleases,
  searchMovies,
};
