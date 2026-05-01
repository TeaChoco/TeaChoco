//-Path: "vite-extra-react-ssr-ts/src/components/layout/Footer.tsx"
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className='text-center py-8 text-text-muted-light dark:text-text-muted-dark border-t border-border-light dark:border-border-dark'>
            <p>{t('footer.copyright', '© 2025 TeaChoco. All rights reserved.')}</p>
        </footer>
    );
}
