import { Html, Body, Container, Heading, Text, Section, Img, Link } from "@react-email/components";
// Images
import logo from '../assets/images/logo.png';

export default function EmailWaitlist() {
    return (
        <Html lang="it">
            <Body className="bg-gray-100">
                <Container className="bg-white mx-auto p-6 rounded-lg shadow-lg max-w-xl">
                    {/* Header */}
                    <Section className="bg-purple-600 text-white p-6 rounded-t-lg text-center">
                        <Img src={logo} alt="Describify Logo" className="mx-auto w-1/2" />
                        <Heading className="text-2xl font-bold">Benvenuto in Describify!</Heading>
                    </Section>

                    {/* Main Content */}
                    <Section className="p-6 text-gray-700">
                        <Text className="mb-4">Ciao amico, 👋</Text>
                        <Text className="mb-4">
                            Grazie di cuore per esserti unito alla famiglia di Describify! Siamo davvero entusiasti di averti con noi.
                        </Text>
                        <Text className="mb-4">
                            Al tuo primo accesso riceverai 5 token gratuiti. Non vediamo l'ora che tu possa provare la nostra
                            piattaforma e scoprire tutto ciò che Describify ha da offrire.
                        </Text>
                        <Text className="mb-4">
                            Se ti va di restare sempre aggiornato, seguici sui nostri canali social:
                        </Text>

                        {/* Social Links */}
                        <Section className="text-center">
                            <Link href="https://x.com/describify" className="mx-2">
                                <Img src="twitter.png" alt="Twitter" className="inline-block w-6 h-6" />
                            </Link>
                            <Link href="https://www.instagram.com/describify" className="mx-2">
                                <Img src="instagram.png" alt="Instagram" className="inline-block w-6 h-6" />
                            </Link>
                            <Link href="https://www.tiktok.com/@describify" className="mx-2">
                                <Img src="tiktok.png" alt="TikTok" className="inline-block w-6 h-6" />
                            </Link>
                        </Section>

                        <Text className="mt-4">
                            Ancora una volta, grazie di cuore per la tua fiducia. Non vediamo l'ora di iniziare questo viaggio con te.
                        </Text>
                        <Text className="mt-4">Con affetto,<br />Il Team di Describify</Text>
                    </Section>

                    {/* Footer */}
                    <Section className="mt-6 text-center text-gray-500 text-xs">
                        <Text>&copy; 2024 Describify. Tutti i diritti riservati.</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}