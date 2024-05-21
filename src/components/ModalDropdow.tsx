import { useEffect, useState } from "react";
//Flowbite
import { Modal } from 'flowbite-react';

interface Elemento {
    value: string;
    children?: Elemento[];
}

interface ModalDropdownProps {
    valoreTitoloModal: string;
    arrayDati: any;
    context: string;
    onClose: () => void;
    onSelect: (value: string, context: string) => void;
}

const convertJsonToTree = (jsonDati: { [key: string]: any }): Elemento[] => {
    const map = new Map<number, Elemento>();
    //Creazione degli elementi
    Object.keys(jsonDati).forEach(key => {
        const item = jsonDati[key];
        map.set(item.id, { value: item.title, children: [] });
    });
    //Impostazioni delle relazioni padre-figlio
    const tree: Elemento[] = [];
    Object.keys(jsonDati).forEach(key => {
        const item = jsonDati[key];
        const element = map.get(item.id);
        if (item.parent_id && item.parent_id !== 0) {
            const parent = map.get(item.parent_id);
            if (parent) {
                parent.children?.push(element!);
            }
        } else {
            tree.push(element!);
        }
    });
    return tree;
}

export default function ModalDropdown({ valoreTitoloModal, arrayDati, context, onClose, onSelect }: ModalDropdownProps) {

    //Stato per impostare la lista degli elementi da visualizzare
    const [elementiVisualizzati, setElementiVisualizzati] = useState<Elemento[]>([]);

    //Funzione che carica i dati del json se disponibile
    useEffect(() => {
        const treeData = convertJsonToTree(arrayDati);
        setElementiVisualizzati(treeData);
    }, [arrayDati]);

    //Funzione per impostare l'elemento selezionato o nel caso avesse sotto elementi mostrare quelli
    const handleSelect = (elemento: Elemento) => {
        if (elemento.children && elemento.children.length > 0) {
            setElementiVisualizzati(elemento.children);
        } else {
            onSelect(elemento.value, context);
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
                <>
                    <ul className="flex flex-col gap-y-3">
                        {elementiVisualizzati && elementiVisualizzati.map((elemento, key) => (
                            <li
                                key={key}
                                onClick={() => handleSelect(elemento)}
                                className="flex items-center justify-between p-2.5 text-md rounded-lg cursor-pointer border bg-custom-elevation dark:bg-dark-elevation3 border-custom-borderGray dark:border-dark-borderGray text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                                <p>{elemento.value}</p>
                            </li>
                        ))}
                    </ul>
                </>
            </Modal.Body>
        </Modal>
    );
}
