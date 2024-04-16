//Flowbite
import { Modal } from "flowbite-react";
import WaitlistGadget from "./WaitlistGadget";

interface WaitlistModalProps {
    onClose: () => void;
}

export default function WaitlistModal({ onClose }: WaitlistModalProps) {
    return (
        <Modal
            show
            dismissible
            size="md"
            onClose={onClose}
            className="bg-custom-background dark:bg-dark-background">
            <Modal.Body className="bg-custom-elevation2 dark:bg-dark-elevation2 rounded-lg">
                <div className="flex flex-col gap-y-5">
                    <p className="text-2xl font-bold text-custom-textPrimary dark:text-dark-textPrimary">Entra in Esclusiva</p>
                    <p className="text-md font-light text-custom-textSecondary dark:text-dark-textSecondary">Unisciti alla waitlist di Describify oggi e accedi a strumenti che trasformeranno il tuo e-commerce. Posti limitati, agisci ora!</p>
                    <WaitlistGadget mdWidth="md:w-full"/>
                </div>
            </Modal.Body>
        </Modal>
    )
}
