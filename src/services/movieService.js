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
    console.log(data);
    return data.results; // Assuming the API response contains a 'results' array of movies
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
}

// Define more functions for different API calls if needed...

module.exports = { fetchTrendingMovies };
