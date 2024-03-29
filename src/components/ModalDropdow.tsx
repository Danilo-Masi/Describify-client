import { useState } from "react";
//Flowbite
import { Modal } from 'flowbite-react';

interface Elemento {
    value: string;
    children?: Elemento[];
}

interface ModalDropdownProps {
    valoreLabel: string;
    arrayDati: Elemento[];
    onClick: () => void;
    onSelect: (value: string) => void;
}

export default function ModalDropdown({ valoreLabel, arrayDati, onClick, onSelect }: ModalDropdownProps) {

    //Stato per impostare la lista degli elementi da visualizzare
    const [elementiVisualizzati, setElementiVisualizzati] = useState<Elemento[]>(arrayDati);
    //Funzione per impostare l'elemento selezionato o nel caso avesse sotto elementi mostrare quelli
    const handleSelect = (elemento: Elemento) => {
        if (elemento.children && elemento.children.length > 0) {
            setElementiVisualizzati(elemento.children);
        } else {
            onSelect(elemento.value);
            onClick();
        }
    };

    return (
        <Modal show={true} onClose={onClick} size="md">
            <Modal.Header>
                {valoreLabel}
            </Modal.Header>
            <Modal.Body className="py-0 max-h-[80svh]">
                <div className="flex flex-col w-full h-auto pb-2">
                    <ul className="my-4 space-y-3">
                        {elementiVisualizzati.map((elemento, key) => (
                            <li
                                key={key}
                                onClick={() => handleSelect(elemento)}
                                className={`flex items-center justify-between p-2.5 text-md rounded-lg cursor-pointer border bg-custom-elevation dark:bg-dark-elevation border-custom-border dark:border-dark-border text-custom-textSecondary dark:text-dark-textSecondary `}>
                                <p>{elemento.value}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </Modal.Body>
        </Modal>
    );
}
