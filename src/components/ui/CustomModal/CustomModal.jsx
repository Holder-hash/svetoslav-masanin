import "./CustomModal.css";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

function CustomModal({ isOpen, onClose, children }) {
  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      closeTimeoutMS={300}
      onRequestClose={() => onClose()}
      className={"modal-wrapper"}
    >
      <IoClose onClick={() => onClose()} className="modal-close-button" />
      {children}
    </Modal>
  );
}

export default CustomModal;
