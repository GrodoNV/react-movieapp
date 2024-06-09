import { useState, useEffect } from "react";
import { get } from "../data/httpClient";
import "../components/ContextMovieCard.css";
import { MovieCard } from "../components/MovieCard";
export function ContextMovieCard() {
  const [movies, SetMovies] = useState([]);
  useEffect(() => {
    get("discover/movie")
      .then((data) => {
        SetMovies(data.results);
        console.log(data);
      })
      .catch((error) => {
        console.error("error fetching movies", error);
      });
  }, []);
  return (
    <ul className="container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
