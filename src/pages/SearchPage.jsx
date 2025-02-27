import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const SearchPage = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q")
  const {data: movies} = useFetch(apiPath, queryTerm);

  // hook
   useTitle(`Search result for ${queryTerm}`);
  
  return (
    <main>
      <section className="mt-20">
        <p className="text-3xl text-gray-700 dark:text-slate-200">{movies === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'` }</p>
      </section>
      <section className="py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
          
        </div>
      </section>
    </main>
  )
}
