// React
import { Dispatch, SetStateAction } from 'react';
// I18Next
import { useTranslation } from 'react-i18next';

interface ProductDetailsProps {
  isImage: boolean;
  setImage: Dispatch<SetStateAction<boolean>>;
}

export default function ProductDetails({ isImage, setImage }: ProductDetailsProps) {

  const { t } = useTranslation();

  return (
    <div className="w-full flex items-center justify-center rounded-lg p-1 bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
      <button
        onClick={() => { setImage(true) }}
        className={`w-1/2 px-4 py-2 rounded-lg ${isImage ? 'bg-custom-elevation3 shadow' : 'text-custom-textSecondaryGray dark:text-dark-textSecondaryGray'}`} >
        Immagine
      </button>
      <button
        onClick={() => { setImage(false) }}
        className={`w-1/2 px-4 py-2 rounded-lg ${!isImage ? 'bg-custom-elevation3' : 'text-custom-textSecondaryGray dark:text-dark-textSecondaryGray'}`} >
        Dettagli
      </button>
    </div>
  );
}
