import { Dispatch, SetStateAction, useEffect, useState } from "react";
// I18next
import { useTranslation } from 'react-i18next';
// Axios
import axios from 'axios';
// Components
import ProductForm from "./ProductForm";
import ProductCaption from "./ProductCaption";
import ProductTitle from "./ProductTitle";
import ProductDetails from "./ProductDetails";
import SkeltonPlaceholder from "./SkeltonPlaceholder";

// Url del server di produzione
const SERVER_URL = 'http://localhost:3000';

// Url del sever di rilascio
//const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

interface ProductProps {
    setModalWaitListOpen: Dispatch<SetStateAction<boolean>>;
    setAlertOpen: Dispatch<SetStateAction<boolean>>;
    setAlertMessage: Dispatch<SetStateAction<string>>;
}

export default function Product({ setModalWaitListOpen, setAlertOpen, setAlertMessage }: ProductProps) {

    const { t } = useTranslation();

    const [titleGenerated, setTitleGenerated] = useState("");
    const [descriptionGenerated, setDescriptionGenerated] = useState("");
    const [isLaoding, setLoading] = useState(false);

    // Funzione per generare la caption
    const handleGeneration = async () => {
        alert('Inizio generazione...');
        const validazioneDati = handleValidate();
        if (validazioneDati) {
            try {
                const response = await axios.post(`${SERVER_URL}/product-generation`, {
                    prompt: 'Maglia nera con logo Nike',
                });
                if (response.status === 200) {
                    alert('SUCCESSO');
                    console.log(response.data);
                }
            } catch (error) {
                alert('ERRORE');
                console.error(error);
            }
        }
    }

    const handleValidate = () => {
        alert('Validazione dati...');
        return true;
    }

    return (
        <div className="w-full md:w-3/4 h-auto min-h-full flex flex-col md:flex-row gap-5 p-5 mb-10 rounded-xl z-10 bg-custom-elevation2 dark:bg-dark-elevation2">
            <div className="w-full md:w-1/2 h-auto flex flex-col items-center justify-center gap-y-6">
                <ProductDetails />
                <ProductForm
                    placeholderCategory={t('placeholderCategory')}
                    placeholderBrand="Massimo Dutti"
                    placeholderColor={t('placeholderColor2')}
                    brandInputId="text brand input hero"
                    setAlertOpen={setAlertOpen}
                    setAlertMessage={setAlertMessage}
                    handleGeneration={handleGeneration} />
            </div>
            <div className="w-full md:w-1/2 h-auto flex flex-col items-center justify-center gap-y-6">
                {isLaoding ? <SkeltonPlaceholder skeletonStyle="h-[25svh]" /> : <ProductTitle titleGenerated={titleGenerated} titlePlaceholder={t('productPlaceholderTitle')} />}
                {isLaoding ? <SkeltonPlaceholder skeletonStyle="min-h-[47svh]" /> : <ProductCaption descriptionGenerated={descriptionGenerated} descriptionPlaceholder={t('produtctPlaceholderDescription')} />}
            </div>
        </div>
    );
}
