import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const location = useLocation();
    const links = [
        { name: "Marketplace", path: "/marketplace" },
        { name: "The Graveyard", path: "/graveyard" },
        { name: "AI Studio", path: "/ai-studio" },
    ];

    return (
        <nav className="flex items-center justify-between p-6 border-b border-white/5 backdrop-blur-md sticky top-0 z-50 bg-background/50">
            <Link to="/" className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors relative group">
                RE:THREAD
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
            </Link>

            <div className="hidden md:flex gap-8 font-mono text-sm uppercase tracking-widest text-gray-400">
                {links.map((link) => (
                    <Link key={link.path} to={link.path} className="relative group hover:text-white transition-colors">
                        {link.name}
                        {location.pathname === link.path && (
                            <motion.span
                                layoutId="navbar-underline"
                                className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary"
                            />
                        )}
                    </Link>
                ))}
            </div>

            <button className="bg-white/5 hover:bg-primary hover:text-black border border-white/10 px-6 py-2 rounded-full font-mono text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                Connect Wallet
            </button>
        </nav>
    );
};

export default Navbar;
