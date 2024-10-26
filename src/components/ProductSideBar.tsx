// React
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
// I18Next
import { useTranslation } from 'react-i18next';
// Components
import { ChevronDown, ChevronUp, GenerateIcon, HelpIcon, IconaLogo, SettingsIcon, SignoutIcon, UsageIcon } from "./SvgComponents";
import Divider from "./Divider";
import CreditPieChart from "./CreditPieChart";
import ActiveButton from "./ActiveButton";

// Url del server di produzione
const SERVER_URL = 'http://localhost:3000';
// Url del sever di rilascio
//const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

interface ContainerItemProps {
    children: ReactNode;
    id: string;
    pageSelected: string;
    setPageSelected: Dispatch<SetStateAction<string>>;
}

const ContainerItem = ({ children, id, pageSelected, setPageSelected }: ContainerItemProps) => {
    return (
        <div
            id={id}
            className={`w-full flex items-center justify-start gap-x-2 cursor-pointer p-3 rounded-lg text-custom-textPrimaryGray dark:text-dark-textPrimaryGray hover:bg-custom-elevation4 dark:hover:bg-dark-elevation4 ${pageSelected === id && 'bg-custom-elevation4 dark:bg-dark-elevation4'} ${id === 'Signout' && 'hover:bg-red-500 dark:hover:bg-red-600'}`}
            onClick={() => setPageSelected(id)}>
            {children}
        </div>
    );
}

interface SideBarProps {
    pageSelected: string;
    setPageSelected: Dispatch<SetStateAction<string>>;
    creditiDisponibili: any;
}

export default function ProductSideBar({ pageSelected, setPageSelected, creditiDisponibili }: SideBarProps) {

    const { t } = useTranslation();

    const [isSideBarOpen, setSideBarOpen] = useState(false);
    const shouldShowMenu = window.innerWidth > 728 || isSideBarOpen;

    return (
        <div className="w-full md:w-1/5 h-fit md:h-[calc(100svh-2.5rem)] flex flex-col items-start justify-start gap-y-3 p-5 rounded-xl mb-5 md:mb-0 bg-custom-elevation2 dark:bg-dark-elevation2">
            {/* Logo/Bottone apertura */}
            <div className={`w-full flex items-center justify-between md:justify-start gap-x-2 ${isSideBarOpen || window.innerWidth > 728 && 'mb-5'}`}>
                <div className="flex items-center justify-center gap-x-2">
                    <IconaLogo width="40" height="40" />
                    <h1 className="text-2xl font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">Describify</h1>
                </div>
                {
                    window.innerWidth < 728 &&
                    <button
                        type="button"
                        className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray"
                        onClick={() => setSideBarOpen(!isSideBarOpen)}>
                        {isSideBarOpen ? <ChevronUp /> : <ChevronDown />}
                    </button>
                }
            </div>
            {/* Menu con elementi */}
            {shouldShowMenu &&
                <>
                    <ContainerItem id="Genera" pageSelected={pageSelected} setPageSelected={setPageSelected}>
                        <GenerateIcon />
                        <p className="font-medium text-lg">{t('sideBarGenerate')}</p>
                    </ContainerItem>
                    <ContainerItem id="Impostazioni" pageSelected={pageSelected} setPageSelected={setPageSelected}>
                        <SettingsIcon />
                        <p className="font-medium text-lg">{t('sideBarSettings')}</p>
                    </ContainerItem>
                    <ContainerItem id="Aiuto" pageSelected={pageSelected} setPageSelected={setPageSelected}>
                        <HelpIcon />
                        <p className="font-medium text-lg">{t('sideBarHelp')}</p>
                    </ContainerItem>
                    <Divider />
                    <ContainerItem id="Signout" pageSelected={pageSelected} setPageSelected={setPageSelected}>
                        <SignoutIcon />
                        <p className="font-medium text-lg">Log-out</p>
                    </ContainerItem>
                    <div className="w-full h-[30svh] md:h-full flex flex-col items-start justify-between rounded-xl p-3 bg-custom-solidColor dark:bg-green-500">
                        <CreditPieChart totalCredits={150} availableCredits={creditiDisponibili} />
                        <ActiveButton text="Aggiungi token" buttonStyle="w-full" onClick={() => alert('Acquista nuovi token')} />
                    </div>
                </>
            }
        </div>
    );
}
