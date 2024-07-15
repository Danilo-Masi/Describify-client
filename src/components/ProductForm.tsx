import { Dispatch, SetStateAction, useCallback, useState } from 'react';
//I18Next
import { useTranslation } from 'react-i18next';
//Utilities
import { useLanguage } from '../utilities/useLanguage';
//data
import category_it from '../data/productOptions/category_it.json';
import category_en from '../data/productOptions/category_en.json';
import sizes_it from '../data/productOptions/sizes_it.json';
import sizes_en from '../data/productOptions/sized_en.json';
import colors_en from '../data/productOptions/colors_en.json';
import colors_it from '../data/productOptions/colors_it.json';
//Components
import WaitlistModal from "./WaitlistModal";
import ModalDropdown from "./ModalDropdow";

//Type definitions
interface InputSelectProps {
    mdWidth?: string,
    valoreLabel: string,
    valoreInput: string,
    onClick: () => void,
}

interface TextInputProps {
    valoreId: string;
    valoreLabel: string;
    valoreInput: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ButtonGenerateProps {
    labelButton: string;
    onClick: () => void;
}

interface Elemento {
    id: number;
    title: string;
    parent_id: number;
    parent: string;
}

interface ProductFormProps {
    placeholderCategory: string;
    placeholderBrand: string;
    placeholderColor: string;
    brandInputId: string;
    setAlertOpen: Dispatch<SetStateAction<boolean>>;
    setAlertMessage: Dispatch<SetStateAction<string>>;
    handleGeneration: () => void;
}

function InputSelect({ mdWidth, valoreLabel, valoreInput, onClick }: InputSelectProps) {
    return (
        <div className={`${mdWidth} w-full h-auto flex flex-col gap-2`}>
            <label className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                {valoreLabel}
            </label>
            <div
                onClick={onClick}
                className="flex items-center justify-between p-3 rounded-lg cursor-pointer bg-custom-elevation3 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                <p>{valoreInput}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    );
}

function TextInput({ valoreId, valoreLabel, valoreInput, onChange }: TextInputProps) {
    return (
        <div className="w-full flex flex-col gap-2">
            <label htmlFor={valoreId} className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                {valoreLabel}
            </label>
            <input
                id={valoreId}
                type="text"
                placeholder="Massimo Dutti"
                className="w-full rounded-lg p-3 bg-custom-elevation3 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textSecondaryGray dark:text-dark-textSecondaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray"
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

export default function ProductForm({ placeholderCategory, placeholderBrand, placeholderColor, brandInputId, setAlertOpen, setAlertMessage, handleGeneration }: ProductFormProps) {
    const language = useLanguage();
    const { t } = useTranslation();

    //Valori inseriti dall'utente
    const [selectedCategory, setSelectedCategory] = useState(placeholderCategory);
    const [selectedBrand, setSelectedBrand] = useState(placeholderBrand);
    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedColor, setSelectedColor] = useState(placeholderColor);

    //Valori del modalDrowpdow
    const [modalTitle, setModalTitle] = useState("");
    const [modalData, setModalData] = useState<Elemento[]>([]);
    const [modalContext, setModalContext] = useState("");

    //Booleani per l'apertura dei modal
    const [isDropdownModalOpen, setModalDropdownOpen] = useState(false);
    const [isWaitlistModalOpen, setModalWaitlistOpen] = useState(false);

    //Funzione che apre il modal per inserire i dati e inserisce i giusti dati in base a cosa si è cliccato (categorie, colore, dimensione)
    const handleDropwdown = useCallback((titoloModal: string, datiModal: any, context: string) => {
        setModalTitle(titoloModal);
        setModalData(datiModal);
        setModalContext(context);
        setModalDropdownOpen(true);
    }, []);

    //Funzione che imposta il valore selezionato nel giusto stato
    const handleSelect = (value: string, context: string) => {
        switch (context) {
            case "categoria":
                setSelectedCategory(value);
                break;
            case "dimensione":
                setSelectedSize(value);
                break;
            case "colore":
                setSelectedColor(value);
                break;
            default:
                break;
        }
    }

    const handleFilterDimension = useCallback((sizes: any): Elemento[] => {
        const categoryToParentIdMap: { [key: string]: number } = {
            'Cinture': 35,
            'Orologi': 28,
            'Scarpe da barca, loafer e mocassini': 16,
            'Stivali': 16,
            'Zoccoli e sabot': 16,
            'Espadrillas': 16,
            'Infradito e ciabatte': 16,
            'Scarpe formali': 16,
            'Sandali': 16,
            'Pantofole': 16,
            'Scarpe da ginnastica': 16,
            'Ballerine': 16,
            'Scarpe con tacchi alti': 16,
            'Mary Jane e scarpe a T': 16,
            'Abbigliamento da esterno': 1,
            'Maglioni e pullover': 1,
            'Completi e blazer': 1,
            'Abiti': 1,
            'Gonne': 1,
            'Top e t-shirt': 1,
            'Jeans': 1,
            'Pantaloni e leggins': 1,
            'Pantaloncini e pantaloni corti': 1,
            'Tute jumpsuite e playsuite': 1,
            'Costumi da bagno': 1,
            'Lingerie e indumenti da notte': 1,
            'Vestiti premam': 1,
            'Abbigliamento sportivo': 1,
            'Camicie e t-shirt': 1,
            'Pantaloni': 1,
            'Calzini e intimo': 1,
            'Pigiama': 1,
            "Belts": 35,
            "Watches": 28,
            "Boat shoes, loafers, and moccasins": 16,
            "Boots": 16,
            "Clogs and mules": 16,
            "Espadrilles": 16,
            "Flip-flops and slippers": 16,
            "Formal shoes": 16,
            "Sandals": 16,
            "Slippers": 16,
            "Sneakers": 16,
            "Ballet flats": 16,
            "High-heeled shoes": 16,
            "Mary Jane and T-strap shoes": 16,
            "Outerwear": 1,
            "Sweaters and pullovers": 1,
            "Suits and blazers": 1,
            "Dresses": 1,
            "Skirts": 1,
            "Tops and t-shirts": 1,
            "Pants and leggings": 1,
            "Shorts and short pants": 1,
            "Jumpsuits and playsuits": 1,
            "Swimwear": 1,
            "Lingerie and nightwear": 1,
            "Maternity clothes": 1,
            "Sportswear": 1,
            "Shirts and t-shirts": 1,
            "Pants": 1,
            "Socks and underwear": 1,
            "Pajamas": 1
        };
        const parentId = categoryToParentIdMap[selectedCategory];
        if (parentId !== undefined) {
            return Object.values(sizes).filter((item: any) => item.parent_id === parentId) as Elemento[];
        }
        return [];
    }, [selectedCategory]);

    return (
        <div className="w-full h-fit flex flex-wrap items-start justify-start gap-6 p-5 rounded-lg bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
            <InputSelect
                valoreLabel={t('productCategoryLabel')}
                valoreInput={selectedCategory}
                onClick={() => handleDropwdown(t('productCategoryLabel'), language === 'it' ? category_it : category_en, "categoria")}
            />
            <TextInput
                valoreLabel={t('productBrandLabel')}
                valoreId={brandInputId}
                valoreInput={selectedBrand}
                onChange={e => setSelectedBrand(e.target.value)}
            />
            <InputSelect
                mdWidth="md:w-[calc(50%-0.75rem)]"
                valoreLabel={t('productSizeLabel')}
                valoreInput={selectedSize}
                onClick={() => handleDropwdown(t('productSizeLabel'), handleFilterDimension(language === 'it' ? sizes_it : sizes_en), "dimensione",)}
            />
            <InputSelect
                mdWidth="md:w-[calc(50%-0.75rem)]"
                valoreLabel={t('productColorLabel')}
                valoreInput={selectedColor}
                onClick={() => handleDropwdown(t('productColorLabel'), language === "it" ? colors_it : colors_en, "colore")}
            />
            <ButtonGenerate
                labelButton={t('productGenerateButton')}
                onClick={() => handleGeneration()}
            />
            {isDropdownModalOpen &&
                <ModalDropdown
                    onClose={() => setModalDropdownOpen(false)}
                    valoreTitoloModal={modalTitle}
                    arrayDati={modalData}
                    context={modalContext}
                    onSelect={handleSelect} />
            }
            {isWaitlistModalOpen &&
                <WaitlistModal
                    onClose={() => setModalWaitlistOpen(false)}
                    setAlertOpen={setAlertOpen}
                    setAlertMessage={setAlertMessage} />
            }
        </div>
    );
}
