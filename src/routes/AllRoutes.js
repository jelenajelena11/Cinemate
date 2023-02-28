import { Routes, Route } from "react-router-dom";
import { MovieDetail, MovieList, NotFound, Search } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route path="" element={<MovieList apiPath="now_playing" />} />
        <Route
          path="movies/top"
          element={<MovieList apiPath="top_rated" />}
        />
        <Route
          path="movies/popular"
          element={<MovieList apiPath="popular" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList apiPath="upcoming" />}
        />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
