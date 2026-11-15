// -Path: 'TeaChoco-Portfolio/client/app/components/custom/Section.tsx'
import { motion, useReducedMotion } from 'framer-motion';

/** Props for {@link Section}. */
interface SectionProps {
    className?: string;
    children: React.ReactNode;
}

/**
 * Page section that fades its content in on first scroll. The reveal is skipped
 * entirely when the visitor prefers reduced motion.
 *
 * @param props - Section content and extra classes.
 * @returns The animated section element.
 */
export default function Section({ children, className = '' }: SectionProps) {
    /** Mirrors the OS `prefers-reduced-motion` setting. */
    const reducedMotion = useReducedMotion();

    return (
        <motion.section
            transition={{ duration: 0.8 }}
            viewport={{ margin: '-100px' }}
            initial={reducedMotion ? false : { opacity: 0, y: 50 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            style={reducedMotion ? undefined : { transform: 'translateY(50px)' }}
            className={`min-h-[calc(100vh-80px)] flex flex-col justify-center items-center p-4 ${className}`}
        >
            {children}
        </motion.section>
    );
}
