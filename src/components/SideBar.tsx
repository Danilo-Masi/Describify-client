import { Dispatch, ReactNode, SetStateAction, useState } from "react";
//I18Next
import { useTranslation } from 'react-i18next';
//Components
import { ChevronDown, ChevronUp, GenerateIcon, HelpIcon, IconaLogo, SettingsIcon, SignoutIcon, UpgradeIcon, UsageIcon } from "./SvgComponents";

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
            className={`w-full flex items-center justify-start gap-x-2 cursor-pointer p-3 rounded-lg text-custom-textPrimaryGray dark:text-dark-textPrimaryGray hover:bg-custom-elevation4 dark:hover:bg-dark-elevation4 ${pageSelected === id && 'bg-custom-elevation4 dark:bg-dark-elevation4'}`}
            onClick={() => setPageSelected(id)}>
            {children}
        </div>
    );
}

interface SideBarProps {
    pageSelected: string;
    setPageSelected: Dispatch<SetStateAction<string>>;
}

export default function SideBar({ pageSelected, setPageSelected }: SideBarProps) {

    const { t } = useTranslation();

    const [isSideBarOpen, setSideBarOpen] = useState(false);
    const shouldShowMenu = window.innerWidth > 728 || isSideBarOpen;

    return (
        <div className="w-full md:w-1/4 h-fit md:h-[calc(100svh-2.5rem)] flex flex-col items-start justify-start gap-y-3 p-5 rounded-xl bg-custom-elevation2 dark:bg-dark-elevation2">
            {/* Logo/Bottone apertura */}
            <div className="w-full flex items-center justify-center md:justify-start gap-x-2 mb-5">
                <IconaLogo width="40" height="40" />
                <h1 className="text-2xl font-bold text-custom-textPrimaryGray dark:text-dark-textPrimaryGray">Describify</h1>
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
                    <ContainerItem id="Utilizzo" pageSelected={pageSelected} setPageSelected={setPageSelected}>
                        <UsageIcon />
                        <p className="font-medium text-lg">{t('sideBarUsage')}</p>
                    </ContainerItem>
                    <ContainerItem id="Impostazioni" pageSelected={pageSelected} setPageSelected={setPageSelected}>
                        <SettingsIcon />
                        <p className="font-medium text-lg">{t('sideBarSettings')}</p>
                    </ContainerItem>
                    <ContainerItem id="Aiuto" pageSelected={pageSelected} setPageSelected={setPageSelected}>
                        <HelpIcon />
                        <p className="font-medium text-lg">{t('sideBarHelp')}</p>
                    </ContainerItem>
                    <div className="w-full border-t border-custom-borderGray dark:border-dark-borderGray" />
                    <ContainerItem id="Upgrade" pageSelected={pageSelected} setPageSelected={setPageSelected}>
                        <UpgradeIcon />
                        <p className="font-medium text-lg">{t('sideBarUpgrade')}</p>
                    </ContainerItem>
                    <ContainerItem id="Signout" pageSelected={pageSelected} setPageSelected={setPageSelected}>
                        <SignoutIcon />
                        <p className="font-medium text-lg">Log-out</p>
                    </ContainerItem>
                </>
            }
        </div>
    );
}
