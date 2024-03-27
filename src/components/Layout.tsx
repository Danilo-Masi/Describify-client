import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    padding: string;
    mdFlexOrientation: string;
    mdHeight: string;
}

export default function Layout({ children, padding, mdFlexOrientation, mdHeight }: LayoutProps) {
    return (
        <div className={`w-full h-auto flex flex-col items-center justify-start bg-gray-50 ${mdHeight} ${mdFlexOrientation} ${padding}`}>
            {children}
        </div>
    );
}

interface ContainerComponentsProps {
    children: ReactNode;
    id?: string;
}

export function ContainerComponents({ children, id }: ContainerComponentsProps) {
    return (
        <div className="w-full h-auto  flex flex-col items-center justify-start gap-y-10 py-5 md:py-10" id={id}>
            {children}
        </div>
    );
}