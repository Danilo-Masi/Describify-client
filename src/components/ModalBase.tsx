import { ReactNode } from "react";
//Flowbite
import { Modal, ModalHeader } from "flowbite-react";

interface ModalBaseProps {
  size: string;
  modalTitle: string;
  children: ReactNode;
  onClose: () => void;
}

export default function ModalBase({ size, modalTitle, children, onClose }: ModalBaseProps) {
  return (
    <Modal
      show
      size={size}
      position="center"
      className="bg-dark-background dark:bg-dark-background">
      <ModalHeader className='bg-custom-elevation dark:bg-dark-elevation4 border-b-0 rounded-t-lg pb-0 font-inter' onClick={onClose}>{modalTitle}</ModalHeader>
      <Modal.Body className="bg-custom-elevation dark:bg-dark-elevation4 rounded-b-lg pb-10 font-inter">
        {children}
      </Modal.Body>
    </Modal>
  );
}
