//-Path: "TeaChoco-Portfolio/client/src/pages/Contact.tsx"
import type { IconType } from 'react-icons';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaGithub, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import Section from '../../components/layout/Section';

const contactMethods: {
    icon: IconType;
    label: string;
    value: string;
    href: string;
}[] = [
    {
        icon: FaEnvelope,
        label: 'Email',
        value: 'teachocodeveloper@gmail.com',
        href: 'mailto:teachocodeveloper@gmail.com',
    },
    {
        icon: FaGithub,
        label: 'GitHub',
        value: 'github.com/TeaChoco',
        href: 'https://github.com/TeaChoco',
    },
    {
        icon: FaYoutube,
        label: 'YouTube',
        value: 'youtube.com/@TeaChocolater',
        href: 'https://youtube.com/@TeaChocolater',
    },
    {
        icon: FaXTwitter,
        label: 'X',
        value: '@TeaChocolater',
        href: 'https://x.com/TeaChocolater',
    },
    {
        icon: FaFacebook,
        label: 'Facebook',
        value: 'facebook.com/TeaChocoChoco',
        href: 'https://facebook.com/TeaChocoChoco',
    },
];

export default function Contact() {
    const { t } = useTranslation();

    return (
        <Section>
            <div className='page-header'>
                <h1 className='page-title'>
                    <span className='linear-text'>{t('contact.title', 'Contact')}</span>
                </h1>
                <p className='page-subtitle'>
                    {t('contact.subtitle', "Have an interesting project? Let's talk!")}
                </p>
            </div>
            <div className='max-w-3xl mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12'>
                    {contactMethods.map((method) => (
                        <a
                            key={method.label}
                            href={method.href}
                            className='card flex items-center gap-4 no-underline'
                            target={method.href.startsWith('http') ? '_blank' : undefined}
                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                            <method.icon className='size-6 transition-all duration-200' />
                            <div>
                                <h3 className='font-semibold text-text-light dark:text-text-dark'>
                                    {method.label}
                                </h3>
                                <p className='text-text-secondary-light dark:text-text-secondary-dark text-sm'>
                                    {method.value}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
                <div className='card'>
                    <h2 className='section-title'>{t('contact.formTitle', 'Send a Message')}</h2>
                    <form className='flex flex-col gap-5' onSubmit={(e) => e.preventDefault()}>
                        <div className='flex flex-col gap-2'>
                            <label
                                htmlFor='name'
                                className='font-medium text-text-secondary-light dark:text-text-secondary-dark'
                            >
                                {t('contact.name', 'Name')}
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                placeholder={t('contact.namePlaceholder', 'Your name')}
                                required
                                className='px-4 py-3 bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark rounded-lg text-text-light dark:text-text-dark placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label
                                htmlFor='message'
                                className='font-medium text-text-secondary-light dark:text-text-secondary-dark'
                            >
                                {t('contact.message', 'Message')}
                            </label>
                            <textarea
                                id='message'
                                name='message'
                                rows={5}
                                placeholder={t(
                                    'contact.messagePlaceholder',
                                    'Write your message here...',
                                )}
                                required
                                className='px-4 py-3 bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark rounded-lg text-text-light dark:text-text-dark placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y min-h-[120px]'
                            />
                        </div>
                        <button type='submit' className='btn btn-primary'>
                            {t('contact.submit', 'Send Message')}
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
}
