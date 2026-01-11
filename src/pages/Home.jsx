import React from 'react';
import HeroSection from '../components/HeroSection';
import MarketplaceCard from '../components/MarketplaceCard';
import { blueprints } from '../data';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <HeroSection />

            <section className="p-8 md:p-20">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-2">Fresh <span className="text-primary">Blueprints</span></h2>
                        <p className="font-mono text-gray-400">Curated upcycling services from verified artists.</p>
                    </div>
                    <Link to="/marketplace" className="hidden md:flex items-center gap-2 font-mono text-sm uppercase border border-white/20 hover:border-primary hover:text-primary px-6 py-2 transition-colors">
                        View All <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blueprints.slice(0, 3).map((item) => (
                        <MarketplaceCard key={item.id} item={item} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
