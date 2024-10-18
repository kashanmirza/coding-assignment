import { useDispatch, useSelector } from "react-redux";
import modalSlice from "../data/modalSlice";
import "../styles/modal.scss";

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const { hideModal } = modalSlice.actions;
  const { isOpen } = useSelector((state) => state.modal);

  const handleCloseModal = () => {
    dispatch(hideModal());
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
              <span className="close-modal" onClick={handleCloseModal}>
                &times;
              </span>

            <div className="modal-video-container">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
