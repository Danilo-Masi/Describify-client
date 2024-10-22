// React
import { Dispatch, SetStateAction } from 'react';
// React-tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// I18Next
import { useTranslation } from 'react-i18next';
// Axios
import axios from 'axios';
// Utilities
import { useLanguage } from '../utilities/useLanguage';

// Url del server di produzione
const SERVER_URL = 'http://localhost:3000';
// Url del sever di rilascio
//const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

interface TextInputProps {
    valoreId: string;
    valoreLabel: string;
    valoreInput: string;
    valorePlaceholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ButtonGenerateProps {
    labelButton: string;
    onClick: () => void;
}

interface ProductFormProps {
    selectedCategory: string;
    selectedBrand: string;
    selectedSize: string;
    selectedColor: string;
    setSelectedCategory: Dispatch<SetStateAction<string>>;
    setSelectedBrand: Dispatch<SetStateAction<string>>;
    setSelectedSize: Dispatch<SetStateAction<string>>;
    setSelectedColor: Dispatch<SetStateAction<string>>;
    setTitleGenerated: Dispatch<SetStateAction<string>>;
    setDescriptionGenerated: Dispatch<SetStateAction<string>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

function TextInput({ valoreId, valoreLabel, valoreInput, valorePlaceholder, onChange }: TextInputProps) {
    return (
        <div className="w-full flex flex-col gap-2">
            <label htmlFor={valoreId} className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                {valoreLabel}
            </label>
            <input
                id={valoreId}
                type="text"
                placeholder={valorePlaceholder}
                className="w-full rounded-lg p-3 capitalize bg-custom-elevation3 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
                value={valoreInput}
                onChange={onChange} />
        </div>
    );
}

function ButtonGenerate({ labelButton, onClick }: ButtonGenerateProps) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="w-full flex items-center justify-center gap-x-2 rounded-lg px-5 py-3 font-semibold text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor">
            {labelButton}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
            </svg>
        </button>
    );
}

export default function ProductForm({ selectedCategory, selectedBrand, selectedSize, selectedColor, setSelectedCategory, setSelectedBrand, setSelectedColor, setSelectedSize, setTitleGenerated, setDescriptionGenerated, setLoading }: ProductFormProps) {

    const language = useLanguage();
    const { t } = useTranslation();

    // Funzione per generare la caption
    const handleGenerate = async () => {
        setLoading(true);
        const validazioneDati = handleValidate({ selectedCategory, selectedBrand, selectedSize, selectedColor });
        if (validazioneDati) {
            try {
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
    const handleValidate = ({ selectedCategory, selectedBrand, selectedSize, selectedColor }: any) => {
        if (selectedCategory === "" || selectedBrand === "" || selectedSize === "" || selectedColor === "") {
            toast.warn("Controlla i dati inseriti prima di procedere");
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
    }

    // Funzione per gestire le operazioni nel caso in cui la generazione non vada a buon fine
    const handleError = (error: any) => {
        console.error(error.message);
        toast.error('Errore durante la generazione...', {
            onClose: () => setLoading(false),
        });
    }

    return (
        <div className="w-full h-full flex flex-wrap items-center justify-center gap-6 p-5 rounded-lg bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
            {/* Input categoria */}
            <TextInput
                valoreId='inputCategoriaId'
                valoreLabel='Categoria'
                valoreInput={selectedCategory}
                valorePlaceholder='T-shirt'
                onChange={e => setSelectedCategory(e.target.value)}
            />
            {/* Input brand */}
            <TextInput
                valoreId='inputBrandId'
                valoreLabel='Marca del prodotto'
                valoreInput={selectedBrand}
                valorePlaceholder='Prada'
                onChange={e => setSelectedBrand(e.target.value)}
            />
            {/* Input colore */}
            <TextInput
                valoreId='inputColoreId'
                valoreLabel='Colore del prodotto'
                valoreInput={selectedColor}
                valorePlaceholder='Borgogna'
                onChange={e => setSelectedColor(e.target.value)}
            />
            {/* Input taglia */}
            <TextInput
                valoreId='inputTagliaId'
                valoreLabel='Dimensione del prodotto'
                valoreInput={selectedSize}
                valorePlaceholder='M'
                onChange={e => setSelectedSize(e.target.value)}
            />
            {/* Bottone per la generazione */}
            <ButtonGenerate
                labelButton={t('productGenerateButton')}
                onClick={handleGenerate}
            />
        </div>
    );
}
