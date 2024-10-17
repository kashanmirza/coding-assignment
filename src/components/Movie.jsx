import React, { useState } from "react";

import Poster from "./Poster";
import StarToggle from "./StarToggle";
import WatchLaterToggle from "./WatchLaterToggle";

import { getMovie } from "../services/getMovie";

const Movie = ({ movie }) => {
  const [videoKey, setVideoKey] = useState(null);

  const handleCloseClick = (e) => {
    e.stopPropagation();
    e.currentTarget.closest(".card").classList.remove("opened");
  };

  const handleCardClick = () => {
    document.querySelector(".opened")?.classList.remove("opened");
    document.querySelector(`.card-${movie.id}`).classList.add("opened");
  };

  const viewTrailer = (movie) => {
    const { id } = movie;
    fetchMovie(id);
  };

  const fetchMovie = async (id) => {
    try {
      setVideoKey(null);
      const videoData = getMovie(id);
      if (videoData.videos && videoData.videos.results.length) {
        const trailer = videoData.videos.results.find(
          (vid) => vid.type === "Trailer"
        );
        setVideoKey(trailer ? trailer.key : videoData.videos.results[0].key);
      }
    } catch (error) {
      console.error("Failed to fetch movie:", error);
    }
  };

  return (
    <div className="wrapper col-3 col-sm-4 col-md-3 col-lg-3 col-xl-2">
      <div className={`card card-${movie?.id}`} onClick={handleCardClick}>
        <div className="card-body text-center">
          <div className="overlay" />
          <div className="info_panel">
            <div className="overview">{movie?.overview}</div>
            <div className="year">{movie?.release_date?.substring(0, 4)}</div>

            <StarToggle movie={movie} />

            <WatchLaterToggle movie={movie}/>

            <button
              type="button"
              className="btn btn-dark"
              onClick={() => viewTrailer(movie)}
            >
              View Trailer
            </button>
          </div>

          <Poster movie={movie}/>
        </div>

        <h6 className="title mobile-card">{movie?.title}</h6>
        <h6 className="title">{movie?.title}</h6>

        <button
          type="button"
          className="close"
          onClick={handleCloseClick}
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default Movie;
