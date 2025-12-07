//-Path: "TeaChoco-Portfolio/client/src/pages/Blog.tsx"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const blogPosts = [
    { id: 1, category: "React" },
    { id: 2, category: "TypeScript" },
    { id: 3, category: "CSS" },
];

export default function Blog() {
    const { t } = useTranslation();

    return (
        <section className="page">
            <div className="page-header">
                <h1 className="page-title">
                    <span className="gradient-text">{t("blog.title")}</span>
                </h1>
                <p className="page-subtitle">{t("blog.subtitle")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                    <article key={post.id} className="card flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <span className="bg-primary/20 text-primary-light px-3 py-1 rounded-full text-sm font-medium">
                                {post.category}
                            </span>
                            <span className="text-text-muted-light dark:text-text-muted-dark text-sm">
                                {t(`blog.posts.${post.id}.readTime`)}
                            </span>
                        </div>
                        <h2 className="text-xl font-semibold mb-3 leading-tight">
                            {t(`blog.posts.${post.id}.title`)}
                        </h2>
                        <p className="text-text-secondary-light dark:text-text-secondary-dark flex-1 mb-4">
                            {t(`blog.posts.${post.id}.excerpt`)}
                        </p>
                        <div className="flex justify-between items-center pt-4 border-t border-border-light dark:border-border-dark">
                            <time className="text-text-muted-light dark:text-text-muted-dark text-sm">
                                {t(`blog.posts.${post.id}.date`)}
                            </time>
                            <Link
                                to={`/blog/${post.id}`}
                                className="text-primary-light font-medium no-underline hover:text-accent transition-colors">
                                {t("blog.readMore")}
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
