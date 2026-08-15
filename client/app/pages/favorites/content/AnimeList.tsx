// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/content/AnimeList.tsx"
import { useTranslation } from 'react-i18next';
import { FaClapperboard } from 'react-icons/fa6';
import FavoriteSection from '../components/FavoriteSection';
import StarRating from '../components/StarRating';
import ShowMoreButton from '../components/ShowMoreButton';
import FadeOverflow from '../../../components/layout/FadeOverflow';
import { animeList } from '~/data/favorites/anime';

const GAP = 24;
const ROW_HEIGHT = 224;

type Props = {
    rows?: number;
    viewMoreTo?: string;
};

export default function AnimeList({ rows, viewMoreTo }: Props) {
    const { t } = useTranslation();
    const isPreview = rows != null;
    const showMore = isPreview && animeList.length > rows!;

    const grid = (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {animeList.map((item) => (
                <div key={item.id} className='card p-5 flex flex-col gap-3'>
                    <div className='flex items-start gap-3'>
                        {item.image && (
                            <div className='w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-surface-overlay-light dark:bg-surface-overlay-dark'>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        )}
                        <h3 className='font-semibold leading-tight'>{item.title}</h3>
                    </div>
                    {item.note && (
                        <p className='text-sm text-text-secondary-light dark:text-text-secondary-dark'>
                            {item.note}
                        </p>
                    )}
                    <StarRating rating={item.rating} />
                </div>
            ))}
        </div>
    );

    return (
        <div className='mb-16'>
            <FavoriteSection
                icon={FaClapperboard}
                title={t('favorites.anime')}
                count={animeList.length}
            />

            {animeList.length === 0 ? (
                <div className='text-center py-12'>
                    <p className='text-text-muted-light dark:text-text-muted-dark'>
                        {t('favorites.empty')}
                    </p>
                </div>
            ) : (
                <FadeOverflow active={isPreview} maxHeight={rows! * ROW_HEIGHT + (rows! - 1) * GAP}>
                    {grid}
                </FadeOverflow>
            )}

            {showMore && viewMoreTo && <ShowMoreButton to={viewMoreTo} />}
        </div>
    );
}
