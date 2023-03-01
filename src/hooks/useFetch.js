import { useEffect, useState } from "react";

export const useMovies = (apiPath, queryParam = "") => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryParam}`
      );
      const data = await response.json();
      setMovies(data.results);
    }

    fetchMovies();
  }, [apiPath, queryParam]);
  return { movies };
};

export const useMovieDetail = (param) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovieInfo() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${param.id}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const json = await response.json();
      setMovie(json);
    }
    fetchMovieInfo();
  }, [param.id]);
  return { movie };
};
