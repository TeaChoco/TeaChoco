// -Path: 'Vite-React-Router-TypeScript/app/routes/not-found.tsx'
import NotfoundPage from '~/pages/Notfound';
import { seo } from '~/lib/seo';
import type { Route } from './+types/not-found';

export function meta({ params }: Route.MetaArgs) {
    const lang = params.lang ?? 'en-US';
    const title = '404 - Page Not Found | TeaChoco Portfolio';
    const description =
        'The page you were looking for does not exist or has been moved. Browse TeaChoco portfolio, projects, about and favorites instead.';

    return seo({
        lang,
        title,
        description,
        path: '/404',
        noIndex: true,
    });
}

export default function NotFound() {
    return <NotfoundPage />;
}