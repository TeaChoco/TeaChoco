// -Path: "TeaChoco-Portfolio/client/src/pages/portfolio/components/ProjectTags.tsx"
import { getTagIcon } from '~/constants/icon';
import type { TagIconKey } from '~/types/icon';

export default function ProjectTags({ tags }: { tags: TagIconKey[] }) {
    return (
        <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => {
                const tagIcon = getTagIcon(tag);
                return (
                    <span
                        key={tag}
                        className='px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 inline-flex items-center gap-1'
                    >
                        {tagIcon && <tagIcon.icon className='text-[10px]' style={{ color: tagIcon.color }} />}
                        {tag}
                    </span>
                );
            })}
        </div>
    );
}
