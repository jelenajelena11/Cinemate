import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({apiPath}) => {
  const { movies } = useFetch(apiPath);

  return (
    <main>
      <section className="py-7 mx-auto">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
