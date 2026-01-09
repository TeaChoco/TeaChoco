//-Path: "TeaChoco-Portfolio/client/src/layout/Layout.tsx"
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import { useTranslation } from 'react-i18next';
import Background from '../components/3d/Background';

export default function Layout() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col">
            <Background />
            <Navbar />
            <main className="w-full flex flex-col items-center">
                <Outlet />
            </main>
            <footer className="text-center py-8 text-text-muted-light dark:text-text-muted-dark border-t border-border-light dark:border-border-dark">
                <p>
                    {t(
                        'footer.copyright',
                        '© 2025 TeaChoco. All rights reserved.',
                    )}
                </p>
            </footer>
        </div>
    );
}
