import { Link } from "react-router-dom";
import cinema from "../assets/images/centralCinema.png";
export const Card = ({ movie }) => {
  const imagePath = movie.poster_path
    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    : cinema;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`movie/${movie.id}`}>
        <img className="rounded-t-lg" src={imagePath} alt="" />
      </Link>
      <div className="p-5">
        <Link to="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.original_title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.overview}
        </p>
      </div>
    </div>
  );
};
