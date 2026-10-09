// -Path: "TeaChoco-Portfolio/client/src/pages/about/content/components/CodingSkillList.tsx"
import { motion } from 'framer-motion';
import type { TagIcon } from '~/types/icon';
import useTextColor from '~/hooks/useTextColor';
import type { CodingSkill } from '~/types/coding';

interface CodingSkillLineProps {
    icon: TagIcon;
    skill: CodingSkill;
}

export default function CodingSkillLine({ icon, skill }: CodingSkillLineProps) {
    const { hex } = useTextColor();

    return (
        <div className='h-2 bg-border rounded-full overflow-hidden'>
            <motion.div
                initial={{ width: 0 }}
                className='h-full rounded-full'
                whileInView={{ width: `${skill.level}%` }}
                transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
                style={{
                    background: `linear-gradient(90deg, ${icon.color ?? hex}66, ${icon.color ?? hex})`,
                }}
            />
        </div>
    );
}
