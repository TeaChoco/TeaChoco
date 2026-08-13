// -Path: "TeaChoco-Portfolio/client/src/pages/favorites/components/FavoriteSection.tsx"
import { createElement } from 'react';
import type { IconType } from 'react-icons';

type Props = {
    icon: IconType;
    title: string;
    count: number;
};

export default function FavoriteSection({ icon, title, count }: Props) {
    return (
        <div className='flex items-center justify-start gap-3 mb-4'>
            {createElement(icon, { className: 'text-xl text-primary-light dark:text-primary-dark' })}
            <h2 className='text-2xl font-bold linear-text'>{title}</h2>
            <span className='text-sm text-text-muted-light dark:text-text-muted-dark'>({count})</span>
        </div>
    );
}