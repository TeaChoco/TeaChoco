import { useTranslation } from 'react-i18next';
import { FaRotateLeft, FaFilter, FaTableCells, FaHeart, FaHeartCrack } from 'react-icons/fa6';
import Select from '~/components/custom/Select';
import Button from '~/components/custom/Button';
import Search from '~/components/custom/Search';
import clsx from 'clsx';
import type { TierRowAxis } from './TierRow';

interface TierListToolbarProps {
    sourceOptions: { label: string; value: string }[];
    selectedSource: string;
    onSourceChange: (value: string) => void;
    search: string;
    onSearchChange: (value: string) => void;
    axis: TierRowAxis;
    onAxisChange: (axis: TierRowAxis) => void;
    count: number;
    onReset: () => void;
}

const AXIS_OPTIONS: { value: TierRowAxis; icon: React.ReactNode; labelKey: string }[] = [
    { value: 'favorite', icon: <FaHeart aria-hidden='true' />, labelKey: 'favorites.toolbar.favorite' },
    { value: 'both', icon: <FaTableCells aria-hidden='true' />, labelKey: 'favorites.toolbar.all' },
    { value: 'waifu', icon: <FaHeartCrack aria-hidden='true' />, labelKey: 'favorites.toolbar.waifu' },
];

/**
 * Toolbar above the tier board.
 * Lets the user search characters, filter by anime/game source, switch between
 * the dual-axis board and a single "favorite"/"waifu" view, and reset every
 * filter at once.
 */
export function TierListToolbar({
    onReset,
    count,
    search,
    axis,
    sourceOptions,
    selectedSource,
    onSearchChange,
    onSourceChange,
    onAxisChange,
}: TierListToolbarProps) {
    const { t } = useTranslation();

    const dirty = search !== '' || selectedSource !== 'all';

    return (
        <div className='rounded-2xl border border-border bg-surface-overlay/60 p-4 mb-4 flex flex-col gap-4'>
            <div className='grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3'>
                <Search
                    value={search}
                    onChange={onSearchChange}
                    placeholder={t('favorites.toolbar.search')}
                    ariaLabel={t('favorites.toolbar.search')}
                    clearTitle={t('favorites.toolbar.reset')}
                />

                <div className='w-full sm:w-52'>
                    <Select
                        icon={<FaFilter aria-hidden='true' />}
                        options={sourceOptions}
                        value={selectedSource}
                        onChange={onSourceChange}
                    />
                </div>
            </div>

            <div className='flex flex-wrap items-center gap-x-6 gap-y-3'>
                <div className='inline-flex items-center gap-1 rounded-2xl border border-border bg-surface/20 p-1'>
                    {AXIS_OPTIONS.map((option) => {
                        const active = axis === option.value;
                        return (
                            <button
                                key={option.value}
                                type='button'
                                onClick={() => onAxisChange(option.value)}
                                aria-pressed={active}
                                className={clsx(
                                    'flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-semibold transition-all cursor-pointer',
                                    active
                                        ? 'bg-primary text-primary-foreground shadow-sm'
                                        : 'text-surface-muted hover:text-surface-foreground hover:bg-surface-overlay',
                                )}
                            >
                                <span className='text-xs'>{option.icon}</span>
                                {t(option.labelKey)}
                            </button>
                        );
                    })}
                </div>

                <div className='ml-auto flex items-center gap-3'>
                    <span className='text-xs font-medium text-surface-muted'>
                        {t('favorites.toolbar.count', { count })}
                    </span>
                    <Button variant='outline' size='sm' onClick={onReset} disabled={!dirty}>
                        <FaRotateLeft aria-hidden='true' />
                        {t('favorites.toolbar.reset')}
                    </Button>
                </div>
            </div>
        </div>
    );
}
