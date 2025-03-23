import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "../utils/api";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);  // Track loading state

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data);
      setLoading(false);  // Stop loading when data is fetched
    };
    getMovies();
  }, []);

  return (
    <div className="movies-page">
      <h2>Popular Movies</h2>
      {loading ? (
        <p>Loading movies...</p>
      ) : movies.length > 0 ? (
        <div className="movie-list">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>⭐ {movie.vote_average}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No movies found.</p> // Display this if API returns an empty array
      )}
    </div>
  );
}

export default Movies;
