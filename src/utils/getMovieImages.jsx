import carrete from "../img/carrete.png";
export function getMovieImg(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : carrete;
}

/*const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
 */
