import Movie from "./Movie";
import "../styles/movies.scss";
import { useSelector } from "react-redux";

const Movies = () => {
  const { movies } = useSelector((state) => state);
  return (
    <div data-testid="movies">
      {movies &&
        movies?.movies?.results?.map((movie) => {
          return (
            <Movie
              movie={movie}
              key={movie.id}
            />
          );
        })}
    </div>
  );
};

export default Movies;
