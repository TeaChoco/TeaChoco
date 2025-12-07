//-Path: "TeaChoco-Portfolio/client/src/layout/Layout.tsx"
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 p-4 md:p-8 max-w-6xl mx-auto w-full">
                <Outlet />
            </main>
            <footer className="text-center py-8 text-text-muted-light dark:text-text-muted-dark border-t border-border-light dark:border-border-dark">
                <p>© 2025 TeaChoco. All rights reserved.</p>
            </footer>
        </div>
    );
}
