// React
import React, { Dispatch, SetStateAction } from 'react';
// React-tostify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// I18Next
import { useTranslation } from 'react-i18next';
// Axios
import axios from 'axios';
// Utilities
import { useLanguage } from '../utilities/useLanguage';
// Components
import { SparklingStars } from './SvgComponents';

// Url del server di produzione
const SERVER_URL = 'http://localhost:3000';
// Url del sever di rilascio
//const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

interface CustomInputProps {
    inputType?: string;
    dimensioneInput?: string;
    valoreId: string;
    valoreLabel: string;
    valoreInput: string;
    valorePlaceholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SelectInputProps {
    dimensioneInput?: string;
    valoreId: string;
    valoreLabel: string;
    valoreInput: string;
    options: string[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface ProductFormProps {
    selectedCategory: string;
    selectedBrand: string;
    selectedSize: string;
    selectedColor: string;
    selectedConditions: string;
    selectedPrice: number | undefined;
    setSelectedCategory: Dispatch<SetStateAction<string>>;
    setSelectedBrand: Dispatch<SetStateAction<string>>;
    setSelectedSize: Dispatch<SetStateAction<string>>;
    setSelectedColor: Dispatch<SetStateAction<string>>;
    setSelectedConditions: Dispatch<SetStateAction<string>>;
    setTitleGenerated: Dispatch<SetStateAction<string>>;
    setDescriptionGenerated: Dispatch<SetStateAction<string>>;
    setSelectedPrice: Dispatch<SetStateAction<number>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

function CustomInput({ inputType, dimensioneInput, valoreId, valoreLabel, valoreInput, valorePlaceholder, onChange }: CustomInputProps) {
    return (
        <div className={`${dimensioneInput && dimensioneInput} w-full flex flex-col gap-2`}>
            <label
                htmlFor={valoreId}
                className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                {valoreLabel}
            </label>
            <input
                aria-label={`Input ${valoreLabel}`}
                id={valoreId}
                type={inputType ? inputType : "text"}
                placeholder={valorePlaceholder}
                className="w-full rounded-lg p-3 capitalize bg-custom-elevation3 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
                value={valoreInput}
                onChange={onChange} />
        </div>
    );
}

function SelectInput({ dimensioneInput, valoreId, valoreLabel, valoreInput, options, onChange }: SelectInputProps) {
    return (
        <div className={`${dimensioneInput && dimensioneInput} w-full flex flex-col gap-2`}>
            <label
                htmlFor={valoreId}
                className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                {valoreLabel}
            </label>
            <select
                className="w-full rounded-lg p-3 capitalize bg-custom-elevation3 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
                id={valoreId}
                value={valoreInput}
                onChange={onChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

function ButtonGenerate({ labelButton, onClick }: { labelButton: string, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="w-full flex items-center justify-center gap-x-2 rounded-lg px-5 py-3 mt-3 font-semibold text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor">
            {labelButton}
            <SparklingStars />
        </button>
    );
}

export default function ProductForm({ selectedCategory, selectedBrand, selectedSize, selectedColor, selectedConditions, selectedPrice, setSelectedCategory, setSelectedBrand, setSelectedColor, setSelectedSize, setSelectedConditions, setTitleGenerated, setDescriptionGenerated, setSelectedPrice, setLoading }: ProductFormProps) {

    // Componente per capire la lingua in uso
    const language = useLanguage();
    // Componente per la traduzione
    const { t } = useTranslation();
    // Opzioni della select condizioni
    const conditionsOptions = ["", "Discrete", "Buone", "Ottime", "Nuovo senza cartellino", "Nuovo con cartellino"];
    // Opzioni della select colori
    const colorsOptions = ["", "Rosso", "Giallo", "Verde"];

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Converto iol valore in numero o imposto a 0 se vuoto
        const value = e.target.value === '' ? 0 : Number(e.target.value);
        // Salvo il valore nello stato solo se è un numero valido o vuoto
        if (!isNaN(value)) {
            setSelectedPrice(value);
        }
    }

    // Funzione per generare la caption
    const handleGenerate = async () => {
        setLoading(true);
        // Validazione dei dati
        const validazioneDati = handleValidate(selectedCategory);
        if (validazioneDati) {
            try {
                // Effettua la richiesta al backend con il token JWT nell'header Authorization //DA MODIFICARE
                const response = await axios.post(`${SERVER_URL}/product-generation`, {
                    prompt: `Categoria del prodotto: ${selectedCategory}, Marca: ${selectedBrand}, Taglia: ${selectedSize}, Colore: ${selectedColor}`,
                });
                if (response.status === 200) {
                    handelSuccess(response.data);
                }
            } catch (error) {
                handleError(error);
            }
        } else {
            setLoading(false);
        }
    }

    // Funzione per validare i dati prima di procedere con la generazione
    const handleValidate = (selectedCategory: string) => {
        if (selectedCategory === "") {
            toast.warn(t('productFormErroreDati'));
            return false;
        }
        return true;
    }

    // Funzione per gestire le operazioni nel caso in cui la generazione vada a buon fine
    const handelSuccess = (data: any) => {
        // Impostiamo i valori generati
        const title = data.title;
        const description = data.description;
        setTitleGenerated(title);
        setDescriptionGenerated(description);
        // Fine caricamento dello skeleton
        setLoading(false);
        // Resettiamo i valori del form
        setSelectedCategory("");
        setSelectedBrand("");
        setSelectedColor("");
        setSelectedSize("");
        setSelectedConditions("");
    }

    // Funzione per gestire le operazioni nel caso in cui la generazione non vada a buon fine
    const handleError = (error: any) => {
        console.error("CLIENT: Errore durante la generazione ", error.message);
        toast.error(t('productFormErroreGenerazione'), {
            onClose: () => setLoading(false),
        });
    }

    return (
        <div className="w-full h-full flex flex-col md:flex-row flex-wrap items-start justify-between">
            {/* Input categoria */}
            <CustomInput
                valoreId='inputCategoriaId'
                valoreLabel={t('productFormLabelCategoria')}
                valorePlaceholder={t('productFormPlaceholderCategoria')}
                valoreInput={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)} />
            {/* Input brand */}
            <CustomInput
                valoreId='inputBrandId'
                valoreLabel={t('productFormLabelBrand')}
                valorePlaceholder={t('productFormPlaceholderBrand')}
                valoreInput={selectedBrand}
                onChange={e => setSelectedBrand(e.target.value)} />
            {/* Input colore */}
            <SelectInput
                dimensioneInput='md:w-[calc(50%-1rem)]'
                valoreId='inputColoriId'
                valoreLabel={t('productFormLabelColore')}
                valoreInput={selectedColor}
                options={colorsOptions}
                onChange={(e) => setSelectedColor(e.target.value)} />
            {/* Input taglia */}
            <CustomInput
                dimensioneInput='md:w-[calc(50%-1rem)]'
                valoreId='inputTagliaId'
                valoreLabel={t('productFormLabelDimensione')}
                valorePlaceholder={t('productFormPlaceholderDimensione')}
                valoreInput={selectedSize}
                onChange={e => setSelectedSize(e.target.value)} />
            {/* Input condizioni */}
            <SelectInput
                dimensioneInput='md:w-[calc(50%-1rem)]'
                valoreId='inputCondizioniId'
                valoreLabel={t('productFormLabelCondizioni')}
                valoreInput={selectedConditions}
                options={conditionsOptions}
                onChange={(e) => setSelectedConditions(e.target.value)} />
            {/* Input prezzo */}
            <CustomInput
                inputType="number"
                dimensioneInput='md:w-[calc(50%-1rem)]'
                valoreId='inputCondizioniId'
                valoreLabel={t('productFormLabelPrezzo')}
                valorePlaceholder={t('productFormPlaceholderPrezzo')}
                valoreInput={(String(selectedPrice))}
                onChange={handlePriceChange} />
            {/* Bottone per la generazione */}
            <ButtonGenerate
                labelButton={t('productFormBottone')}
                onClick={handleGenerate} />
        </div>
    );
}
