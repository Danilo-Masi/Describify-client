import { Modal, Select } from "flowbite-react";

const languages: string[] = ['English', 'Italiano'];
const themes: string[] = ['Dark', 'Light'];

interface SettingsBlockProps {
    title: string;
    description: string;
    options: string[];
    onChange: (arg0: string) => void;
}

function SettingsBlock({ title, description, options, onChange }: SettingsBlockProps) {

    const passaValore = (event: any) => {
        onChange(event.target.value);
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-y-3 md:gap-0">
            <p className="text-md font-medium w-full md:w-2/3">
                {title}
                <br />
                <span className="text-sm font-light">{description}</span>
            </p>
            <div className="w-full md:w-1/3">
                <Select id="languages" required onChange={passaValore}>
                    {options.map((el, key) => (
                        <option
                            key={key}>
                            {el}
                        </option>
                    ))}
                </Select>
            </div>
        </div>
    );
}

interface ModalSettingsProps {
    onClose: () => void;
}

export default function ModalSettings({ onClose }: ModalSettingsProps) {

    const handleLanguageChoose = (linguaSelezionata: string) => {
        try {
            console.log('Lingua selezionata: ' + linguaSelezionata);
            localStorage.setItem("lingua", linguaSelezionata);
            //OPERAZIONI DI RICARICAMENTO DELLE PAGINE
        } catch (error) {
            console.error('Errore nella selezione della lingua', error);
            //ALERT DI AVVERTIMENTO ALL'UTENTE
        }
    }

    const handleThemeChoose = (temaSelezionato: string) => {
        try {
            console.log('Tema selezionato: ' + temaSelezionato);
            localStorage.setItem("tema", temaSelezionato);
            //OPERAZIONI DI RICARICAMENTO DELLE PAGINE
        } catch (error) {
            console.error('Errore nella selezione del tema', error);
            //ALERT DI AVVERTIMENTO ALL'UTENTE
        }
    }

    return (
        <Modal dismissible show={true} onClose={onClose}>
            <Modal.Header>Settings</Modal.Header>
            <Modal.Body>
                {/* Lingua */}
                <SettingsBlock title="Language" description="Select the language of the platform" options={languages} onChange={handleLanguageChoose} />
                {/* Divider */}
                <div className="w-full bg-gray-200 h-[1px] my-4" />
                {/* Theme */}
                <SettingsBlock title="Interface theme" description="Customize your application theme" options={themes} onChange={handleThemeChoose} />
            </Modal.Body>
        </Modal>
    )
}
