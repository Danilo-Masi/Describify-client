//Flowbite
import { Modal } from "flowbite-react";
//Images
import profilePicture1 from '../assets/images/profile-picture-1.png';
import profilePicture2 from '../assets/images/profile-picture-2.png';
import profilePicture3 from '../assets/images/profile-picture-3.png';
import profilePicture4 from '../assets/images/profile-picture-4.png';

interface ModalMessageProps {
    onClose: () => void;
}

export default function ModalMessage({ onClose }: ModalMessageProps) {
    return (
        <Modal dismissible show size="sm" className="bg-dark-elevation4 dark:bg-dark-elevation4">
            <Modal.Body className="bg-custom-elevation dark:bg-dark-elevation2 rounded-lg p-10 flex flex-col gap-y-5 items-center justify-center">
                <div className="flex -space-x-3 rtl:space-x-reverse">
                    <img className="w-10 h-10 border-2 border-custom-solidColor rounded-full dark:border-dark-solidColor" src={profilePicture1} alt="profile-picture-1" />
                    <img className="w-10 h-10 border-2 border-custom-solidColor rounded-full dark:border-dark-solidColor" src={profilePicture2} alt="profile-picture-2" />
                    <img className="w-10 h-10 border-2 border-custom-solidColor rounded-full dark:border-dark-solidColor" src={profilePicture3} alt="profile-picture-3" />
                    <img className="w-10 h-10 border-2 border-custom-solidColor rounded-full dark:border-dark-solidColor" src={profilePicture4} alt="profile-picture-4" />
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2 text-center">
                    <h1 className="text-3xl font-extrabold text-center text-balance text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">Hey! Sei stato inserito correttamente nella waitlist</h1>
                    <p className="text-md font-medium text-center text-balance text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">Riceverai un email di notifica quando la piattaforma sarà pronta e riceverai i tupi 20 token di benvenuto</p>
                </div>
                <button
                    name="button-close"
                    type="button"
                    className="text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor font-medium rounded-lg text-sm px-5 py-2.5"
                    onClick={onClose}>
                        Capito! Grazie
                </button>
            </Modal.Body>
        </Modal >
    )
}
