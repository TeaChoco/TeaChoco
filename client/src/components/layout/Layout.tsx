//-Path: "TeaChoco-Portfolio/client/src/layout/Layout.tsx"
import Navbar from './navbar/Navbar';
import Footer from './navbar/Footer';
// import Background from '../3d/Background';
import { Outlet } from 'react-router-dom';
import { ErrorBoundaryProvider } from '../3d/ErrorBound';

export default function Layout() {
    return (
        <div className='min-h-screen flex flex-col'>
            <ErrorBoundaryProvider />
            {/* <Background /> */}
            <Navbar />
            <main className='flex-1 p-4 md:p-8 mx-auto w-full'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
