// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/content/MvList.tsx"
import { FaMusic } from 'react-icons/fa6';
import { mvList } from '~/data/favorites/mv';
import { useTranslation } from 'react-i18next';
import VideoCard from '../components/mv/VideoCard';
import ShowMoreButton from '../components/ShowMoreButton';
import FavoriteSection from '../components/FavoriteSection';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import FadeOverflow from '../../../components/layout/FadeOverflow';

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
            {mvList.map((item, index) => (
                <VideoCard key={index} item={item} />
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
