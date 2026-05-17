// -Path: "TeaChoco-Portfolio/client/src/components/about/SkillsList.tsx"
import { motion } from 'framer-motion';
import type { Skill } from '$/data/skill';
import useTextColor from '$/hooks/useTextColor';
import { getTagIcon } from '$/data/icon';

export default function SkillsList({ skills }: { skills: Skill[] }) {
    const { hex } = useTextColor();

    return (
        <div className='grid gap-4 mt-2'>
            {skills.map((skill) => {
                const icon = getTagIcon(skill.id);

                return (
                    <motion.div
                        key={skill.name}
                        className='card group'
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <div className='flex justify-between items-center mb-3'>
                            <div className='flex items-center gap-3'>
                                <div
                                    className='w-9 h-9 rounded-lg flex items-center justify-center border border-black/10 dark:border-white/15'
                                    style={{
                                        backgroundColor: `${icon.color ?? hex}20`,
                                        boxShadow: `0 0 0 1px ${icon.color ?? hex}35`,
                                    }}
                                >
                                    <icon.icon
                                        className='text-lg'
                                        style={{
                                            color: icon.color ?? hex,
                                            filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.12))',
                                        }}
                                    />
                                </div>
                                <span className='font-semibold text-text-light dark:text-text-dark group-hover:text-primary-light transition-colors'>
                                    {skill.name}
                                </span>
                            </div>
                            <span
                                className='text-sm font-bold'
                                style={{ color: icon.color ?? hex }}
                            >
                                {skill.level}%
                            </span>
                        </div>
                        <div className='h-2 bg-border-light dark:bg-border-dark rounded-full overflow-hidden'>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{
                                    delay: 0.1,
                                    duration: 1,
                                    ease: 'easeOut',
                                }}
                                viewport={{ once: true }}
                                className='h-full rounded-full'
                                style={{
                                    background: `linear-gradient(90deg, var(--color-primary), ${icon.color ?? hex})`,
                                }}
                            />
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
