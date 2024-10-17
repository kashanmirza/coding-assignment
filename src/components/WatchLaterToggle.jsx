import { useDispatch, useSelector } from "react-redux";
import watchLaterSlice from "../data/watchLaterSlice";

const WatchLaterToggle = ({ movie }) => {
  const dispatch = useDispatch();
  const { watchLaterMovies } = useSelector((state) => state.watchLater);
  const { addToWatchLater, removeFromWatchLater } = watchLaterSlice.actions;

  const isWatchLater = watchLaterMovies.some(
    (laterMovie) => laterMovie.id === movie.id
  );

  const handleWatchLaterToggle = () => {
    if (isWatchLater) {
      dispatch(removeFromWatchLater(movie));
    } else {
      dispatch(
        addToWatchLater({
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
    <button
      type="button"
      data-testid={isWatchLater ? "remove-watch-later" : "watch-later"}
      className={`btn btn-light btn-watch-later ${isWatchLater ? "blue" : ""}`}
      onClick={handleWatchLaterToggle}
    >
      {isWatchLater ? <i className="bi bi-check"></i> : "Watch Later"}
    </button>
  );
};

export default WatchLaterToggle;
