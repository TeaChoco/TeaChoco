// -Path: "TeaChoco-Portfolio/client/app/pages/favorites/components/FadeOverflow.tsx"
import type { CSSProperties, ReactNode } from 'react';

type Props = {
    active?: boolean;
    maxHeight?: number;
    className?: string;
    children: ReactNode;
    style?: CSSProperties;
};

export default function FadeOverflow({ active, maxHeight, className, style, children }: Props) {
    const maskImage = active
        ? 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)'
        : undefined;
    return (
        <div
            className={className}
            style={{
                ...style,
                maxHeight,
                maskImage,
                WebkitMaskImage: maskImage,
            }}
        >
            {children}
        </div>
    );
}
