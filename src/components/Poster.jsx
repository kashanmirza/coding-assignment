import placeholder from "../assets/not-found-500X750.jpeg";

const Poster = ({ movie }) => {
  const { poster_path, title } = movie;
  return (
    <img
      className="center-block"
      src={
        poster_path
          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : placeholder
      }
      alt={`${title} poster`}
    />
  );
};

export default Poster;
