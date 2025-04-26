import css from "./ImageModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

function ImageModal({ isOpen, onClose, photo }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        {photo && (
          <div className={css.wrap_desc}>
            <img src={photo.urls.regular} alt={photo.alt_description} />
            <p>
              <b>Description:</b>
              {photo.descriptio ? photo.descriptio : " Whoops no results"},
            </p>
            <p>
              <b>likes:</b> {photo.likes},
            </p>
          </div>
        )}
        <button className={css.closeButton} onClick={onClose}>
          ✖
        </button>
      </Modal>
    </>
  );
}

export default ImageModal;
