import { Card } from "../components";
import { useMovies } from "../hooks/useFetch";

export const MovieList = ({ apiPath }) => {
  const { movies } = useMovies(apiPath);

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
