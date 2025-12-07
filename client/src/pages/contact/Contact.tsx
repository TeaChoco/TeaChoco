//-Path: "TeaChoco-Portfolio/client/src/pages/Contact.tsx"
import { useTranslation } from 'react-i18next';

const contactMethods = [
    {
        icon: '📧',
        label: 'Email',
        value: 'contact@teachoco.dev',
        href: 'mailto:contact@teachoco.dev',
    },
    {
        icon: '🐙',
        label: 'GitHub',
        value: 'github.com/TeaChoco',
        href: 'https://github.com/TeaChoco',
    },
    {
        icon: '💼',
        label: 'LinkedIn',
        value: 'linkedin.com/in/teachoco',
        href: 'https://linkedin.com/in/teachoco',
    },
    {
        icon: '🐦',
        label: 'Twitter',
        value: '@TeaChoco_dev',
        href: 'https://twitter.com/TeaChoco_dev',
    },
];

export default function Contact() {
    const { t } = useTranslation();

    return (
        <section className="page">
            <div className="page-header">
                <h1 className="page-title">
                    <span className="gradient-text">
                        {t('contact.title', 'Contact')}
                    </span>
                </h1>
                <p className="page-subtitle">
                    {t(
                        'contact.subtitle',
                        "Have an interesting project? Let's talk!",
                    )}
                </p>
            </div>
            <div className="max-w-3xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {contactMethods.map((method) => (
                        <a
                            key={method.label}
                            href={method.href}
                            className="card flex items-center gap-4 no-underline"
                            target={
                                method.href.startsWith('http')
                                    ? '_blank'
                                    : undefined
                            }
                            rel={
                                method.href.startsWith('http')
                                    ? 'noopener noreferrer'
                                    : undefined
                            }
                        >
                            <span className="text-3xl">{method.icon}</span>
                            <div>
                                <h3 className="font-semibold text-text-light dark:text-text-dark">
                                    {method.label}
                                </h3>
                                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                                    {method.value}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="card">
                    <h2 className="section-title">
                        {t('contact.formTitle', 'Send a Message')}
                    </h2>
                    <form
                        className="flex flex-col gap-5"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="name"
                                className="font-medium text-text-secondary-light dark:text-text-secondary-dark"
                            >
                                {t('contact.name', 'Name')}
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder={t(
                                    'contact.namePlaceholder',
                                    'Your name',
                                )}
                                required
                                className="px-4 py-3 bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark rounded-lg text-text-light dark:text-text-dark placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="email"
                                className="font-medium text-text-secondary-light dark:text-text-secondary-dark"
                            >
                                {t('contact.email', 'Email')}
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder={t(
                                    'contact.emailPlaceholder',
                                    'email@example.com',
                                )}
                                required
                                className="px-4 py-3 bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark rounded-lg text-text-light dark:text-text-dark placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="message"
                                className="font-medium text-text-secondary-light dark:text-text-secondary-dark"
                            >
                                {t('contact.message', 'Message')}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder={t(
                                    'contact.messagePlaceholder',
                                    'Write your message here...',
                                )}
                                required
                                className="px-4 py-3 bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark rounded-lg text-text-light dark:text-text-dark placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y min-h-[120px]"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            {t('contact.submit', 'Send Message')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
