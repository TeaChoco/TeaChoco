// -Path: 'TeaChoco-Portfolio/client/app/pages/about/content/setup/SpecHighlights.tsx'
import { useTranslation } from 'react-i18next';
import type { DeviceSpec } from '~/types/setup';

/** Props for {@link SpecHighlights}. */
interface SpecHighlightsProps {
    /** The most important specs, rendered as tiles. */
    specs: DeviceSpec[];
}

/**
 * Grid of tiles that emphasizes the key specs of a device.
 *
 * @param props - SpecHighlights props.
 * @returns The rendered highlight tiles.
 */
export default function SpecHighlights({ specs }: SpecHighlightsProps) {
    const { t } = useTranslation();

    return (
        <dl className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
            {specs.map((spec) => (
                <div
                    key={spec.labelKey}
                    className='rounded-xl border border-primary/20 bg-primary/5 p-3'
                >
                    <dt className='text-xs uppercase tracking-wide text-surface-muted'>
                        {spec.icon ? `${spec.icon} ` : ''}
                        {t(spec.labelKey)}
                    </dt>
                    <dd className='mt-1 text-sm font-semibold text-surface-foreground'>
                        {spec.value}
                    </dd>
                </div>
            ))}
        </dl>
    );
}
