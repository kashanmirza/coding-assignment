import React, { useState } from "react";
import Header from "./Header";
import YouTubePlayer from "./YoutubePlayer";
import FallbackMessage from "./FallbackMessage";
import { getMovie } from "../services/getMovie";

const Layout = ({ children }) => {
  const [videoKey, setVideoKey] = useState(null);

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
    <div>
      <Header />

      <div className="container">
        {videoKey ? (
          <YouTubePlayer videoKey={videoKey} />
        ) : (
          <FallbackMessage
            message={"No trailer available. Try another movie."}
          />
        )}

        {children}
      </div>
    </div>
  );
};

export default Layout;
