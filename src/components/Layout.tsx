import { ReactNode } from 'react';

export default function Layout({ children, padding, mdFlexOrientation }: { children: ReactNode, padding: string, mdFlexOrientation: string }) {
    return (
        <div className={`w-full md:h-svh h-auto flex flex-col items-center justify-start bg-gray-200 ${mdFlexOrientation} ${padding}`}>
            {children}
        </div>
    );
}
