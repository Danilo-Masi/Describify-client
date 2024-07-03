import { Dispatch, SetStateAction, useEffect, useState } from "react";
//I18Next
import i18n from "../i18n";
import { useTranslation } from 'react-i18next';
//Flowbite
import { Select } from "flowbite-react";
//Components
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

    const passaValore = (event: any) => {
        onChange(event.target.value);
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-y-3 md:gap-0">
            <p className="text-md font-medium w-full md:w-2/3 text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                {title}
                <br />
                <span className="text-sm font-light text-custom-textSecondaryGray dark:text-dark-textSecondaryGray">{description}</span>
            </p>
            <div className="w-full md:w-1/3">
                <Select id={title} onChange={passaValore} value={selectedOption}>
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

interface ModalSettingsProps {
    setPageSelected: Dispatch<SetStateAction<string>>;
}

export default function ModalSettings({ setPageSelected }: ModalSettingsProps) {

    const { t } = useTranslation();

    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("language") || "it");
    const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem("language", selectedLanguage);
    }, [selectedLanguage]);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', selectedTheme === 'dark');
        localStorage.setItem("theme", selectedTheme);
    }, [selectedTheme]);

    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
    }

    const handleThemeChange = (theme: string) => {
        setSelectedTheme(theme);
    }

    return (
        <ModalBase size="lg" modalTitle={t('modalSettingsTitle')} onClose={() => setPageSelected("Genera")}>
            {/* Lingua */}
            <SettingsBlock
                title={t('modalSettingsLanguageTitle')}
                description={t('modalSettingsLanguageCaption')}
                options={languages}
                onChange={handleLanguageChange}
                selectedOption={selectedLanguage}
                labels={languageLabels} />
            {/* Divider */}
            <Divider dividerStyle="my-4" />
            {/* Tema */}
            <SettingsBlock
                title={t('modalSettingsThemeTitle')}
                description={t('modalSettingsThemeCaption')}
                options={themes}
                onChange={handleThemeChange}
                selectedOption={selectedTheme}
                labels={themeLabels} />
        </ModalBase>
    );
}
