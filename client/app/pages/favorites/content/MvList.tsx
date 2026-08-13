// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/content/MvList.tsx"
import { mvList } from '~/data/favorites';
import { FaMusic } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import FavoriteSection from '../components/FavoriteSection';
import StarRating from '../components/StarRating';
import ShowMoreButton from '../components/ShowMoreButton';
import FadeOverflow from '../../../components/layout/FadeOverflow';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const GAP = 32;
const ROW_HEIGHT = 400;

type Props = {
    rows?: number;
    viewMoreTo?: string;
};

export default function MvList({ rows, viewMoreTo }: Props) {
    const { t } = useTranslation();
    const isPreview = rows != null;
    const showMore = isPreview && mvList.length > rows!;

    const grid = (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {mvList.map((item) => (
                <div key={item.id} className='flex flex-col gap-3'>
                    <div className='card overflow-hidden p-0'>
                        <LiteYouTubeEmbed
                            id={item.videoId}
                            title={item.title}
                            webp
                            poster='hqdefault'
                            lazyLoad
                        />
                    </div>
                    <div className='flex items-center justify-between px-1'>
                        <div className='min-w-0'>
                            <h3 className='font-semibold leading-tight truncate'>{item.title}</h3>
                            {item.artist && (
                                <p className='text-sm text-text-secondary-light dark:text-text-secondary-dark'>
                                    {item.artist}
                                </p>
                            )}
                        </div>
                        {item.note && (
                            <p className='text-xs text-text-muted-light dark:text-text-muted-dark text-right'>
                                {item.note}
                            </p>
                        )}
                    </div>
                    <div className='px-1'>
                        <StarRating rating={item.rating} />
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className='mb-16'>
            <FavoriteSection icon={FaMusic} title={t('favorites.mv')} count={mvList.length} />

            {mvList.length === 0 ? (
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
