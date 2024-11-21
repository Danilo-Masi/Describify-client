// React
import { Dispatch, SetStateAction, useState } from "react";
// React-tostify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// I18next
import { useTranslation } from 'react-i18next';
// Components
import ProductImage from "./ProductImage";
import ProductForm from "./ProductForm";
import SkeltonPlaceholder from "./SkeltonPlaceholder";
import ProductGenerateText from "./ProductGenerateText";
import ProductCrossPosting from "./ProductCrossPosting";

export default function Product({ isCreditiUpdate, setCreditiUpdate }: { isCreditiUpdate: boolean, setCreditiUpdate: Dispatch<SetStateAction<boolean>> }) {

    // Componente per la traduzione
    const { t } = useTranslation();
    // Stato per il caricamento
    const [isLaoding, setLoading] = useState<boolean>(false);
    // Stato che verifica se l'immagine è presente o deve esseree caricata
    const [fileSelected, setFileSelected] = useState<File[]>([]);
    // Stato che controlla se passare al form
    const [isImageSelected, setImageSelected] = useState<boolean>(true);
    // Stato per tenere traccia dei valori presenti nei campi del form dei dettagli
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [selectedBrand, setSelectedBrand] = useState<string>("");
    const [selectedColor, setSelectedColor] = useState<string>("");
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [selectedConditions, setSelectedConditions] = useState<string>("");
    const [selectedPrice, setSelectedPrice] = useState<number>(0);
    // Stato per tenere traccia dei valori del titolo e della caption generati dall'AI
    const [titleGenerated, setTitleGenerated] = useState<string>("");
    const [descriptionGenerated, setDescriptionGenerated] = useState<string>("");

    return (
        <>
            <div className="w-full md:w-4/5 h-auto md:h-[calc(100svh-2.5rem)] flex flex-col md:flex-row gap-5 p-5 rounded-xl z-10 ml-0 md:ml-5 bg-custom-elevation2 dark:bg-dark-elevation2">
                {/* Form caricamento immagini e dettagli */}
                <div className="w-full md:w-1/2 flex flex-col gap-6 p-5 rounded-lg bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
                    {!isImageSelected ? (
                        <ProductImage
                            fileSelected={fileSelected}
                            setFileSelected={setFileSelected}
                            setSelectedCategory={setSelectedCategory}
                            setSelectedBrand={setSelectedBrand}
                            setSelectedColor={setSelectedColor}
                            setSelectedSize={setSelectedSize}
                            setImageSelected={setImageSelected}
                            isCreditiUpdate={isCreditiUpdate}
                            setCreditiUpdate={setCreditiUpdate} />
                    ) : (
                        <ProductForm
                            selectedCategory={selectedCategory}
                            selectedBrand={selectedBrand}
                            selectedSize={selectedSize}
                            selectedColor={selectedColor}
                            selectedConditions={selectedConditions}
                            selectedPrice={selectedPrice}
                            setSelectedCategory={setSelectedCategory}
                            setSelectedBrand={setSelectedBrand}
                            setSelectedSize={setSelectedSize}
                            setSelectedColor={setSelectedColor}
                            setSelectedConditions={setSelectedConditions}
                            setTitleGenerated={setTitleGenerated}
                            setDescriptionGenerated={setDescriptionGenerated}
                            setSelectedPrice={setSelectedPrice}
                            setLoading={setLoading} />
                    )
                    }
                </div>
                {/* Titolo e descrizone generata e componentne per il crossposting */}
                <div className="w-full md:w-1/2 h-auto flex flex-col items-start justify-start gap-y-6">
                    {isLaoding ? <SkeltonPlaceholder skeletonStyle="h-1/5" /> : <ProductGenerateText divStyle="h-1/5" titolo={t('productGenerateTextTitolo1')} placeholder={t('productGenerateTextPlaceholder1')} testoGenerato={titleGenerated !== "" ? titleGenerated : ''} />}
                    {isLaoding ? <SkeltonPlaceholder skeletonStyle="h-2/5" /> : <ProductGenerateText divStyle="h-2/5" titolo={t('productGenerateTextTitolo2')} placeholder={t('productGenerateTextPlaceholder2')} testoGenerato={descriptionGenerated !== "" ? descriptionGenerated : ''} />}
                    <ProductCrossPosting divStyle="h-2/5" />
                </div>
            </div>
            {/* Componente per le notifiche */}
            <ToastContainer autoClose={1500} pauseOnHover={false} />
        </>
    );
}
