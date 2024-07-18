// I18Next
import { useTranslation } from 'react-i18next';

export default function ProductDetails() {

  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-5 rounded-lg bg-custom-solidColor dark:bg-dark-solidColor">
      <p className='font-medium text-center text-balance'>
        <span role="img" aria-label="Magic">✨</span> {t('productDetails')}
      </p>
    </div>
  );
}
