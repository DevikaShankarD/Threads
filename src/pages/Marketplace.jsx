import React from 'react';
import MarketplaceCard from '../components/MarketplaceCard';
import { blueprints } from '../data';

const Marketplace = () => {
    return (
        <div className="p-8 md:p-20 pt-12">
            <div className="mb-12">
                <h1 className="text-6xl font-bold mb-4 uppercase tracking-tighter">The Blueprint <span className="text-primary">Marketplace</span></h1>
                <p className="font-mono text-gray-400 max-w-xl text-lg">
                    Select a design to upcycle your deadstock. Each blueprint is a verified service provided by our community of artists.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blueprints.map((item) => (
                    <MarketplaceCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Marketplace;
