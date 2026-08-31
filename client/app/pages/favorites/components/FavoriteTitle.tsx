//-Path: "TeaChoco-Portfolio/client/src/pages/favorites/components/FavoriteTitle.tsx"
import { useTranslation } from 'react-i18next';
import { FaMagnifyingGlass, FaSort } from 'react-icons/fa6';
import { Link } from '~/i18n/routing';
import Select from '~/components/custom/Select';
import Search from '~/components/custom/Search';
import RangeSlider from '~/components/custom/RangeSlider';
import type { ViewMode } from '../types';

const SIZE_MIN = 0;
const SIZE_NAMES = ['X1', 'X2', 'X3', 'X4', 'X5'];

interface FavoriteTitleProps<SortT> {
    favoriteSection: React.ReactNode;
    viewMode: ViewMode;
    setViewMode: (m: ViewMode) => void;
    size?: number;
    maxSize?: number;
    setSize?: (n: number) => void;
    query: string;
    setQuery: (q: string) => void;
    sort: SortT;
    setSort: (s: SortT) => void;
    sortOptions: { value: SortT; label: string }[];
    viewMoreTo?: string;
}

export default function FavoriteTitle<SortT = string>({
    favoriteSection,
    viewMode,
    setViewMode,
    size,
    maxSize,
    setSize,
    query,
    setQuery,
    sort,
    setSort,
    sortOptions,
    viewMoreTo,
}: FavoriteTitleProps<SortT>) {
    const { t } = useTranslation();
    const sizeAvailable = size != null && maxSize != null && setSize != null;

    const search = viewMoreTo ? (
        <Link
            to={viewMoreTo}
            onClick={() => window.scrollTo(0, 0)}
            className='relative flex flex-1 items-center w-full pl-10 pr-9 py-3.5 rounded-2xl border border-border bg-surface/20 text-sm text-surface-foreground transition-all hover:border-primary hover:ring-4 hover:ring-primary/10'
            aria-label={t('favorites.searchMv', 'Search by title or author...')}
        >
            <FaMagnifyingGlass
                className='absolute left-3.5 top-1/2 -translate-y-1/2 text-surface-muted pointer-events-none'
                aria-hidden='true'
            />
            <span className='text-surface-muted'>
                {t('favorites.searchMv', 'Search by title or author...')}
            </span>
        </Link>
    ) : (
        <Search
            className='flex-1'
            value={query}
            onChange={setQuery}
            placeholder={t('favorites.searchMv', 'Search by title or author...')}
            clearTitle={t('favorites.clear', 'Clear')}
        />
    );

    const viewBtn = (mode: ViewMode, label: string, icon: string) => (
        <button
            type='button'
            onClick={() => setViewMode(mode)}
            aria-pressed={viewMode === mode}
            title={label}
            className={`rounded-md px-2 py-1 text-xs font-medium transition-colors ${
                viewMode === mode
                    ? 'bg-primary-emphasis text-white'
                    : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-primary'
            }`}
        >
            {icon}
        </button>
    );

    return (
        <>
            <div className='flex items-center justify-between gap-4'>
                {viewMoreTo ? (
                    <Link
                        to={viewMoreTo}
                        onClick={() => window.scrollTo(0, 0)}
                        className='inline-flex items-center transition-opacity hover:opacity-70'
                    >
                        {favoriteSection}
                    </Link>
                ) : (
                    favoriteSection
                )}
                <div className='flex items-center gap-1'>
                    <div className='flex items-center gap-1 rounded-lg border border-border bg-surface-overlay/50 p-1'>
                        {viewBtn('grid', t('favorites.viewGrid', 'Grid view'), '▦')}
                        {viewBtn('list', t('favorites.viewList', 'List view'), '☰')}
                    </div>
                    {sizeAvailable && (
                        <div className='hidden sm:flex items-center gap-2 rounded-lg border border-border bg-surface-overlay/50 px-3 py-2'>
                            <RangeSlider
                                step={1}
                                value={size}
                                max={maxSize}
                                min={SIZE_MIN}
                                onChange={setSize}
                                labelPosition='left'
                                valueFormatter={(v) => SIZE_NAMES[v]}
                                ariaLabel={t('favorites.size', 'Size')}
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                {search}
                <div className='w-full sm:w-64'>
                    <Select<SortT>
                        icon={<FaSort className='text-text-muted-light dark:text-text-muted-dark' />}
                        value={sort}
                        options={sortOptions}
                        onChange={(v) => setSort(v)}
                        className='py-2.5'
                    />
                </div>
            </div>
        </>
    );
}
