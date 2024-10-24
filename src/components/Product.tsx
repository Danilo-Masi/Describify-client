// React
import { Dispatch, SetStateAction, useState } from "react";
// React-tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// I18next
import { useTranslation } from 'react-i18next';
// Components
import ProductSwitch from "./ProductSwitch";
import ProductImage from "./ProductImage";
import ProductForm from "./ProductForm";
import SkeltonPlaceholder from "./SkeltonPlaceholder";
import ProductTitle from "./ProductTitle";
import ProductCaption from "./ProductCaption";

export default function Product({ isCreditiUpdate, setCreditiUpdate }: { isCreditiUpdate: boolean, setCreditiUpdate: Dispatch<SetStateAction<boolean>> }) {

    const { t } = useTranslation();

    // Stato per il caricamento
    const [isLaoding, setLoading] = useState<boolean>(false);
    // Stato che verifica se l'immagine è presente o deve esseree caricata
    const [fileSelected, setFileSelected] = useState<File | null>(null);
    // Stato che verifica se l'immagine è stata analizzata e quindi si può passare al form dei dettagli
    const [isImageSelected, setImageSelected] = useState<boolean>(true);
    // Stato per tenere traccia dei valori presenti nei campi del form dei dettagli
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [selectedBrand, setSelectedBrand] = useState<string>("");
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [selectedColor, setSelectedColor] = useState<string>("");
    // Stato per tenere traccia dei valori del titolo e della caption generati dall'AI
    const [titleGenerated, setTitleGenerated] = useState<string>("");
    const [descriptionGenerated, setDescriptionGenerated] = useState<string>("");

    return (
        <>
            <div className="w-full md:w-4/5 h-auto md:h-[calc(100svh-2.5rem)] flex flex-col md:flex-row gap-5 p-5 rounded-xl z-10 ml-0 md:ml-5 bg-custom-elevation2 dark:bg-dark-elevation2">
                <div className="w-full md:w-1/2 h-auto flex flex-col items-start justify-start gap-y-6">
                    <ProductSwitch isImageSelected={isImageSelected} setImageSelected={setImageSelected} />
                    {isImageSelected
                        ? <ProductImage
                            setImageSelected={setImageSelected}
                            setFileSelected={setFileSelected}
                            fileSelected={fileSelected}
                            setSelectedCategory={setSelectedCategory}
                            setSelectedBrand={setSelectedBrand}
                            setSelectedSize={setSelectedSize}
                            setSelectedColor={setSelectedColor}
                            setCreditiUpdate={setCreditiUpdate}
                            isCreditiUpdate={isCreditiUpdate} />
                        : <ProductForm
                            selectedCategory={selectedCategory}
                            selectedBrand={selectedBrand}
                            selectedSize={selectedSize}
                            selectedColor={selectedColor}
                            setSelectedCategory={setSelectedCategory}
                            setSelectedBrand={setSelectedBrand}
                            setSelectedSize={setSelectedSize}
                            setSelectedColor={setSelectedColor}
                            setTitleGenerated={setTitleGenerated}
                            setDescriptionGenerated={setDescriptionGenerated}
                            setLoading={setLoading} />
                    }
                </div>
                <div className="w-full md:w-1/2 h-auto flex flex-col items-center justify-center gap-y-6">
                    {isLaoding ? <SkeltonPlaceholder skeletonStyle="h-[25svh]" /> : <ProductTitle titleGenerated={titleGenerated !== "" ? titleGenerated : ''} titlePlaceholder={t('productPlaceholderTitle')} />}
                    {isLaoding ? <SkeltonPlaceholder skeletonStyle="min-h-[60svh]" /> : <ProductCaption descriptionGenerated={descriptionGenerated !== "" ? descriptionGenerated : ''} descriptionPlaceholder={t('produtctPlaceholderDescription')} />}
                </div>
            </div>
            <ToastContainer autoClose={1500} />
        </>
    );
}
