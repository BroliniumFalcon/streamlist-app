import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY; // Replace with your TMDB API key
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: { api_key: API_KEY },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
