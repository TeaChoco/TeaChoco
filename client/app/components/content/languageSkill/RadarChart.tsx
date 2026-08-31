// -Path: "TeaChoco-Portfolio/client/src/components/content/languageSkill/RadarChart.tsx"
import { useTranslation } from 'react-i18next';
import type { LanguageSkill } from '~/types/language';
import { abilityKeys, abilityColors } from '~/data/language';

interface RadarChartProps {
    hex: string;
    language: LanguageSkill;
}

export default function RadarChart({ language, hex }: RadarChartProps) {
    const { t } = useTranslation();
    const size = 230;
    const radius = 66;
    const center = size / 2;

    const point = (index: number, value: number) => {
        const angle = (Math.PI * 2 * index) / abilityKeys.length - Math.PI / 2;
        return {
            x: center + radius * Math.cos(angle) * (value / 100),
            y: center + radius * Math.sin(angle) * (value / 100),
        };
    };

    const labelPoint = (index: number) => {
        const angle = (Math.PI * 2 * index) / abilityKeys.length - Math.PI / 2;
        return {
            x: center + (radius + 26) * Math.cos(angle),
            y: center + (radius + 26) * Math.sin(angle),
        };
    };

    const gridPolygon = (level: number) =>
        abilityKeys
            .map((_, i) => {
                const p = point(i, level);
                return `${p.x},${p.y}`;
            })
            .join(' ');

    return (
        <svg
            role='img'
            className='w-full'
            viewBox={`0 0 ${size} ${size}`}
            aria-label={`${t(`languages.${language.id}`)} ${t('about.languagesTitle')}`}
        >
            {[25, 50, 75, 100].map((level) => (
                <polygon
                    key={level}
                    points={gridPolygon(level)}
                    fill='none'
                    stroke='currentColor'
                    strokeOpacity='0.15'
                    strokeWidth='1'
                />
            ))}

            {abilityKeys.map((key, i) => {
                const p = point(i, 100);
                const label = labelPoint(i);

                return (
                    <g key={key}>
                        <line
                            x1={center}
                            y1={center}
                            x2={p.x}
                            y2={p.y}
                            stroke={abilityColors[key]}
                            strokeOpacity='0.2'
                            strokeWidth='1'
                        />
                        <text
                            x={label.x}
                            y={label.y}
                            textAnchor='middle'
                            dominantBaseline='middle'
                            fontSize='10'
                            fill={abilityColors[key]}
                            fontWeight='600'
                        >
                            {`${t(`languages.${key}`)} ${language.abilities[key]}%`}
                        </text>
                    </g>
                );
            })}

            {abilityKeys.map((key, i) => {
                const p = point(i, language.abilities[key]);
                const next = point(
                    (i + 1) % abilityKeys.length,
                    language.abilities[abilityKeys[(i + 1) % abilityKeys.length]],
                );

                return (
                    <g key={key}>
                        <line
                            x1={p.x}
                            y1={p.y}
                            x2={next.x}
                            y2={next.y}
                            stroke={abilityColors[key]}
                            strokeWidth='2.5'
                            strokeLinecap='round'
                        />
                        <circle
                            cx={p.x}
                            cy={p.y}
                            r='4'
                            fill={abilityColors[key]}
                            stroke={hex}
                            strokeWidth='1.5'
                        />
                    </g>
                );
            })}
        </svg>
    );
}
