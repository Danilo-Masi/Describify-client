export const useCopy = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        console.error("Errore nella copiatura", error);
    }
};