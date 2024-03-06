import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="w-full h-svh flex flex-col items-center justify-center px-5 md:p-0 bg-gray-200">
            {children}
        </div>
    );
}
