// -Path: 'Vite-React-Router-TypeScript/app/routes/portfolio.tsx'
import PortfolioPage from '~/pages/portfolio/Portfolio';
import type { Route } from './+types/portfolio';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'React Router App - Portfolio' },
        { name: 'description', content: 'Welcome to React Router!' },
    ];
}

export default function Portfolio() {
    return <PortfolioPage />;
}
