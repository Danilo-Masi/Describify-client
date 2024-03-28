import { ReactNode } from "react";

interface ContainerInputProps {
    children: ReactNode;
    flexOrentation: string;
}

export default function ContainerInput({ children, flexOrentation }: ContainerInputProps) {
    return (
        <div className={`w-full flex ${flexOrentation} items-start`}>
            {children}
        </div>
    );
}

//DA SPOSTARE IN LAYOUT