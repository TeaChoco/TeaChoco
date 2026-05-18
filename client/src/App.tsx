// -Path: 'TeaChoco-Portfolio/client/src/App.tsx'
import './index.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import { useEffect, useState } from 'react';
import Contact from './pages/contact/Contact';
import Layout from './components/layout/Layout';
import { getRouteMeta } from './secure/routeMeta';
import Portfolio from './pages/portfolio/Portfolio';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

function SafeNavigate({ to, replace = false }: { to: string; replace?: boolean }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return <Navigate to={to} replace={replace} />;
}

export default function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        document.title = getRouteMeta(pathname).title;
    }, [pathname]);

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='portfolio' element={<Portfolio />} />
                <Route path='contact' element={<Contact />} />
                <Route path='*' element={<SafeNavigate to='/' replace />} />
            </Route>
        </Routes>
    );
}
