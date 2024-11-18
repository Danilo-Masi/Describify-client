// Flowbite-react
import { Textarea } from "flowbite-react";
// I18next
import { useTranslation } from 'react-i18next';
import { CopyIcon } from "./SvgComponents";

export default function ToyResultComponent() {

  // Componenete per la traduzione
  const { t } = useTranslation();

  return (
    <div className="w-full h-auto flex flex-col gap-y-6 cursor-not-allowed">
      {/* Div titolo */}
      <div className="w-full h-1/3 min-h-fit flex flex-col items-start justify-between gap-y-5 p-5 rounded-lg bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-lg font-medium text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
            {t('productGenerateTextTitolo1')}
          </h1>
          <button
            disabled
            type="button"
            className="w-fit flex items-center justify-center gap-x-3 py-2.5 px-3 bg-custom-elevation3 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray rounded-xl text-custom-textPrimaryGray dark:text-dark-textPrimaryColor disabled:bg-custom-disabled dark:disabled:bg-dark-disabled">
            {t('productGenerateTextCopia')}
            <CopyIcon />
          </button>
        </div>
        <Textarea
          readOnly
          name="textarea titolo"
          placeholder={t('productGenerateTextPlaceholder1')}
          className="w-full h-[7svh] overflow-scroll resize-none px-0 bg-custom-elevation4 dark:bg-dark-elevation4 border-0 focus:border-0 focus:ring-0 text-md text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray" />
      </div>
      {/* Div descrizione */}
      <div className="w-full h-1/3 min-h-fit flex flex-col items-start justify-between gap-y-5 p-5 rounded-lg bg-custom-elevation4 dark:bg-dark-elevation4 border border-custom-borderGray dark:border-dark-borderGray">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-lg font-medium text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
            {t('productGenerateTextTitolo2')}
          </h1>
          <button
            disabled
            type="button"
            className="w-fit flex items-center justify-center gap-x-3 py-2.5 px-3 bg-custom-elevation3 dark:bg-dark-elevation3 border border-custom-borderGray dark:border-dark-borderGray rounded-xl text-custom-textPrimaryGray dark:text-dark-textPrimaryColor disabled:bg-custom-disabled dark:disabled:bg-dark-disabled">
            {t('productGenerateTextCopia')}
            <CopyIcon />
          </button>
        </div>
        <Textarea
          readOnly
          name="textarea descrizione"
          placeholder={t('productGenerateTextPlaceholder2')}
          className="w-full h-fit min-h-[30svh] max-h-[30svh] overflow-scroll resize-none px-0 bg-custom-elevation4 dark:bg-dark-elevation4 border-0 focus:border-0 focus:ring-0 text-md text-custom-textPrimaryGray dark:text-dark-textPrimaryGray placeholder:text-custom-textSecondaryGray dark:placeholder:text-dark-textSecondaryGray" />
      </div>
    </div>
  );
}
