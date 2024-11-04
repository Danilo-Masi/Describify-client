// I18next
import { useTranslation } from 'react-i18next';
// Components
import { SparklingStars } from "./SvgComponents";

function TextInput({ valoreLabel, valore }: { valoreLabel: string, valore: string }) {
    return (
        <div className="w-full flex flex-col gap-2">
            <label
                htmlFor={`${valoreLabel}_id`}
                className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                {valoreLabel}
            </label>
            <input
                readOnly
                type="text"
                id={`${valoreLabel}_id`}
                name={`${valoreLabel}`}
                aria-label={`Input ${valoreLabel}`}
                value={valore}
                className="w-full rounded-lg p-3 capitalize bg-custom-elevation3 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray focus:border-custom-borderFocusColor dark:focus:border-dark-borderFocusColor focus:ring-custom-borderRingColor dark:focus:ring-dark-borderRingColor text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray" />
        </div>
    );
}

export default function ToyFormComponent() {

    // Componenete per la traduzione
    const { t } = useTranslation();

    return (
        <div className="w-full h-full flex flex-wrap items-center justify-center gap-6 p-5 rounded-lg bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
            <TextInput valoreLabel={t('productFormLabelCategoria')} valore={t('productFormPlaceholderCategoria')} />
            <TextInput valoreLabel={t('productFormLabelBrand')} valore={t('productFormPlaceholderBrand')} />
            <TextInput valoreLabel={t('productFormLabelColore')} valore={t('productFormPlaceholderColore')} />
            <TextInput valoreLabel={t('productFormLabelDimensione')} valore={t('productFormPlaceholderDimensione')} />
            <button
                disabled
                type="button"
                className="w-full flex items-center justify-center gap-x-2 rounded-lg px-5 py-3 font-semibold text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor">
                {t('productFormBottone')}
                <SparklingStars />
            </button>
        </div>
    )
}
