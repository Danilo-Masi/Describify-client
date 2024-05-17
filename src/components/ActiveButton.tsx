interface ActiveButtonProps {
    buttonStyle?: string;
    text: string;
    onClick: () => void;
}

export default function ActiveButton({ buttonStyle, text, onClick }: ActiveButtonProps) {
    return (
        <button
            name="button"
            type="button"
            className={`${buttonStyle} rounded-lg px-5 py-2.5 text-sm font-semibold text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor`}
            onClick={onClick}>
            {text}
        </button>
    );
}
