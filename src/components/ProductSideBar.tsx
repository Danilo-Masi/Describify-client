// React
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
// I18Next
import { useTranslation } from 'react-i18next';
// Assets
import logo from '../assets/images/logo.svg';
// Components
import { ChevronDown, ChevronUp, GenerateIcon, HelpIcon, SettingsIcon, SignoutIcon } from "./SvgComponents";
import Divider from "./Divider";

// Url del server di produzione
const SERVER_URL = 'http://localhost:3000';
// Url del sever di rilascio
//const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;

interface ContainerItemProps {
    id: string;
    pageSelected: string;
    setPageSelected: Dispatch<SetStateAction<string>>;
    children: ReactNode;
}

const ContainerItem = ({ id, pageSelected, setPageSelected, children }: ContainerItemProps) => {
    return (
        <div
            id={id}
            className={`w-full flex items-center justify-start gap-x-2 cursor-pointer p-3 rounded-lg text-custom-textPrimaryGray dark:text-dark-textPrimaryGray hover:bg-custom-elevation4 dark:hover:bg-dark-elevation4 ${pageSelected === id && 'bg-custom-elevation4 dark:bg-dark-elevation4'}`}
            onClick={() => setPageSelected(id)}>
            {children}
        </div>
    );
}

interface SideBarProps {
    creditiDisponibili: number;
    pageSelected: string;
    setPageSelected: Dispatch<SetStateAction<string>>;
}

export default function ProductSideBar({ creditiDisponibili, pageSelected, setPageSelected }: SideBarProps) {

    // Componente per la traduzione
    const { t } = useTranslation();
    // Stato che gestisce quando la sideBar è aperta o chiusa (per mobile)
    const [isSideBarOpen, setSideBarOpen] = useState(false);
    // Stato che gestisce quando mostrare o meno gli elementi del menù
    const shouldShowMenu = window.innerWidth > 728 || isSideBarOpen;

    return (
        <div className="w-full md:w-1/5 h-fit md:h-[calc(100svh-2.5rem)] flex flex-col items-start justify-start gap-y-3 p-5 rounded-xl mb-5 md:mb-0 bg-custom-elevation2 dark:bg-dark-elevation2">
            {/* Logo - Bottone apertura/chiusura menù */}
            <div className={`w-full flex items-center justify-between md:justify-start gap-x-2 ${isSideBarOpen || window.innerWidth > 728 ? 'mb-5' : 'mb-0'}`}>
                <div className="flex items-center justify-center gap-x-2">
                    <img src={logo} className="w-full h-10" />
                    <h2 className='text-2xl font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray'>Describify</h2>
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
                        <p className="font-medium text-lg">{t('productSideBarGenera')}</p>
                    </ContainerItem>
                    <ContainerItem id="Impostazioni" pageSelected={pageSelected} setPageSelected={setPageSelected}>
                        <SettingsIcon />
                        <p className="font-medium text-lg">{t('productSideBarImpostazioni')}</p>
                    </ContainerItem>
                    <ContainerItem id="Aiuto" pageSelected={pageSelected} setPageSelected={setPageSelected}>
                        <HelpIcon />
                        <p className="font-medium text-lg">{t('productSideBarChat')}</p>
                    </ContainerItem>
                    <Divider />
                    <ContainerItem id="Signout" pageSelected={pageSelected} setPageSelected={setPageSelected}>
                        <SignoutIcon />
                        <p className="font-medium text-lg">{t('productSideBarLogout')}</p>
                    </ContainerItem>
                    <div className="w-full h-[30svh] md:h-full flex flex-col items-center justify-center rounded-xl p-3 bg-gradient-to-br from-violet-700 via-pink-400 to-indigo-300 border border-custom-borderColor dark:border-custom-borderColor">
                        <div className="w-full h-2/3 flex flex-col items-center justify-center gap-y-2">
                            <p className="text-5xl font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">
                                {creditiDisponibili}
                            </p>
                            <p className="text-md font-medium text-custom-textPrimaryGray dark:text-dark-textPrimaryGray py-2 px-3 rounded-xl bg-gray-500 opacity-70">
                                {t('productSiderBarTesto')}
                            </p>
                            <button className="font-bold underline cursor-pointer">
                                {t('productSideBarBottone')}
                            </button>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}
