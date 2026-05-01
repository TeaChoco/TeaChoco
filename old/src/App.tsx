//-Path: "TeaChoco-Portfolio/client/src/router/App.tsx"
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import Layout from './components/layout/Layout';
import Contact from './pages/contact/Contact';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='blog' element={<Blog />} />
                <Route path='about' element={<About />} />
                <Route path='ontact' element={<Contact />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Route>
        </Routes>
    );
}
