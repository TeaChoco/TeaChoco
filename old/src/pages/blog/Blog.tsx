//-Path: "TeaChoco-Portfolio/client/src/pages/blog/Blog.tsx"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Section from '../../components/layout/Section';

const blogPosts = [
    {
        id: 1,
        category: 'React',
        defaultTitle: 'Getting Started with React Server-Side Rendering',
        defaultExcerpt: 'Learn how to set up SSR for React Application for better SEO.',
        defaultDate: 'December 7, 2025',
        defaultReadTime: '5 min',
    },
    {
        id: 2,
        category: 'TypeScript',
        defaultTitle: 'Why TypeScript?',
        defaultExcerpt: 'Benefits of using TypeScript and reasons to switch from JavaScript.',
        defaultDate: 'December 5, 2025',
        defaultReadTime: '8 min',
    },
    {
        id: 3,
        category: 'CSS',
        defaultTitle: 'Modern CSS Techniques',
        defaultExcerpt: 'Modern CSS techniques every developer should know.',
        defaultDate: 'December 3, 2025',
        defaultReadTime: '6 min',
    },
];

export default function Blog() {
    const { t } = useTranslation();

    return (
        <Section>
            <div className='page-header'>
                <h1 className='page-title'>
                    <span className='linear-text'>{t('blog.title', 'Blog')}</span>
                </h1>
                <p className='page-subtitle'>
                    {t('blog.subtitle', 'Sharing knowledge and experience in software development')}
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {blogPosts.map((post) => (
                    <article key={post.id} className='card flex flex-col'>
                        <div className='flex justify-between items-center mb-4'>
                            <span className='bg-primary/20 text-primary-light px-3 py-1 rounded-full text-sm font-medium'>
                                {post.category}
                            </span>
                            <span className='text-text-muted-light dark:text-text-muted-dark text-sm'>
                                {t(`blog.posts.${post.id}.readTime`, post.defaultReadTime)}
                            </span>
                        </div>
                        <h2 className='text-xl font-semibold mb-3 leading-tight'>
                            {t(`blog.posts.${post.id}.title`, post.defaultTitle)}
                        </h2>
                        <p className='text-text-secondary-light dark:text-text-secondary-dark flex-1 mb-4'>
                            {t(`blog.posts.${post.id}.excerpt`, post.defaultExcerpt)}
                        </p>
                        <div className='flex justify-between items-center pt-4 border-t border-border-light dark:border-border-dark transition-colors duration-200'>
                            <time className='text-text-muted-light dark:text-text-muted-dark text-sm'>
                                {t(`blog.posts.${post.id}.date`, post.defaultDate)}
                            </time>
                            <Link
                                to={`/blog/${post.id}`}
                                className='text-primary-light font-medium no-underline hover:text-accent transition-colors'
                            >
                                {t('blog.readMore', 'Read more →')}
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
}
