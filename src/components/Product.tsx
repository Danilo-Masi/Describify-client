import { Dispatch, SetStateAction, useState } from "react";
// I18next
import { useTranslation } from 'react-i18next';
// Components
import ProductForm from "./ProductForm";
import ProductCaption from "./ProductCaption";
import ProductTitle from "./ProductTitle";
import ProductDetails from "./ProductDetails";
import SkeltonPlaceholder from "./SkeltonPlaceholder";
import ProductImage from "./ProductImage";

interface ProductProps {
    setAlertOpen: Dispatch<SetStateAction<boolean>>;
    setAlertMessage: Dispatch<SetStateAction<string>>;
}

export default function Product({ setAlertOpen, setAlertMessage }: ProductProps) {

    const { t } = useTranslation();

    const [isLaoding, setLoading] = useState<boolean>(false); // Stato per il caricamento
    const [titleGenerated, setTitleGenerated] = useState<string>(""); // Stato che contiene il titolo dell'annuncio generato
    const [descriptionGenerated, setDescriptionGenerated] = useState<string>(""); // Stato che contiene la descrizione dell'annuncio generata
    const [fileSelected, setFileSelected] = useState<File | null>(null); // Stato che verifica se l'immagine è presente o deve esseree caricata
    const [isImageSelected, setImageSelected] = useState<boolean>(false); // Stato che verifica se l'immagine è stata analizzata e quindi si può passare al form dei dettagli

    return (
        <div className="w-full md:w-3/4 h-auto min-h-full flex flex-col md:flex-row gap-5 p-5 mb-10 rounded-xl z-10 bg-custom-elevation2 dark:bg-dark-elevation2">
            <div className="w-full md:w-1/2 h-auto flex flex-col items-start justify-start gap-y-6">
                <ProductDetails isImageSelected={isImageSelected} setImageSelected={setImageSelected} />
                {isImageSelected
                    ? <ProductImage
                        setImageSelected={setImageSelected}
                        setFileSelected={setFileSelected}
                        fileSelected={fileSelected} />
                    : <ProductForm
                        placeholderCategory={t('placeholderCategory')}
                        placeholderBrand="Massimo Dutti"
                        placeholderColor={t('placeholderColor2')}
                        brandInputId="text brand input hero"
                        setAlertOpen={setAlertOpen}
                        setAlertMessage={setAlertMessage}
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
    );
}
