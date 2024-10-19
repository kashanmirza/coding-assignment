import { useDispatch } from "react-redux";
import { fetchMovie } from "../data/movieSlice";
import modalSlice from "../data/modalSlice";

import "../styles/modal.scss";

const ViewTrailerButton = ({ movie }) => {
  const dispatch = useDispatch();
  const { showModal } = modalSlice.actions;

  const viewTrailer = (movie) => {
    const { id } = movie;
    dispatch(fetchMovie(id));
    dispatch(showModal());
  };

  return (
    <button
      type="button"
      className="btn btn-dark"
      onClick={() => viewTrailer(movie)}
    >
      View Trailer
    </button>
  );
};

export default ViewTrailerButton;
