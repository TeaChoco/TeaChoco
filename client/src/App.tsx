//-Path: "vite-extra-react-ssr-ts/src/App.tsx"
import Home from './pages/home/Home';
// import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import { useEffect, useState } from 'react';
import Contact from './pages/contact/Contact';
import Layout from './components/layout/Layout';
import Portfolio from './pages/portfolio/Portfolio';
import { Routes, Route, Navigate } from 'react-router-dom';

function SafeNavigate({ to, replace = false }: { to: string; replace?: boolean }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // ไม่ render อะไรตอน SSR, render Navigate เฉพาะตอน client-side
    if (!isClient) return null;

    return <Navigate to={to} replace={replace} />;
}

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                {/* <Route path='blog' element={<Blog />} /> */}
                <Route path='about' element={<About />} />
                <Route path='portfolio' element={<Portfolio />} />
                <Route path='contact' element={<Contact />} />
                <Route path='*' element={<SafeNavigate to='/' replace />} />
            </Route>
        </Routes>
    );
}
