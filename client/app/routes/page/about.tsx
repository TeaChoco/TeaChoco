// -Path: 'Vite-React-Router-TypeScript/app/routes/about.tsx'
import AboutPage from '~/pages/about/About';
import type { Route } from './+types/about';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'TeaChoco - About' },
        { name: 'description', content: 'Welcome to TeaChoco Portfolio!' },
    ];
}

export default function About() {
    return <AboutPage />;
}
