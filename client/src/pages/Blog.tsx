//-Path: "TeaChoco-Portfolio/client/src/pages/Blog.tsx"
import { Link } from "react-router-dom";

const blogPosts = [
    {
        id: 1,
        title: "เริ่มต้นกับ React Server-Side Rendering",
        excerpt:
            "เรียนรู้วิธีการตั้งค่า SSR สำหรับ React Application เพื่อ SEO ที่ดีขึ้น",
        date: "7 ธันวาคม 2025",
        category: "React",
        readTime: "5 นาที",
    },
    {
        id: 2,
        title: "ทำไมต้อง TypeScript?",
        excerpt:
            "ข้อดีของการใช้ TypeScript และเหตุผลที่ควรเปลี่ยนจาก JavaScript",
        date: "5 ธันวาคม 2025",
        category: "TypeScript",
        readTime: "8 นาที",
    },
    {
        id: 3,
        title: "Modern CSS Techniques",
        excerpt: "เทคนิค CSS สมัยใหม่ที่นักพัฒนาทุกคนควรรู้",
        date: "3 ธันวาคม 2025",
        category: "CSS",
        readTime: "6 นาที",
    },
];

export default function Blog() {
    return (
        <section className="page">
            <div className="page-header">
                <h1 className="page-title">
                    <span className="gradient-text">บทความ</span>
                </h1>
                <p className="page-subtitle">
                    แบ่งปันความรู้และประสบการณ์ในการพัฒนาซอฟต์แวร์
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                    <article key={post.id} className="card flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <span
                                className="bg-primary/20 text-primary-light px-3 py-1 
                                           rounded-full text-sm font-medium">
                                {post.category}
                            </span>
                            <span className="text-text-muted-light dark:text-text-muted-dark text-sm">
                                {post.readTime}
                            </span>
                        </div>
                        <h2 className="text-xl font-semibold mb-3 leading-tight">
                            {post.title}
                        </h2>
                        <p className="text-text-secondary-light dark:text-text-secondary-dark flex-1 mb-4">
                            {post.excerpt}
                        </p>
                        <div
                            className="flex justify-between items-center pt-4 
                                       border-t border-border-light dark:border-border-dark">
                            <time className="text-text-muted-light dark:text-text-muted-dark text-sm">
                                {post.date}
                            </time>
                            <Link
                                to={`/blog/${post.id}`}
                                className="text-primary-light font-medium no-underline 
                                           hover:text-accent transition-colors">
                                อ่านเพิ่มเติม →
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
