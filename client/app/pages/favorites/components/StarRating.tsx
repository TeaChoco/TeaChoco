// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/components/StarRating.tsx"
import { FaStar, FaStarHalfStroke, FaRegStar } from 'react-icons/fa6';

type Props = {
    rating: number;
    max?: number;
    color?: string;
    showNumber?: boolean;
};

export default function StarRating({ rating, max = 5, color = '#f59e0b', showNumber = true }: Props) {
    const display = (Math.floor(rating * 10) / 10).toFixed(1);

    return (
        <div className='flex items-center gap-2' aria-label={`${rating} / ${max}`}>
            <div className='flex items-center gap-0.5'>
                {Array.from({ length: max }, (_, i) => {
                    const value = i + 1;
                    if (rating >= value) {
                        return <FaStar key={i} className='text-sm' style={{ color }} />;
                    }
                    if (rating >= value - 0.5) {
                        return <FaStarHalfStroke key={i} className='text-sm' style={{ color }} />;
                    }
                    return <FaRegStar key={i} className='text-sm text-text-muted-light dark:text-text-muted-dark' />;
                })}
            </div>
            {showNumber && (
                <span className='text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark'>
                    {display}
                </span>
            )}
        </div>
    );
}