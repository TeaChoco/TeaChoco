// -Path: 'Vite-React-Router-TypeScript/app/routes/contact.tsx'
import ContactPage from '~/pages/contact/Contact';
import type { Route } from './+types/contact';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'React Router App - Contact' },
        { name: 'description', content: 'Welcome to TeaChoco Portfolio!' },
    ];
}

export default function Contact() {
    return <ContactPage />;
}
