import { useState } from "react";

interface Elemento {
    value: string;
    children?: Elemento[];
}

interface ModalDropdownProps {
    valoreLabel: string;
    arrayDati: Elemento[];
    onClick: () => void;
}

export default function ModalDropdown({ valoreLabel, arrayDati, onClick }: ModalDropdownProps) {
    // Stato per gli elementi attualmente visualizzati nella lista.
    const [elementiVisualizzati, setElementiVisualizzati] = useState<Elemento[]>(arrayDati);
    // Stato per l'elemento selezionato.
    const [elementoSelezionato, setElementoSelezionato] = useState<Elemento | null>(null);

    const handleSelect = (elemento: Elemento) => {
        if (elemento.children && elemento.children.length > 0) {
            setElementiVisualizzati(elemento.children);
        } else {
            setElementoSelezionato(elemento);
            // Chiudere il modal //
        }
    };

    return (
        <div id="crypto-modal" tabIndex={-1} aria-hidden="true" className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    {/* Header del Modal */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-lg font-semibold text-gray-900">
                            {valoreLabel}
                        </h3>
                        <button onClick={onClick} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Lista Elementi */}
                    <div className="p-4 md:p-5">
                        <ul className="my-4 space-y-3">
                            {elementiVisualizzati.map((elemento, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSelect(elemento)}
                                    className="bg-gray-200 p-3.5 rounded-lg cursor-pointer">
                                    <p>{elemento.value}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
