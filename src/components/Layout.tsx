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
        <div className={`w-full h-auto flex flex-col items-center font-inter ${justifyPosition ?? 'justify-start'} ${mdHeight} ${mdFlexOrientation ?? ''} ${padding ?? ''} ${bgColor ?? 'bg-custom-background dark:bg-dark-background'}`}>
            {children}
        </div>
    );
}

interface ContainerComponentsProps {
    children: ReactNode;
    id?: string;
    spacing?: string;
}

export function ContainerComponents({ children, id, spacing }: ContainerComponentsProps) {
    return (
        <div
            className={`w-[90%] h-auto flex flex-col items-center justify-start py-16 ${spacing ?? 'gap-y-10'}`}
            id={id}>
            {children}
        </div>
    );
}

interface ContainerInputProps {
    children: ReactNode;
    flexOrientation: string;
}

export function ContainerInput({ children, flexOrientation }: ContainerInputProps) {
    return (
        <div className={`w-full flex items-start justify-between ${flexOrientation}`}>
            {children}
        </div>
    );
}

interface FooterColProps {
    children: ReactNode;
    mdWidth?: string;
    mdItemsPosition?: string;
}

export function FooterCol({ children, mdWidth, mdItemsPosition }: FooterColProps) {
    return (
        <div className={`w-full flex flex-col items-center justify-center gap-3 md:gap-2 ${mdWidth ?? 'md:w-1/5'} ${mdItemsPosition ?? 'md:items-center'}`}>
            {children}
        </div>
    );
}
