interface DividerProps {
    dividerStyle?: string;
}

export default function Divider({ dividerStyle }: DividerProps) {
    return (
        <div className={`w-full border-t border-custom-borderGray dark:border-dark-borderGray ${dividerStyle}`} />
    );
}
