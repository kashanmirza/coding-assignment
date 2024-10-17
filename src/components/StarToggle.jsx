import { useDispatch, useSelector } from "react-redux";
import starredSlice from "../data/starredSlice";

const StarToggle = ({ movie }) => {
  const dispatch = useDispatch();
  const { starredMovies } = useSelector((state) => state.starred);
  const { starMovie, unstarMovie } = starredSlice;
  const isStarred = starredMovies.some(
    (starredMovie) => starredMovie.id === movie.id
  );

  const handleStarToggle = () => {
    if (isStarred) {
      dispatch(unstarMovie(movie));
    } else {
      dispatch(
        starMovie({
          id: movie.id,
          overview: movie.overview,
          release_date: movie.release_date?.substring(0, 4),
          poster_path: movie.poster_path,
          title: movie.title,
        })
      );
    }
  };
  return (
    <span
      className="btn-star"
      data-testid={isStarred ? "unstar-link" : "starred-link"}
      onClick={handleStarToggle}
    >
      <i className={isStarred ? "bi bi-star-fill" : "bi bi-star"} />
    </span>
  );
};

export default StarToggle;
