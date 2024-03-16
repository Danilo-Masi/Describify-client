import { ReactNode } from 'react';

export default function Layout({ children, padding, mdFlexOrientation, mdHeight }: { children: ReactNode, padding: string, mdFlexOrientation: string, mdHeight: string }) {
    return (
        <div className={`w-full h-auto flex flex-col items-center justify-start bg-gray-200 ${mdHeight} ${mdFlexOrientation} ${padding}`}>
            {children}
        </div>
    );
}
