import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './Layout';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import AIStudio from './pages/AIStudio';
import ArtistProfile from './pages/ArtistProfile';
import PageTransition from './components/PageTransition';

// Placeholder pages for now
const Graveyard = () => <div className="p-20 text-center text-2xl font-bold">THE GRAVEYARD - COMING SOON</div>;
const ArtistLogin = () => <div className="p-20 text-center text-2xl font-bold">ARTIST LOGIN</div>;

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Layout />}>
                    <Route index element={<PageTransition><Home /></PageTransition>} />
                    <Route path="marketplace" element={<PageTransition><Marketplace /></PageTransition>} />
                    <Route path="graveyard" element={<PageTransition><Graveyard /></PageTransition>} />
                    <Route path="ai-studio" element={<PageTransition><AIStudio /></PageTransition>} />
                    <Route path="artist-profile" element={<PageTransition><ArtistProfile /></PageTransition>} />
                    <Route path="artist-login" element={<PageTransition><ArtistLogin /></PageTransition>} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    );
}

export default App;
