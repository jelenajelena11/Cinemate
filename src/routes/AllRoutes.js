import { Routes, Route } from "react-router-dom";
import { MovieDetail, MovieList, NotFound, Search } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<MovieList />} />
        <Route path="movies/top" element={<MovieList />} />
        <Route path="movies/popular" element={<MovieList />} />
        <Route path="movies/upcoming" element={<MovieList />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
