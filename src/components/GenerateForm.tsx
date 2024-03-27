import React, { useState } from "react";
//Data
import { taglie, colori, categorie } from '../data/data';
//Components
import ModalDropdow from "./ModalDropdow";

interface TextInputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    valoreLabel: string;
}

function TextInput({ onChange, valoreLabel }: TextInputProps) {
    return (
        <div className="w-full flex flex-col gap-2">
            <label htmlFor={valoreLabel} className="flex text-sm font-medium text-gray-900 dark:text-white">
                {valoreLabel}
            </label>
            <input
                type="text"
                placeholder="Brand name..."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id={valoreLabel}
                required
                onChange={onChange} />
        </div>
    );
}

interface InputSelectProps {
    mdWidth: string,
    valoreLabel: string,
    valoreInput: string,
    onClick: () => void
}

function InputSelect({ mdWidth, valoreLabel, valoreInput, onClick }: InputSelectProps) {
    return (
        <div className={`${mdWidth} w-full h-auto flex flex-col gap-2`}>
            <label htmlFor={valoreLabel} className="flex text-sm font-medium text-gray-900">
                {valoreLabel}
            </label>
            <div
                id={valoreLabel}
                onClick={onClick}
                className="flex items-center justify-between p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 cursor-pointer">
                <p>{valoreInput}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    );
}

interface ButtonGenerateProps {
    onClick: () => void;
}

function ButtonGenerate({ onClick }: ButtonGenerateProps) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="w-full md:w-[calc(50%-0.5rem)] mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 focus:outline-none disabled:bg-gray-400 ">
            Generate
        </button>
    );
}

interface GenerateFormProps {
    onGeneration: (brand: string, categoria: string, taglia: string, colore: string) => void;
}

export default function GenerateForm({ onGeneration }: GenerateFormProps) {

    const [brand, setBrand] = useState("");
    const [categoria, setCategoria] = useState("Scegli categoria");
    const [taglia, setTaglia] = useState("Scegli taglia");
    const [colore, setColore] = useState("Scegli colore");


    interface ModalItem {
        value: string;
        children?: ModalItem[];
    }

    const [modalData, setModalData] = useState<ModalItem[]>([]);
    const [modalLabel, setModalLabel] = useState("");
    const [modalVisibility, setModalVisibiliy] = useState(false);

    const handleModal = (arrayData: ModalItem[], valueLabel: string) => {
        setModalData(arrayData);
        setModalLabel(valueLabel)
        setModalVisibiliy(true);
    }

    const handleSelection = (selectedValue: string) => {
        switch (modalData) {
            case categorie:
                setCategoria(selectedValue);
                break;
            case taglie:
                setTaglia(selectedValue);
                break;
            case colori:
                setColore(selectedValue);
                break;
            default:
                break;
        }
    }

    return (
        <form className="w-full md:w-3/4 h-auto flex flex-wrap justify-start gap-4 md:gap-3 py-6 md:py-5 px-5 rounded-md bg-gray-100 border border-gray-300">
            <InputSelect mdWidth="md:w-full" valoreInput={categoria} valoreLabel="Select a category" onClick={() => handleModal(categorie, "Select a category")} />
            <TextInput onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBrand(event.target.value)} valoreLabel="Brand name" />
            <InputSelect mdWidth="md:w-[calc(50%-0.5rem)]" valoreInput={taglia} valoreLabel="Select a size" onClick={() => handleModal(taglie, "Select a size")} />
            <InputSelect mdWidth="md:w-[calc(50%-0.5rem)]" valoreInput={colore} valoreLabel="Select a color" onClick={() => handleModal(colori, "Select a color")} />
            <ButtonGenerate onClick={() => onGeneration(brand, categoria, taglia, colore)} />
            {modalVisibility
                ? <ModalDropdow valoreLabel={modalLabel} arrayDati={modalData} onClick={() => setModalVisibiliy(false)} onSelect={(selectedValue) => handleSelection(selectedValue)} />
                : ''
            }
        </form>
    );
}
