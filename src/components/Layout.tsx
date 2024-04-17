import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    padding?: string;
    mdFlexOrientation?: string;
    mdHeight: string;
    justifyPosition?: string;
    bgColor?: string;
}

export function Layout({ children, padding, mdFlexOrientation, mdHeight, justifyPosition, bgColor }: LayoutProps) {
    return (
        <div className={`w-full h-auto flex flex-col items-center text-custom-text dark:text-dark-text ${justifyPosition ? justifyPosition : 'justify-start'} ${mdHeight} ${mdFlexOrientation} ${padding} ${bgColor ? bgColor : 'bg-custom-gradient dark:bg-dark-gradient '}`}>
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
        <div
            className={`w-[90%] h-auto flex flex-col items-center justify-start py-5 md:py-10 ${gap ? gap : 'gap-y-10'}`}
            id={id}>
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
        <div className={`w-full flex items-start justify-between ${flexOrentation}`}>
            {children}
        </div>
    );
}