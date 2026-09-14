//-Path: "TeaChoco-Portfolio/client/src/pages/Contact.tsx"
import { useTranslation } from 'react-i18next';
import { contactProfiles } from '~/data/contact';
import Section from '../../components/layout/Section';
import ProfileCard from './content/ProfileCard';
import AvailabilityBadge from './content/AvailabilityBadge';
import DiscordServers from './content/DiscordServers';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <Section className='min-h-0! relative overflow-hidden'>
            <div className='page-header relative'>
                <h1 className='page-title'>
                    <span className='linear-text'>{t('contact.title')}</span>
                </h1>
                <p className='page-subtitle'>{t('contact.subtitle')}</p>
            </div>

            <AvailabilityBadge />

            <div className='relative mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3'>
                {contactProfiles.map((profile, index) => (
                    <ProfileCard key={profile.labelKey} profile={profile} index={index} />
                ))}
            </div>

            <DiscordServers />
        </Section>
    );
}
