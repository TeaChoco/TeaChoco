// -Path: 'TeaChoco-Portfolio/client/app/pages/about/content/setup/DeviceHero.tsx'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SpecHighlights from './SpecHighlights';
import SpecList from './SpecList';
import { splitSpecs } from './utils';
import { STATUS_META } from '~/data/about/setup-meta';
import type { Device } from '~/types/setup';

/** Props for {@link DeviceHero}. */
interface DeviceHeroProps {
    /** The featured (current) device. */
    device: Device;
}

/**
 * Full-width hero card for the machine the owner uses right now.
 *
 * @param props - DeviceHero props.
 * @returns The rendered hero card.
 */
export default function DeviceHero({ device }: DeviceHeroProps) {
    const { t } = useTranslation();
    const status = STATUS_META[device.status];
    const { primary, secondary } = splitSpecs(device.specs);

    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='card flex flex-col gap-5 border-primary/40 ring-1 ring-primary/25 shadow-lg shadow-primary/20'
        >
            <header className='flex flex-wrap items-start justify-between gap-3'>
                <div className='min-w-0'>
                    <h3 className='text-xl font-bold text-surface-foreground'>{device.name}</h3>
                    {device.nicknameKey && (
                        <p className='text-sm font-medium text-primary'>{t(device.nicknameKey)}</p>
                    )}
                    <p className='text-xs text-surface-subtle'>{t(device.typeKey)}</p>
                </div>

                <div className='flex items-center gap-2'>
                    {device.year && (
                        <span className='text-xs font-mono text-surface-muted'>{device.year}</span>
                    )}
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${status.pill}`}>
                        {t(status.labelKey)}
                    </span>
                </div>
            </header>

            <SpecHighlights specs={primary} />
            <SpecList specs={secondary} />

            {device.noteKey && <p className='text-sm text-surface-subtle'>{t(device.noteKey)}</p>}
        </motion.article>
    );
}
