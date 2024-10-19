import React from "react";
import Poster from "./Poster";
import StarToggle from "./StarToggle";
import WatchLaterToggle from "./WatchLaterToggle";
import ViewTrailerButton from "./ViewTrailerButton";

const Movie = ({ movie }) => {
  return (
    <div className="wrapper col-3 col-sm-4 col-md-3 col-lg-3 col-xl-2">
      <div className={`card card-${movie?.id}`}>
        <div className="card-body text-center">
          <div className="overlay" />
          <div className="info_panel">
            <div className="overview">{movie?.overview}</div>
            <div className="year">{movie?.release_date?.substring(0, 4)}</div>

            <StarToggle movie={movie} />

            <WatchLaterToggle movie={movie} />

            <ViewTrailerButton movie={movie} />
          </div>

          <Poster movie={movie} />
        </div>

        <h6 className="title mobile-card">{movie?.title}</h6>
        <h6 className="title">{movie?.title}</h6>
      </div>
    </div>
  );
};

export default Movie;
