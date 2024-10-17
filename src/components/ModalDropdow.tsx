// React
import { useEffect, useState } from "react";
// Flowbite-react
import { Modal } from 'flowbite-react';

interface Elemento {
    id: number;
    title: string;
    parent_id: number;
    parent: string;
}

interface ModalDropdownProps {
    valoreTitoloModal: string;
    arrayDati: any;
    context: string;
    onClose: () => void;
    onSelect: (value: string, context: string) => void;
}

export default function ModalDropdown({ valoreTitoloModal, arrayDati, context, onClose, onSelect }: ModalDropdownProps) {

    // Stato per impostare la lista degli elementi da visualizzare
    const [elementiVisualizzati, setElementiVisualizzati] = useState<Elemento[]>([]);

    // Funzione che carica i dati del json se disponibile
    useEffect(() => {
        let filteredData: Elemento[] = [];
        if (context === 'categoria' || context === 'colore') {
            filteredData = Object.values(arrayDati).filter((item: any) => item.parent_id === 0) as Elemento[];
        } else if (context === 'dimensione') {
            filteredData = Object.values(arrayDati);
        }
        setElementiVisualizzati(filteredData);
    }, [arrayDati]);

    // Funzione per impostare l'elemento selezionato
    const handleSelect = (elemento: Elemento) => {
        const children = Object.values(arrayDati).filter((item: any) => item.parent_id === elemento.id) as Elemento[];
        if (children.length > 0) {
            setElementiVisualizzati(children);
        } else {
            onSelect(elemento.title, context);
            onClose();
        }
    };

    return (
        <Modal
            show
            size="md"
            position="center"
            className="bg-dark-background dark:bg-dark-background">
            <Modal.Header className='bg-custom-elevation dark:bg-dark-elevation4 border-custom-borderGray dark:border-dark-borderGray rounded-t-lg' onClick={onClose}>
                {valoreTitoloModal}
            </Modal.Header>
            <Modal.Body className=" max-h-[80svh] py-3 rounded-b-lg bg-custom-elevation dark:bg-dark-elevation4 ">
                <ul className="flex flex-col gap-y-3">
                    {elementiVisualizzati && elementiVisualizzati.map((elemento, key) => (
                        <li
                            key={key}
                            onClick={() => handleSelect(elemento)}
                            className="flex items-center justify-between p-2.5 text-md rounded-lg cursor-pointer border bg-custom-elevation dark:bg-dark-elevation3 border-custom-borderGray dark:border-dark-borderGray text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                            <p>{elemento.title}</p>
                        </li>
                    ))}
                </ul>
            </Modal.Body>
        </Modal>
    );
}
