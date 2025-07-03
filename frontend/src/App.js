// src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    try {
      const url = `/api/movies/by-title?title=${encodeURIComponent(title)}`;
      const response = await fetch(url);
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        setMovies(data);
        setError("");
      } else {
        setMovies([]);
        setError("No movies found.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setMovies([]);
      setError("Error fetching movie data.");
    }
  };

  const handleReset = () => {
    setTitle("");
    setMovies([]);
    setError("");
  };

  return (
      <div className="container">
        <h2>🎬 Movie Search</h2>

        <div className="form-group">
          <input
              type="text"
              placeholder="Title (e.g., Avatar)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          <button onClick={handleReset}>Reset</button>
        </div>

        {error && <p className="error">{error}</p>}

        <div className="movie-list">
          {movies.map((movie, index) => (

            
              <div className="movie-card" key={index}>
               
                <div>
                  <h3>{movie.title} ({movie.year})</h3>
                  <img src={movie.image} />
                    <p><strong>Rated:</strong> {movie.rated}</p>
                    <p><strong>Released:</strong> {movie.released}</p>
                    <p><strong>Runtime:</strong> {movie.runtime}</p>
                    <p><strong>Genre:</strong> {movie.genre}</p>
                    <p><strong>Director:</strong> {movie.director}</p>
                    <p><strong>Writer:</strong> {movie.writer}</p>
                    <p><strong>Actors:</strong> {movie.actors}</p>
                    <p><strong>Language:</strong> {movie.language}</p>
                    <p><strong>Country:</strong> {movie.Country}</p>
                    <p><strong>Awards:</strong> {movie.Awards}</p>
                    <p><strong>Plot:</strong> {movie.plot}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
}

export default App;
