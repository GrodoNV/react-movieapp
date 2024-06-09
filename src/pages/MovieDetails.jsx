/*import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { useState, useEffect } from "react";
import { getMovieImg } from "../utils/getMovieImages";
export function MovieDetails() {
  const { movieId } = useParams();
  const { movie, setMovie } = useState(null);

  useEffect(() => {
    get("movie/" + movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div>
      <img src={imageUrl} alt={movie.title} />
      <div>
        <p>
          <strong>Title:</strong>
          {movie.title}
        </p>
      </div>
    </div>
  );
}
*/
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { useState, useEffect } from "react";
import { getMovieImg } from "../utils/getMovieImages";
import "../pages/MovieDetails.css";
export function MovieDetails() {
  const { movieId } = useParams(); // Invoca la función useParams
  const [movie, setMovie] = useState([]); // Usa el arreglo retornado por useState para desestructurar
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    get("movie/" + movieId) // Asegúrate de que la URL es correcta
      .then((data) => {
        setMovie(data);
        setLoading(false);
        setGeneros(data.genres[0]);
        console.log(data.genres[0]);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        setError(error);
        setLoading(false);
      });
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movie) {
    return <div>No movie data</div>;
  }

  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className="detailsContainer">
      <img src={imageUrl} alt={movie.title} className="col movieImage" />{" "}
      <div className="col movieDetails">
        <p className="title">
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genero:</strong> {generos.name}
        </p>
        <p>
          <strong>Overview:</strong> {movie.overview}
        </p>
        <p>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Rating:</strong> {movie.vote_average}
        </p>
      </div>
    </div>
  );
}
