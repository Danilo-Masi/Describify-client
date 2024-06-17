//I18Next
import i18n from "../i18n";
import { useTranslation } from 'react-i18next';
import { Dispatch, SetStateAction } from "react";
//Flowbite
import { Select } from "flowbite-react";
//Components
import ModalBase from "./ModalBase";

const languages: string[] = ['English', 'Italiano'];
const themes: string[] = ['Dark', 'Light'];

interface SettingsBlockProps {
    title: string;
    description: string;
    options: string[];
    selectedOption: string;
    onChange: (arg0: string) => void;
}

function SettingsBlock({ title, description, options, selectedOption, onChange }: SettingsBlockProps) {

    const passaValore = (event: any) => {
        onChange(event.target.value);
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-y-3 md:gap-0">
            <p className="text-md font-medium w-full md:w-2/3 text-custom-textPrimary dark:text-dark-textPrimary">
                {title}
                <br />
                <span className="text-sm font-light text-custom-textSecondary dark:text-dark-textSecondary">{description}</span>
            </p>
            <div className="w-full md:w-1/3">
                <Select id={title} required onChange={passaValore} value={selectedOption}>
                    {options.map((option, key) => (
                        <option
                            key={key}>
                            {option}
                        </option>
                    ))}
                </Select>
            </div>
        </div>
    );
}

interface ModalSettingsProps {
    setPageSelected: Dispatch<SetStateAction<string>>;
}

export default function ModalSettings({ setPageSelected }: ModalSettingsProps) {

    const { t } = useTranslation();

    const languageFromStorage = localStorage.getItem("language");
    const selectedLanguage = languageFromStorage === "en" ? "English" : "Italiano";
    const themeFromStorage = localStorage.getItem("tema");
    const selectedTheme = themeFromStorage && themeFromStorage === 'dark' ? 'Dark' : 'Light';

    //Funzione per la modifica della lingua corrente
    const handleLanguageChoose = (linguaSelezionata: string) => {
        let lng = "";
        if (linguaSelezionata === 'Italiano') {
            lng = 'it';
        } else {
            lng = 'en';
        }
        try {
            console.log('Lingua selezionata: ' + lng);
            i18n.changeLanguage(lng);
            localStorage.setItem('language', lng);
        } catch (error) {
            console.error('Errore nella selezione della lingua', error);
            alert('Errore nel cambio della lingua');
        }
    }

    //Funzione per la modifica del tema corrente
    const handleThemeChoose = (temaSelezionato: string) => {
        try {
            localStorage.setItem("tema", temaSelezionato.toLowerCase());
            if (temaSelezionato.toLowerCase() === 'dark') {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        } catch (error) {
            console.error('Errore nella selezione del tema', error);
            alert('Errore nel cambio del tema');
        }
    }

    return (
        <ModalBase size="md" modalTitle="Impostazioni" onClose={() => setPageSelected("Genera")}>
            {/* Lingua */}
            <SettingsBlock
                title={t('modalSettingTitle1')}
                description={t('modalSettingCaption1')}
                options={languages}
                onChange={handleLanguageChoose}
                selectedOption={selectedLanguage} />
            {/* Divider */}
            <div className="w-full h-[0.1px] my-4 bg-custom-textSecondary dark:bg-dark-textSecondary" />
            {/* Theme */}
            <SettingsBlock
                title={t('modalSettingTitle2')}
                description={t('modalSettingCaption2')}
                options={themes}
                onChange={handleThemeChoose}
                selectedOption={selectedTheme} />
        </ModalBase>
    );
}
