// React
import { Dispatch, SetStateAction, useEffect, useState } from "react";
// Flowbite-react
import { Select } from "flowbite-react";
// I18Next
import i18n from "../i18n";
import { useTranslation } from 'react-i18next';
// Components
import ModalBase from "./ModalBase";
import Divider from "./Divider";

const languages: string[] = ['en', 'it'];
const languageLabels: { [key: string]: string } = {
    en: 'English',
    it: 'Italiano'
};
const themes: string[] = ['dark', 'light'];
const themeLabels: { [key: string]: string } = {
    dark: 'Dark',
    light: 'Light'
};

interface SettingsBlockProps {
    title: string;
    description: string;
    options: string[];
    selectedOption: string;
    onChange: (arg0: string) => void;
    labels: { [key: string]: string };
}

function SettingsBlock({ title, description, options, selectedOption, onChange, labels }: SettingsBlockProps) {

    return (
        <div className="flex flex-wrap items-center justify-center gap-y-3 md:gap-0">
            <p className="text-md font-medium w-full md:w-2/3 text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                {title}
                <br />
                <span className="text-sm font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">
                    {description}
                </span>
            </p>
            <div className="w-full md:w-1/3">
                <Select id={title} onChange={event => onChange(event.target.value)} value={selectedOption}>
                    {options.map((option, key) => (
                        <option key={key} value={option}>
                            {labels[option]}
                        </option>
                    ))}
                </Select>
            </div>
        </div>
    );
}

export default function ModalSettings({ setPageSelected }: { setPageSelected: Dispatch<SetStateAction<string>>; }) {

    // Componente per la traduzione
    const { t } = useTranslation();
    // Stato che gestisce la lingua in uso
    const [selectedLanguage, setSelectedLanguage] = useState<string>(localStorage.getItem("language") || "it");
    // Stato che gestisce il tema in uso
    const [selectedTheme, setSelectedTheme] = useState<string>(localStorage.getItem("theme") || "dark");

    // Effetto per impostare la lingua
    useEffect(() => {
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem("language", selectedLanguage);
    }, [selectedLanguage]);

    // Effetto per impostare il tema
    useEffect(() => {
        document.documentElement.classList.toggle('dark', selectedTheme === 'dark');
        localStorage.setItem("theme", selectedTheme);
    }, [selectedTheme]);

    // Funzione per impostare la lingua selezionata dall'utente
    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
    }

    // Funzione per impostare il tema selezionato dall'utente
    const handleThemeChange = (theme: string) => {
        setSelectedTheme(theme);
    }

    return (
        <ModalBase size="lg" modalTitle={t('modalSettingsTitolo')} onClose={() => setPageSelected("Genera")}>
            {/* Lingua */}
            <SettingsBlock
                title={t('modalSettingsLinguaTitolo')}
                description={t('modalSettinsLinguaDescrizione')}
                labels={languageLabels}
                options={languages}
                selectedOption={selectedLanguage}
                onChange={handleLanguageChange} />
            {/* Divider */}
            <Divider dividerStyle="my-4" />
            {/* Tema */}
            <SettingsBlock
                title={t('modalSettingsTemaTitolo')}
                description={t('modalSettingsTemaDescrizione')}
                labels={themeLabels}
                options={themes}
                selectedOption={selectedTheme}
                onChange={handleThemeChange} />
        </ModalBase>
    );
}
