//-Path: "TeaChoco-Portfolio/client/src/components/Navbar.tsx"
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../router/links";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    return (
        <header className="flex items-center justify-between px-4 md:px-8 py-4 sticky top-0 z-50 bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-xl border-b border-border-light dark:border-border-dark transition-all duration-200">
            <Link to="/" className="text-2xl font-bold no-underline">
                <span className="gradient-text">TeaChoco</span>
            </Link>

            <div className="flex items-center gap-2">
                <nav className="flex gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`px-3 py-2 rounded-lg font-medium no-underline transition-all duration-200
                                ${
                                    location.pathname === link.path
                                        ? "text-primary-light bg-primary/15"
                                        : "text-text-secondary-light dark:text-text-secondary-dark hover:text-text-light dark:hover:text-text-dark hover:bg-primary/10"
                                }`}>
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <ThemeToggle />
            </div>
        </header>
    );
}
