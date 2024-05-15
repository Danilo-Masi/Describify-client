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
        <div className={`w-full h-auto flex flex-col items-center font-inter ${justifyPosition ? justifyPosition : 'justify-start'} ${mdHeight} ${mdFlexOrientation} ${padding} ${bgColor ? bgColor : 'bg-custom-background dark:bg-dark-background'}`}>
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
            className={`w-[90%] h-auto flex flex-col items-center justify-start py-16 ${gap ? gap : 'gap-y-10'}`}
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

interface FooterColProps {
    children: any;
    mdWidth?: string;
    mdItemsPosition?: string;
}

export function FooterCol({ children, mdWidth, mdItemsPosition }: FooterColProps) {
    return (
        <div className={`w-full flex flex-col items-center justify-center gap-3 md:gap-2 ${mdWidth ? mdWidth : 'md:w-1/5'} ${mdItemsPosition ? mdItemsPosition : 'md:items-center'}`}>
            {children}
        </div>
    );
}