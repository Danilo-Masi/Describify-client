import React, { useState } from "react";
//I18Next
import { useTranslation } from 'react-i18next';
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
            <label htmlFor={valoreLabel} className="flex text-sm font-medium text-custom-textPrimary dark:text-dark-textPrimary">
                {valoreLabel}
            </label>
            <input
                type="text"
                placeholder="Zara, Apple, Nike,..."
                className="border text-md rounded-lg block w-full p-2.5 bg-custom-elevation dark:bg-dark-elevation border-custom-border dark:border-dark-border text-custom-textSecondary dark:text-dark-textSecondary placeholder:text-custom-textSecondary dark:placeholder:text-dark-textSecondary"
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
            <label htmlFor={valoreLabel} className="flex text-sm font-medium text-custom-textPrimary dark:text-dark-textPrimary">
                {valoreLabel}
            </label>
            <div
                id={valoreLabel}
                onClick={onClick}
                className="flex items-center justify-between p-2.5 text-md rounded-lg cursor-pointer border bg-custom-elevation dark:bg-dark-elevation border-custom-border dark:border-dark-border text-custom-textSecondary dark:text-dark-textSecondary">
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
    labelButton: string;
}

function ButtonGenerate({ onClick, labelButton }: ButtonGenerateProps) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="w-full md:w-[calc(50%-0.5rem)] mt-2  focus:ring-1 font-medium rounded-lg text-md px-5 py-2.5 focus:outline-none disabled:bg-gray-400 bg-custom-accent dark:bg-dark-accent text-dark-textPrimary">
            {labelButton}
        </button>
    );
}

interface GenerateFormProps {
    onGeneration: (brand: string, categoria: string, taglia: string, colore: string) => void;
}

export default function GenerateForm({ onGeneration }: GenerateFormProps) {

    const { t } = useTranslation();

    const [brand, setBrand] = useState("");
    const [categoria, setCategoria] = useState("TV, Blazer,Shorts,...");
    const [taglia, setTaglia] = useState("XS,M,XL,...");
    const [colore, setColore] = useState("Red, Black,...");


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
        <form className="w-full md:w-1/2 h-auto flex flex-wrap justify-start gap-4 md:gap-3 py-6 md:py-5 px-5 rounded-lg border border-custom-border dark:border-dark-border bg-custom-elevation dark:bg-dark-elevation">
            <InputSelect mdWidth="md:w-full" valoreInput={categoria} valoreLabel={t('labelCategory')} onClick={() => handleModal(categorie, "Select a category")} />
            <TextInput onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBrand(event.target.value)} valoreLabel={t('labelBrand')} />
            <InputSelect mdWidth="md:w-[calc(50%-0.5rem)]" valoreInput={taglia} valoreLabel={t('labelSize')} onClick={() => handleModal(taglie, "Select a size")} />
            <InputSelect mdWidth="md:w-[calc(50%-0.5rem)]" valoreInput={colore} valoreLabel={t('labelColor')} onClick={() => handleModal(colori, "Select a color")} />
            <ButtonGenerate onClick={() => onGeneration(brand, categoria, taglia, colore)} labelButton={t('labelButtonGenerate')} />
            {modalVisibility
                ? <ModalDropdow valoreLabel={modalLabel} arrayDati={modalData} onClick={() => setModalVisibiliy(false)} onSelect={(selectedValue) => handleSelection(selectedValue)} />
                : ''
            }
        </form>
    );
}
