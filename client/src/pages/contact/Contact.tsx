//-Path: "TeaChoco-Portfolio/client/src/pages/Contact.tsx"
import { useTranslation } from 'react-i18next';
import ContactGrid from './content/ContactGrid';
import Section from '../../components/layout/Section';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <Section className='min-h-0!'>
            <div className='page-header'>
                <h1 className='page-title'>
                    <span className='linear-text'>{t('contact.title')}</span>
                </h1>
                <p className='page-subtitle'>{t('contact.subtitle')}</p>
            </div>

            <div className='max-w-4xl mx-auto w-full'>
                {/* Intro Card */}
                <div className='card mb-10 text-center bg-linear-to-br from-primary/5 to-accent/5 border-primary/20'>
                    <h2 className='text-xl md:text-2xl font-bold text-surface-foreground mb-3'>
                        {t('contact.subtitle')}
                    </h2>
                    <p className='text-surface-subtle max-w-lg mx-auto'>
                        {t('contact.desc')}
                    </p>
                </div>

                <ContactGrid />
            </div>
        </Section>
    );
}
