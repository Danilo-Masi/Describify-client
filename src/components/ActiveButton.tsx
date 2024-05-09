interface ActiveButtonProps {
    text: string;
    onClick: any;
}

export default function ActiveButton({ text, onClick }: ActiveButtonProps) {
    return (
        <button
            name="button"
            type="button"
            className="rounded-lg px-5 py-2.5 text-sm font-semibold font-poppins text-dark-textPrimaryGray bg-custom-solidColor dark:bg-dark-solidColor hover:bg-custom-hoverColor dark:hover:bg-dark-hoverColor"
            onClick={onClick}>
            {text}
        </button>
    );
}
