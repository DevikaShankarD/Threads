import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const Layout = () => {
    return (
        <div className="min-h-screen bg-background text-paper font-sans selection:bg-primary selection:text-background">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <footer className="p-8 text-center text-gray-500 font-mono text-sm">
                &copy; 2024 RE:THREAD // SUSTAINABLE FUTURE
            </footer>
        </div>
    );
};

export default Layout;
