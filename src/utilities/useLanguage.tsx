// React
import { useEffect } from 'react';
// i18next
import { useTranslation } from 'react-i18next';

// Funzione per verifica la lingua corrente impostata
export const useLanguage = () => {
    const { i18n } = useTranslation();
    const languageStorage = localStorage.getItem("language");
    const languageBrowser = navigator.language.split('-')[0];

    useEffect(() => {
        if (languageStorage) {
            i18n.changeLanguage(languageStorage);
        } else {
            i18n.changeLanguage(languageBrowser);
        }
    }, [i18n, languageStorage, languageBrowser]);

    return i18n.language;
};
