//-Path: "TeaChoco-Portfolio/client/src/layout/Layout.tsx"
import Navbar from './navbar/Navbar';
import Footer from './navbar/Footer';
import Background from '../3d/Background';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className='min-h-screen flex flex-col'>
            <Background />
            <Navbar />
            <main className='flex-1 p-4 md:p-8 max-w-6xl mx-auto w-full'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
