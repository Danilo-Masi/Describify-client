import { Dispatch, SetStateAction, useEffect, useState } from "react";
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
    setModalWaitListOpen: Dispatch<SetStateAction<boolean>>;
    setAlertOpen: Dispatch<SetStateAction<boolean>>;
    setAlertMessage: Dispatch<SetStateAction<string>>;
}

export default function Product({ setModalWaitListOpen, setAlertOpen, setAlertMessage }: ProductProps) {

    const { t } = useTranslation();

    const [titleGenerated, setTitleGenerated] = useState("");
    const [descriptionGenerated, setDescriptionGenerated] = useState("");
    const [isLaoding, setLoading] = useState(false);
    const [isImage, setImage] = useState(false); //Stato per far impostare l'immagine o il form con i dettagli

    return (
        <div className="w-full md:w-3/4 h-auto min-h-full flex flex-col md:flex-row gap-5 p-5 mb-10 rounded-xl z-10 bg-custom-elevation2 dark:bg-dark-elevation2">
            <div className="w-full md:w-1/2 h-auto flex flex-col items-start justify-start gap-y-6">
                <ProductDetails isImage={isImage} setImage={setImage} />
                {isImage
                    ? <ProductImage setImage={setImage} />
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
