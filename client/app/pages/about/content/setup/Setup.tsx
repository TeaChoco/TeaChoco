// -Path: 'TeaChoco-Portfolio/client/app/pages/about/content/setup/Setup.tsx'
import GearCard from './GearCard';
import { motion } from 'framer-motion';
import DeviceHero from './DeviceHero';
import DeviceCompact from './DeviceCompact';
import { useTranslation } from 'react-i18next';
import { DEVICES, GEAR } from '~/data/about/setup';

/**
 * About section that showcases the owner's computers and gear.
 * The current machine is a hero card; other machines are collapsible rows.
 *
 * @returns The rendered setup section.
 */
export default function Setup() {
    const { t } = useTranslation();
    const featured = DEVICES.filter((device) => device.highlight);
    const others = DEVICES.filter((device) => !device.highlight);

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='w-full'
        >
            <h2 className='section-title linear-text inline-block'>{t('about.setup.title')}</h2>
            <p className='text-surface-subtle mb-8'>{t('about.setup.subtitle')}</p>

            <div className='flex flex-col gap-4'>
                {featured.map((device) => (
                    <DeviceHero key={device.id} device={device} />
                ))}
                {others.map((device) => (
                    <DeviceCompact key={device.id} device={device} />
                ))}
            </div>

            <div className='flex items-center gap-4 mt-12 mb-6'>
                <h3 className='text-lg font-semibold linear-text inline-block'>
                    {t('about.setup.gear.title')}
                </h3>
                <span className='h-px flex-1 bg-border' aria-hidden='true' />
            </div>

            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {GEAR.map((item) => (
                    <GearCard key={item.id} item={item} />
                ))}
            </div>
        </motion.div>
    );
}
