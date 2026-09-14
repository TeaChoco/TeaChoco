//-Path: "TeaChoco-Portfolio/client/src/pages/contact/content/DiscordServers.tsx"
import { motion } from 'framer-motion';
import { FaDiscord } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { discordServerLinks } from '~/data/contact';

const DISCORD_COLOR = '#5865F2';

export default function DiscordServers() {
    const { t } = useTranslation();

    if (discordServerLinks.length === 0) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='relative mx-auto mt-16 w-full max-w-2xl'
        >
            <div className='card group relative overflow-hidden p-6 sm:p-8'>
                {/* Ambient accent glow */}
                <div
                    aria-hidden='true'
                    className='pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-100'
                    style={{
                        background: `radial-gradient(120% 90% at 100% 0%, ${DISCORD_COLOR}15, transparent 55%)`,
                    }}
                />
                {/* Top accent rule */}
                <div
                    aria-hidden='true'
                    className='absolute inset-x-0 top-0 h-0.75'
                    style={{
                        background: `linear-gradient(90deg, transparent, ${DISCORD_COLOR}, transparent)`,
                    }}
                />

                <div className='relative'>
                    {/* Header */}
                    <div className='mb-6 flex items-center gap-3'>
                        <span
                            className='grid size-11 shrink-0 place-items-center rounded-xl'
                            style={{
                                background: `${DISCORD_COLOR}18`,
                                boxShadow: `inset 0 0 0 1px ${DISCORD_COLOR}30`,
                            }}
                        >
                            <FaDiscord className='text-xl' style={{ color: DISCORD_COLOR }} />
                        </span>
                        <h2 className='text-lg font-semibold text-surface-foreground'>
                            {t('contact.discordTitle', 'Discord Servers')}
                        </h2>
                    </div>

                    {/* Server links */}
                    <div className='flex flex-col gap-3'>
                        {discordServerLinks.map((server, index) => (
                            <motion.a
                                key={server.id}
                                href={server.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                initial={{ opacity: 0, x: -12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className='group/link flex items-center gap-4 rounded-xl border border-border bg-surface-overlay/50 p-3.5 transition-all hover:border-[#5865F2]/40 hover:bg-surface-overlay hover:shadow-lg hover:shadow-[#5865F2]/5'
                            >
                                <img
                                    src={server.image}
                                    alt={server.title}
                                    className='size-10 shrink-0 rounded-lg object-cover ring-1 ring-border'
                                />
                                <span className='min-w-0 flex-1'>
                                    <span className='block text-sm font-semibold text-surface-foreground transition-colors group-hover/link:text-[#5865F2]'>
                                        {server.title}
                                    </span>
                                    <span className='block text-xs text-surface-muted'>
                                        {t(`contact.discordLink.${server.id}.desc`)}
                                    </span>
                                    <span className='block truncate text-xs text-surface-muted/70'>
                                        discord.gg/{server.link.split('/').pop()}
                                    </span>
                                </span>
                                <span className='shrink-0 rounded-lg border border-[#5865F2]/20 bg-[#5865F2]/10 px-3 py-1.5 text-xs font-medium text-[#5865F2] transition-all group-hover/link:border-[#5865F2]/40 group-hover/link:bg-[#5865F2]/20'>
                                    Join
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
