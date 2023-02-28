import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryParam = "") => {
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
