import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import FallbackMessage from "../components/FallbackMessage";
import Spinner from "./Spinner";

const YoutubePlayer = () => {
  const { videoKey, fetchStatus } = useSelector((state) => state.movie);

  return (
    <>
      {fetchStatus === "loading" && <Spinner size="large" />}
      {fetchStatus === "success" && videoKey ? (
        <ReactPlayer
          className="video-player"
          url={`https://www.youtube.com/watch?v=${videoKey}`}
          controls={true}
          playing={true}
          width="100%"
          height="100%"
          data-testid="youtube-player"
        />
      ) : (
        <FallbackMessage message={"No trailer available. Try another movie."} />
      )}
    </>
  );
};

export default YoutubePlayer;
