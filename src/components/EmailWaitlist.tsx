// React-email
import { Html, Body, Container, Heading, Text, Section, Row, Column, Link } from "@react-email/components";
// I18Next
import { useTranslation } from 'react-i18next';
// Utilities
import { useLanguage } from "../utilities/useLanguage";

export default function EmailWaitlist() {

    // Componente per la traduzione
    const { t } = useTranslation();
    // Componente per capire qual'è la lingua in uso
    const language = useLanguage();

    return (
        <Html lang={language || "en"}>
            <Body className="bg-gray-100">
                <Container className="bg-white mx-auto p-6 rounded-lg shadow-lg max-w-xl">
                    {/* Header */}
                    <Section className="bg-purple-600 text-white p-6 rounded-t-lg text-center">
                        <Heading className="text-2xl font-bold">
                            {t('emailWaitlistTitolo')}
                        </Heading>
                    </Section>
                    {/* Main Content */}
                    <Section className="p-6 text-gray-700">
                        <Text className="mb-4">
                            {t('emailWaitlistTesto1')} 👋
                        </Text>
                        <Text className="mb-4">
                            {t('emailWaitlistTesto2')}
                        </Text>
                        <Text className="mb-4">
                            {t('emailWaitlistTesto3')}
                        </Text>
                        <Text className="mb-4">
                            {t('emailWaitlistTesto4')}
                        </Text>
                        {/* Social Links */}
                        <Section>
                            <Row>
                                <Column>
                                    <Link href="https://x.com/describify" className="mx-2">
                                        Twitter
                                    </Link>
                                </Column>
                                <Column>
                                    <Link href="https://www.instagram.com/describify" className="mx-2">
                                        Instagram
                                    </Link>
                                </Column>
                                <Column>
                                    <Link href="https://www.tiktok.com/@describify" className="mx-2">
                                        TikTok
                                    </Link>
                                </Column>
                            </Row>
                        </Section>
                        <Text className="mt-4">
                            {t('emailWaitlistTesto5')}
                        </Text>
                        <Text className="mt-4">
                            {t('emailWaitlistTesto6')}
                            <br />
                            {t('emailWaitlistTesto7')}
                        </Text>
                    </Section>
                    {/* Footer */}
                    <Section className="mt-6 text-center text-gray-500 text-xs">
                        <Text>
                            &copy; {t('emailWaitlistTesto8')}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}