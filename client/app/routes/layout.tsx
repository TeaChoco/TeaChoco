//-Path: 'Vite-React-Router-TypeScript/app/routes/Layout.tsx'
import { Outlet } from 'react-router';
import Footer from '~/components/layout/Footer';
import Navbar from '~/components/layout/navbar/Navbar';
import { ToasterProvider } from '~/components/provider/ToasterProvider';

export default function Layout() {
    return (
        <div className='flex flex-col min-h-dvh overflow-auto pt-20 pb-20 lg:pb-0'>
            <ToasterProvider />
            <Navbar />
            <main className='flex-1'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
