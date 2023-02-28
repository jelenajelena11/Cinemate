import { Routes, Route } from "react-router-dom";
import { MovieDetail, MovieList, NotFound, Search } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        <Route path="" element={<MovieList apiPath="movie/now_playing" />} />
        <Route
          path="movies/top"
          element={<MovieList apiPath="movie/top_rated" />}
        />
        <Route
          path="movies/popular"
          element={<MovieList apiPath="movie/popular" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList apiPath="movie/upcoming" />}
        />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="search" element={<Search apiPath="search/movie"/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
