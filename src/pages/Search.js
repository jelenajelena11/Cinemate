import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("query");
  const { movies } = useFetch(apiPath, queryParam);

  return (
    <main>
      <section className="py-7 text-left">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `Results not found for ${queryParam}`
            : `Results for '${queryParam}'`}
        </p>
      </section>
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
