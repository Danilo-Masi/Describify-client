import { ReactNode, useState } from "react";
//Components
import { ArrowDown, ChevronDown, ChevronUp, IconaLogo } from "./SvgComponents";

interface ContainerItemProps {
    children: ReactNode;
}

const ContainerItem = ({ children }: ContainerItemProps) => {
    return (
        <div className="w-full flex items-start justify-start cursor-pointer p-3 rounded-lg hover:bg-custom-elevation4 dark:hover:bg-dark-elevation4">
            {children}
        </div>
    );
}

export default function SideBar() {

    const [isSideBarOpen, setSideBarOpen] = useState(false);

    return (
        <div className="w-full md:w-1/5 h-fit md:h-[calc(100svh-2.5rem)] flex flex-col items-start justify-start gap-y-5 p-5 rounded-xl bg-custom-elevation2 dark:bg-dark-elevation2">
            {/* Logo/Bottone apertura */}
            <div className="w-full flex items-center justify-center gap-x-2 mb-10">
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
            {window.innerWidth < 728 && isSideBarOpen && (
                <>
                    <ContainerItem>
                        <p className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray font-medium text-lg">Dashboard</p>
                    </ContainerItem>
                    <ContainerItem>
                        <p className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray font-medium text-lg">Usage</p>
                    </ContainerItem>
                    <ContainerItem>
                        <p className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray font-medium text-lg">Impostazioni</p>
                    </ContainerItem>
                    <ContainerItem>
                        <p className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray font-medium text-lg">Sign-out</p>
                    </ContainerItem>
                    <ContainerItem>
                        <p className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray font-medium text-lg">Upgrade to pro</p>
                    </ContainerItem>
                    <ContainerItem>
                        <p className="text-custom-textPrimaryGray dark:text-dark-textPrimaryGray font-medium text-lg">Help</p>
                    </ContainerItem>
                </>
            )}
        </div>
    );
}
