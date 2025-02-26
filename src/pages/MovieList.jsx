
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({apiPath}) => {
  

  const {data: movies} = useFetch(apiPath);
  
  return (
    <main>
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
