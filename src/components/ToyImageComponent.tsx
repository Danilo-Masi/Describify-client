// Flowbite-React
import { FileInput, Label } from "flowbite-react";
// I18next
import { useTranslation } from 'react-i18next';
// Components
import { CloudIcon } from "./SvgComponents";

export default function ToyImageComponent() {

    // Componenete per la traduzione
    const { t } = useTranslation();

    return (
        <Label
            htmlFor="dropzone-file"
            className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600" >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <CloudIcon />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    {t('productImageTesto')}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
            </div>
            <FileInput id="dropzone-file" className="hidden cursor-no-drop" typeof="file" disabled />
        </Label>
    );
}
