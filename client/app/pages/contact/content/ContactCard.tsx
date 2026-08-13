// -Path: "TeaChoco-Portfolio/client/src/pages/contact/content/ContactCard.tsx"
import { motion } from 'framer-motion';
import useTextColor from '~/hooks/useTextColor';
import { type ContactMethod } from '~/types/contact';

export default function ContactCard({ index, method }: { index: number; method: ContactMethod }) {
    const { hex } = useTextColor();

    return (
        <motion.a
            key={method.label}
            href={method.href}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, translateY: -4 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className='card group flex flex-col items-center gap-4 p-6 text-center no-underline'
            target={method.href.startsWith('http') ? '_blank' : undefined}
            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
            <div
                className='w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg border border-border'
                style={{
                    backgroundColor: `${method.color ?? hex}20`,
                    boxShadow: `0 0 0 1px ${method.color ?? hex}35`,
                }}
            >
                <method.icon className='text-2xl' style={{ color: method.color ?? hex }} />
            </div>
            <div>
                <h3 className='font-bold text-surface-foreground mb-1 group-hover:text-primary-light transition-colors'>
                    {method.label}
                </h3>
                <p className='text-surface-muted text-sm break-all'>{method.value}</p>
            </div>
        </motion.a>
    );
}
