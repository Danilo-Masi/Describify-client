//Flowbite
import { Modal, ModalHeader } from "flowbite-react";
//Components
import WaitlistGadget from "./WaitlistGadget";
//Images
//Images
import picture1 from '../assets/images/picture_1.webp';
import picture2 from '../assets/images/picture_2.webp';
import picture3 from '../assets/images/picture_3.webp';
import picture4 from '../assets/images/picture_4.webp';
import picture5 from '../assets/images/picture_5.webp';
import picture6 from '../assets/images/picture_6.webp';

interface WaitlistModalProps {
    onClose: () => void;
}

export default function WaitlistModal({ onClose }: WaitlistModalProps) {
    return (
        <Modal
            show
            dismissible={true}
            size="md"
            onClose={onClose}
            className="bg-dark-elevation4 dark:bg-dark-elevation4">
            <ModalHeader className="bg-custom-elevation dark:bg-dark-elevation2 rounded-t-lg border-b-0" />
            <Modal.Body className="bg-custom-elevation dark:bg-dark-elevation2 rounded-b-lg p-10 pt-0">
                <div className="flex flex-col gap-y-5">
                    <p className="text-5xl text-center font-extrabold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">Ci siamo quasi...</p>
                    <div className="flex items-center justify-center -space-x-3 rtl:space-x-reverse">
                        <img className="w-10 h-10 border-2 border-custom-solidColor rounded-full dark:border-dark-solidColor" src={picture1} alt="profile-picture-1" />
                        <img className="w-10 h-10 border-2 border-custom-solidColor rounded-full dark:border-dark-solidColor" src={picture2} alt="profile-picture-2" />
                        <img className="w-10 h-10 border-2 border-custom-solidColor rounded-full dark:border-dark-solidColor" src={picture3} alt="profile-picture-3" />
                        <img className="w-10 h-10 border-2 border-custom-solidColor rounded-full dark:border-dark-solidColor" src={picture4} alt="profile-picture-4" />
                        <img className="w-10 h-10 border-2 border-custom-solidColor rounded-full dark:border-dark-solidColor" src={picture5} alt="profile-picture-3" />
                        <img className="w-10 h-10 border-2 border-custom-solidColor rounded-full dark:border-dark-solidColor" src={picture6} alt="profile-picture-4" />
                    </div>
                    <p className="text-lg md:text-md text-center font-medium text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                        Unisciti subito alla nostra waitlist per ottenere un accesso esclusivo alla versione Beta di Describify. Iscrivendoti ora, riceverai anche
                        <span className="text-bold text-custom-solidColor dark:text-dark-solidColor"> 20 token omaggio</span> al tuo primo accesso!
                    </p>
                    <WaitlistGadget mdWidth="md:w-full" />
                </div>
            </Modal.Body>
        </Modal>
    )
}
