import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MarketplaceCard = ({ item }) => {
    const isLowStock = item.slots <= 3;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative bg-surface border border-white/10 overflow-hidden rounded-sm hover:z-10"
        >
            {/* Holographic Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 z-20 pointer-events-none" />

            <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 transition-colors z-20 pointer-events-none" />

            {/* Image Container */}
            <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                    src={item.afterImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 max-w-[80%] flex flex-wrap justify-end z-20">
                    {item.tags.map((tag, i) => (
                        <span key={i} className="inline-block bg-black/80 backdrop-blur text-[10px] font-mono text-white px-2 py-1 ml-1 mb-1 border border-white/10 uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 relative bg-surface">
                {/* Tech decoration lines */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-primary/50 transition-colors" />

                <div className="flex items-center justify-between mb-4">
                    <Link to="/artist-profile" className="flex items-center gap-3 group/artist hover:opacity-80 transition-opacity">
                        <img src={item.artist.avatar} alt={item.artist.name} className="w-8 h-8 rounded-full border border-white/20 grayscale group-hover:grayscale-0 transition-all" />
                        <span className="text-sm font-mono text-gray-400 group-hover/artist:text-primary transition-colors">{item.artist.name}</span>
                    </Link>
                    <div className={`px-2 py-1 text-[10px] font-bold uppercase border tracking-widest ${isLowStock ? 'text-red-500 border-red-500/50 bg-red-500/10' : 'text-primary border-primary/50 bg-primary/10'}`}>
                        {item.slots}/{item.maxSlots} Left
                        {isLowStock && <span className="inline-block w-1.5 h-1.5 bg-red-500 rounded-full ml-2 animate-pulse" />}
                    </div>
                </div>

                <h3 className="text-2xl font-bold uppercase mb-2 leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{item.title}</h3>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                    <span className="text-lg font-mono tracking-tighter">{item.price}</span>
                    <button className="text-xs font-bold uppercase bg-white text-black px-4 py-2 hover:bg-primary transition-colors hover:shadow-[0_0_10px_rgba(204,255,0,0.4)]">
                        Secure Slot
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default MarketplaceCard;
