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
        <Modal dismissible show size="sm">
            <Modal.Body className="flex flex-col justify-center items-center gap-y-7">
                <div className="flex -space-x-3 rtl:space-x-reverse">
                    <img className="w-12 h-12 border-2 border-white rounded-full dark:border-gray-800" src={profilePicture1} alt="profile-picture-1" />
                    <img className="w-12 h-12 border-2 border-white rounded-full dark:border-gray-800" src={profilePicture2} alt="profile-picture-2" />
                    <img className="w-12 h-12 border-2 border-white rounded-full dark:border-gray-800" src={profilePicture3} alt="profile-picture-3" />
                    <img className="w-12 h-12 border-2 border-white rounded-full dark:border-gray-800" src={profilePicture4} alt="profile-picture-4" />
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2 text-center">
                    <h1 className="text-custom-textPrimary dark:text-dark-textPrimary font-bold text-2xl text-balance">Yo! you have been added to our waitlist</h1>
                    <p className="text-custom-textSecondary dark:text-dark-textSecondary font-light text-sm text-balance">We will send you an email as soon as we ready to launch.</p>
                </div>
                <button
                    name="button-close"
                    type="button"
                    className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                    onClick={onClose}>
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-custom-elevation dark:bg-dark-elevation rounded-md group-hover:bg-opacity-0">
                        Got it! Thank you
                    </span>
                </button>
            </Modal.Body>
        </Modal >
    )
}
