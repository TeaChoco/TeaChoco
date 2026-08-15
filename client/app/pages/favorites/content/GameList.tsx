// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/content/GameList.tsx"
import { useTranslation } from 'react-i18next';
import { FaGamepad } from 'react-icons/fa6';
import FavoriteSection from '../components/FavoriteSection';
import StarRating from '../components/StarRating';
import ShowMoreButton from '../components/ShowMoreButton';
import FadeOverflow from '../../../components/layout/FadeOverflow';
import { gameList, gameTypeLabels } from '~/data/favorites/game';

const ROW_HEIGHT = 224;
const GAP = 24;

type Props = {
    rows?: number;
    viewMoreTo?: string;
};

export default function GameList({ rows, viewMoreTo }: Props) {
    const { t } = useTranslation();
    const isPreview = rows != null;
    const showMore = isPreview && gameList.length > rows!;

    const grid = (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {gameList.map((item) => (
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
                        <div className='min-w-0'>
                            <h3 className='font-semibold leading-tight'>{item.title}</h3>
                            {item.type && item.type.length > 0 && (
                                <div className='flex flex-wrap gap-1 mt-1'>
                                    {item.type.map((type) => (
                                        <span
                                            key={type}
                                            className='px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary-light dark:text-primary-dark border border-primary/20'
                                        >
                                            {gameTypeLabels[type]}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
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
            <FavoriteSection icon={FaGamepad} title={t('favorites.game')} count={gameList.length} />

            {gameList.length === 0 ? (
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
