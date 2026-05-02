//-Path: "TeaChoco-Portfolio/client/src/pages/Contact.tsx"
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useTextColor from '$/hooks/useTextColor';
import Section from '../../components/layout/Section';
import { contactMethods } from '$/data/contact';

export default function Contact() {
    const { t } = useTranslation();
    const { hex } = useTextColor();

    return (
        <Section className='min-h-0!'>
            <div className='page-header'>
                <h1 className='page-title'>
                    <span className='linear-text'>{t('contact.title', 'Contact')}</span>
                </h1>
                <p className='page-subtitle'>
                    {t('contact.subtitle', "Have an interesting project? Let's talk!")}
                </p>
            </div>

            <div className='max-w-4xl mx-auto w-full'>
                {/* Intro Card */}
                <div className='card mb-10 text-center bg-linear-to-br from-primary/5 to-accent/5 border-primary/20'>
                    <h2 className='text-xl md:text-2xl font-bold text-text-light dark:text-text-dark mb-3'>
                        {t('contact.subtitle', "Have an interesting project? Let's talk!")}
                    </h2>
                    <p className='text-text-secondary-light dark:text-text-secondary-dark max-w-lg mx-auto'>
                        {t(
                            'contact.desc',
                            'Feel free to reach out through any of the platforms below. I usually respond within 24 hours.',
                        )}
                    </p>
                </div>

                {/* Contact Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {contactMethods.map((method, index) => (
                        <motion.a
                            key={method.label}
                            href={method.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03, translateY: -4 }}
                            className='card group flex flex-col items-center gap-4 p-6 text-center no-underline'
                            target={method.href.startsWith('http') ? '_blank' : undefined}
                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                            <div
                                className='w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg border border-black/10 dark:border-white/15'
                                style={{
                                    backgroundColor: `${method.color ?? hex}20`,
                                    boxShadow: `0 0 0 1px ${method.color ?? hex}35`,
                                }}
                            >
                                <method.icon
                                    className='text-2xl transition-colors duration-300'
                                    style={{
                                        color: method.color ?? hex,
                                        filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.15))',
                                    }}
                                />
                            </div>
                            <div>
                                <h3 className='font-bold text-text-light dark:text-text-dark mb-1 group-hover:text-primary-light transition-colors'>
                                    {method.label}
                                </h3>
                                <p className='text-text-muted-light dark:text-text-muted-dark text-sm break-all'>
                                    {method.value}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </Section>
    );
}
