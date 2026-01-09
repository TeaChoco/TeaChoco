//-Path: "TeaChoco-Portfolio/client/src/router/App.tsx"
import Layout from '../layout/Layout';
import Home from '../pages/home/Home';
import Blog from '../pages/blog/Blog';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
    const isGithubPage = Boolean(import.meta.env.VITE_IS_GITHUB_PAGE);
    console.log(isGithubPage);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="blog" element={<Blog />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    );
}
