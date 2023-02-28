import { useEffect, useState } from "react";

export const useFetch = (apiPath) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setMovies(data.results);
    }

    fetchMovies();
  }, [apiPath]);
  return { movies };
};
