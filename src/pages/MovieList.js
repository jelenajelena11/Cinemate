import { Card } from "../components";
import { useMovies } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({ apiPath, title }) => {
  const { movies } = useMovies(apiPath);
  useTitle(title);
  
  return (
    <main>
      <section className="py-7 mx-auto">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
