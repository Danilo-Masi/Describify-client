import { useCallback, useState } from 'react';
//I18Next
import { useTranslation } from 'react-i18next';
//data
import { taglie, colori, categorie } from '../data/options_it';
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
    valoreLabel: string;
    valoreInput: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ButtonGenerateProps {
    labelButton: string;
    onClick: () => void;
}

interface ModalItem {
    value: string;
    children?: ModalItem[];
}

function InputSelect({ mdWidth, valoreLabel, valoreInput, onClick }: InputSelectProps) {
    return (
        <div className={`${mdWidth} w-full h-auto flex flex-col gap-2`}>
            <label htmlFor={valoreLabel} className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                {valoreLabel}
            </label>
            <div
                id={valoreLabel}
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

function TextInput({ valoreLabel, valoreInput, onChange }: TextInputProps) {
    return (
        <div className="w-full flex flex-col gap-2">
            <label htmlFor={valoreLabel} className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                {valoreLabel}
            </label>
            <input
                id={valoreLabel}
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
            className="w-full md:w-fit flex items-center justify-center gap-x-2 rounded-lg px-5 py-3 font-semibold text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor">
            {labelButton}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
            </svg>
        </button>
    );
}

export default function ProductForm() {
    const { t } = useTranslation();
    //Valori inseriti dall'utente
    const [selectedCategory, setSelectedCategory] = useState("Camicie");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedColor, setSelectedColor] = useState("Azzurro");
    //Valori del modalDrowpdow
    const [modalTitle, setModalTitle] = useState("");
    const [modalData, setModalData] = useState<ModalItem[]>([]);
    const [modalContext, setModalContext] = useState("");
    //Booleani per l'apertura dei modal
    const [isDropdownModalOpen, setModalDropdownOpen] = useState(false);
    const [isWaitlistModalOpen, setModalWaitlistOpen] = useState(false);

    const handleDropwdown = useCallback((titoloModal: string, datiModal: ModalItem[], context: string) => {
        setModalTitle(titoloModal);
        setModalData(datiModal);
        setModalDropdownOpen(true);
        setModalContext(context)
    }, []);

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

    return (
        <div className="w-full h-fit flex flex-wrap items-start justify-start gap-6 p-5 rounded-lg bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
            <InputSelect valoreLabel={t('productCategoryLabel')} valoreInput={selectedCategory} onClick={() => handleDropwdown(t('productCategoryLabel'), categorie, "categoria")} />
            <TextInput valoreLabel={t('productBrandLabel')} valoreInput={selectedBrand} onChange={e => setSelectedBrand(e.target.value)} />
            <InputSelect mdWidth="md:w-[calc(50%-0.75rem)]" valoreLabel={t('productSizeLabel')} valoreInput={selectedSize} onClick={() => handleDropwdown(t('productSizeLabel'), taglie, "dimensione")} />
            <InputSelect mdWidth="md:w-[calc(50%-0.75rem)]" valoreLabel={t('productColorLabel')} valoreInput={selectedColor} onClick={() => handleDropwdown(t('productColorLabel'), colori, "colore")} />
            <ButtonGenerate labelButton={t('productGenerateButton')} onClick={() => setModalWaitlistOpen(true)} />
            {isDropdownModalOpen && <ModalDropdown onClose={() => setModalDropdownOpen(false)} valoreTitoloModal={modalTitle} arrayDati={modalData} context={modalContext} onSelect={handleSelect} />}
            {isWaitlistModalOpen && <WaitlistModal onClose={() => setModalWaitlistOpen(false)} />}
        </div>
    );
}
