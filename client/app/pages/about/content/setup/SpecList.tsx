// -Path: 'TeaChoco-Portfolio/client/app/pages/about/content/setup/SpecList.tsx'
import { useTranslation } from 'react-i18next';
import type { DeviceSpec } from '~/types/setup';

/** Props for {@link SpecList}. */
interface SpecListProps {
    /** Technical specifications of a device; `value` is rendered as-is. */
    specs: DeviceSpec[];
}

/**
 * Renders a device's specs as a responsive definition list.
 *
 * @param props - SpecList props.
 * @returns The rendered spec grid.
 */
export default function SpecList({ specs }: SpecListProps) {
    const { t } = useTranslation();

    return (
        <dl className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2'>
            {specs.map((spec) => (
                <div key={spec.labelKey}>
                    <dt className='text-surface-muted text-xs uppercase tracking-wide'>
                        {spec.icon ? `${spec.icon} ` : ''}
                        {t(spec.labelKey)}
                    </dt>
                    <dd className='text-surface-foreground text-sm font-medium'>{spec.value}</dd>
                </div>
            ))}
        </dl>
    );
}
