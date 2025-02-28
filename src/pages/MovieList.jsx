import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle"; 
import { Card } from "../components"



export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  const pageTitle = useTitle(title);

  if (!movies) {
    return <p>Loading...</p>; // Show a loading state
  }

  return (
    <main>
      <section className="py-7 mt-8">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies?.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
