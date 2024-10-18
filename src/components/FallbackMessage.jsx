import "../styles/header.scss";

const FallbackMessage = ({ message }) => {
  return (
    <>
      {message && (
        <div className="no-trailer-message">
          <h6>{message}</h6>
        </div>
      )}
    </>
  );
};

export default FallbackMessage;
