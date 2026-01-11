import React from 'react';
import { stats, blueprints } from '../data';
import { motion } from 'framer-motion';

const ArtistProfile = () => {
    // Mock artist data
    const artist = {
        name: "Yuki Stitch",
        avatar: "https://placehold.co/200x200/121212/CCFF00?text=YS",
        bio: "Specializing in Sashiko repair and denim reconstruction. Keeping heritage alive through upcycling.",
        location: "Tokyo, JP",
    };

    return (
        <div className="p-8 md:p-20 pt-12">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row gap-8 items-start mb-20 border-b border-white/10 pb-12">
                <img src={artist.avatar} alt={artist.name} className="w-32 h-32 rounded-full border-2 border-primary" />
                <div>
                    <h1 className="text-5xl font-bold uppercase tracking-tighter mb-2">{artist.name}</h1>
                    <p className="font-mono text-gray-400 mb-6 max-w-lg">{artist.bio}</p>
                    <div className="flex gap-4">
                        <button className="bg-white text-black px-6 py-2 font-bold uppercase hover:bg-primary transition-colors">
                            Follow
                        </button>
                        <button className="border border-white/20 px-6 py-2 font-bold uppercase hover:border-primary hover:text-primary transition-colors">
                            Message
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="md:ml-auto grid grid-cols-3 gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl font-bold text-primary font-mono">{stat.value}</div>
                            <div className="text-xs uppercase text-gray-500 tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Portfolio Grid (Simulated Masonry) */}
            <h2 className="text-3xl font-bold uppercase mb-8">Past Work</h2>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {blueprints.concat(blueprints).map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="break-inside-avoid bg-surface border border-white/10 rounded overflow-hidden mb-8"
                    >
                        <img src={item.afterImage} alt={item.title} className="w-full object-cover" />
                        <div className="p-4">
                            <h3 className="font-bold uppercase text-sm mb-1">{item.title}</h3>
                            <div className="flex gap-2">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono text-gray-500">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ArtistProfile;
