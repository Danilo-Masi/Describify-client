// I18next
import { useTranslation } from 'react-i18next';
// Components
import WaitlistGadget from "./WaitlistGadget";

export default function WaitlistSection() {

    // Componenete per la traduzione
    const { t } = useTranslation();

    return (
        <div className="w-[90%] min-h-[60svh] flex flex-col items-center justify-center mb-10 rounded-xl px-8 py-10 bg-gradient-to-br from-violet-700 via-pink-400 to-indigo-300 shadow-lg">
            <h1 className="w-full md:max-w-2xl text-center text-balance text-5xl font-bold mb-6 text-white">
                🔥 {t('waitlistSectionTitolo1')} <span className="italic font-medium">Waitlist</span> {t('waitlistSectionTitolo2')}
            </h1>
            <p className="w-full md:max-w-2xl text-center text-balance text-xl md:text-2xl font-medium mb-8 text-white opacity-90">
                {t('waitlistSecitonDescrizione')}
            </p>
            <WaitlistGadget />
        </div>
    );
}