import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    padding: string;
    mdFlexOrientation: string;
    mdHeight: string;
}

export default function Layout({ children, padding, mdFlexOrientation, mdHeight }: LayoutProps) {
    return (
        <div className={`w-full h-auto flex flex-col items-center justify-start bg-custom-background text-custom-text dark:bg-dark-background dark:text-dark-text ${mdHeight} ${mdFlexOrientation} ${padding}`}>
            {children}
        </div>
    );
}

interface ContainerComponentsProps {
    children: ReactNode;
    id?: string;
    gap?: string;
}

export function ContainerComponents({ children, id, gap }: ContainerComponentsProps) {
    return (
        <div className={`w-[90%] h-auto flex flex-col items-center justify-start py-5 md:py-10 ${!gap ? 'gap-y-10': gap}`} id={id}>
            {children}
        </div>
    );
}

interface ContainerInputProps {
    children: ReactNode;
    flexOrentation: string;
}

export function ContainerInput({ children, flexOrentation }: ContainerInputProps) {
    return (
        <div className={`w-full flex ${flexOrentation} items-start`}>
            {children}
        </div>
    );
}