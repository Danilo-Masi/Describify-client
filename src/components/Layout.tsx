import { ReactNode } from 'react';

export default function Layout({ children, padding }: { children: ReactNode, padding: string }) {
    return (
        <div className={`w-full h-auto md:h-[88svh] min-h-[88svh] flex flex-col md:flex-row items-center justify-center ${padding} bg-gray-200`}>
            {children}
        </div>
    );
}
