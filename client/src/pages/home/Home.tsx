//-Path: "TeaChoco-Portfolio/client/src/pages/Home.tsx"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();

    return (
        <section className="page">
            <div className="min-h-[70vh] flex flex-col justify-center items-center text-center py-16">
                <img
                    src="/TeaChoco-Developer-logo.png"
                    alt="TeaChoco-Developer-logo"
                    className="absolute opacity-20"
                />
                <div className="z-1 flex flex-col items-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
                        <span className="gradient-text">TeaChoco</span>{' '}
                        Portfolio
                    </h1>
                    <p className="text-xl md:text-2xl text-text-secondary-light dark:text-text-secondary-dark mb-4 transition-all duration-200">
                        {t('home.subtitle')}
                    </p>
                    <p className="max-w-xl text-text-muted-light dark:text-text-muted-dark mb-8 text-lg transition-all duration-200">
                        {t('home.description')}
                    </p>
                    <div className="flex gap-4 flex-wrap justify-center">
                        <Link to="/about" className="btn btn-primary">
                            {t('home.aboutBtn')}
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            {t('home.contactBtn')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
