// React
import { Dispatch, SetStateAction } from 'react';
// I18Next
import { useTranslation } from 'react-i18next';

interface ProductDetailsProps {
  isImageSelected: boolean;
  setImageSelected: Dispatch<SetStateAction<boolean>>;
}

export default function ProductSwitch({ isImageSelected, setImageSelected }: ProductDetailsProps) {

  const { t } = useTranslation();

  return (
    <div className="w-full flex items-center justify-center rounded-lg p-1 bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
      <button
        onClick={() => { setImageSelected(true) }}
        className={`w-1/2 px-4 py-2 rounded-lg ${isImageSelected ? 'bg-custom-elevation3 shadow' : 'text-custom-textSecondaryGray dark:text-dark-textSecondaryGray'}`} >
        Immagine
      </button>
      <button
        onClick={() => { setImageSelected(false) }}
        className={`w-1/2 px-4 py-2 rounded-lg ${!isImageSelected ? 'bg-custom-elevation3' : 'text-custom-textSecondaryGray dark:text-dark-textSecondaryGray'}`} >
        Dettagli
      </button>
    </div>
  );
}
