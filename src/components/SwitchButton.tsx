import { Dispatch, SetStateAction } from "react";
//I18Next
import { useTranslation } from 'react-i18next';

interface SwitchButtonProps {
    isYearly: boolean;
    setYearly: Dispatch<SetStateAction<boolean>>;
}

export default function SwitchButton({ isYearly, setYearly }: SwitchButtonProps) {

    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center gap-y-5">
            <div className="flex rounded-xl p-1 bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
                <button
                    onClick={() => setYearly(true)}
                    className={`px-4 py-2 rounded-lg ${isYearly ? 'bg-custom-elevation3 shadow' : 'text-custom-textSecondaryGray dark:text-dark-textSecondaryGray'}`}
                >
                    {t('priceYearly')}
                </button>
                <button
                    onClick={() => setYearly(false)}
                    className={`px-4 py-2 rounded-lg ${!isYearly ? 'bg-custom-elevation3' : 'text-custom-textSecondaryGray dark:text-dark-textSecondaryGray'}`}
                >
                    {t('priceMonthly')}
                </button>
            </div>
        </div>
    );
}
