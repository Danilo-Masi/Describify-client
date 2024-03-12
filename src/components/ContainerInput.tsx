import { ReactNode } from "react";

export default function ContainerInput({ children, flexOrentation }: { children: ReactNode, flexOrentation: string }) {
    return (
        <div className={`w-full flex ${flexOrentation} items-start`}>
            {children}
        </div>
    );
}
