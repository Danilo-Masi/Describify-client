//I18Next
import { useTranslation } from 'react-i18next';

export default function ProductDetails() {

  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-5 rounded-lg bg-custom-solidColor dark:bg-dark-solidColor">
      <h1 className="text-md text-center text-balance font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
        {t('productDetails')} &#128200;
      </h1>
    </div>
  );
}
