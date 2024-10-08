import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { useSearchContext } from "../../hooks/useSearchContext";

export const ImageModal = ({ images }) => {
  Modal.setAppElement("#root");

  const { clickedId, handleModalClose, isOpen } = useSearchContext();

  const modalImage = images.find((image) => image.id === clickedId);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "10px",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleModalClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
    >
      {isOpen && (
        <div className={css.modal_image}>
          <img
            className={css.modal_poster}
            src={modalImage.urls.regular}
            alt={modalImage.alt_description}
          ></img>
          <div className={css.info_box}>
            <p className={css.text}>Author : {modalImage.user.name}</p>
          </div>
        </div>
      )}
    </Modal>
  );
};
