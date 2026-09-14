//-Path: "TeaChoco-Portfolio/client/src/pages/contact/content/ProfileCard.tsx"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { contacts } from '~/data/contact';
import ContactMethod from './ContactMethod';
import type { ContactProfile } from '~/types/contact';

export default function ProfileCard({
    profile,
    index,
}: {
    profile: ContactProfile;
    index: number;
}) {
    const { t } = useTranslation();
    const methods = contacts[profile.key];
    const [copied, setCopied] = useState<string | null>(null);

    const copyValue = (method: { label: string; value: string }) => {
        navigator.clipboard?.writeText(method.value).then(() => {
            setCopied(method.label);
            setTimeout(() => setCopied(null), 1500);
        });
    };

    return (
        <motion.div
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='card group relative overflow-hidden p-6 sm:p-7'
        >
            {/* Ambient accent glow */}
            <div
                aria-hidden='true'
                className='pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-100'
                style={{
                    background: `radial-gradient(120% 90% at 0% 0%, ${profile.accent}17, transparent 55%)`,
                }}
            />

            {/* Top accent rule */}
            <div
                aria-hidden='true'
                className='absolute inset-x-0 top-0 h-0.75'
                style={{
                    background: `linear-gradient(90deg, transparent, ${profile.accent}, transparent)`,
                }}
            />

            <div className='relative flex flex-col gap-6'>
                {/* Header */}
                <div className='flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:text-left text-center'>
                    <div className='relative shrink-0'>
                        <div
                            aria-hidden='true'
                            className='absolute -inset-2 rounded-full blur-lg'
                            style={{ background: `${profile.accent}40` }}
                        />
                        <div
                            className='relative rounded-full bg-surface-overlay p-1'
                            style={{
                                background: `conic-gradient(from 210deg, ${profile.accent}, transparent 45%, ${profile.accent})`,
                            }}
                        >
                            <img
                                src={profile.image}
                                alt={t(profile.labelKey)}
                                className='size-20 rounded-full object-cover ring-4 ring-surface'
                            />
                        </div>
                    </div>

                    <div className='min-w-0'>
                        <h2 className='text-xl font-bold text-surface-foreground'>
                            {t(profile.labelKey)}
                        </h2>
                    </div>
                </div>

                {/* Method rows */}
                <div className='flex flex-col gap-2.5'>
                    {methods.map((method) => (
                        <ContactMethod
                            key={method.label}
                            method={method}
                            copied={copied === method.label}
                            onCopy={() => copyValue({ label: method.label, value: method.value })}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
