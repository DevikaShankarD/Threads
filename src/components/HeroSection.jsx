import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
    // Text scatter/glitch animation
    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="min-h-[85vh] flex flex-col md:flex-row border-b border-white/10 overflow-hidden">
            <div className="md:w-1/2 p-8 md:p-20 flex flex-col justify-center border-r border-white/10 relative overflow-hidden group">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(204,255,0,0.05),transparent)] pointer-events-none" />
                <div className="absolute inset-0 bg-primary/5 -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out pointer-events-none" />

                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.1 }}
                    className="relative z-10"
                >
                    <motion.h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-6">
                        <motion.span variants={letterVariants}>DON'T</motion.span> <span className="text-primary inline-block hover:animate-pulse cursor-default">DUMP</span> <motion.span variants={letterVariants}>IT.</motion.span><br />
                        <span className="text-white relative group/text cursor-default">
                            REMIX
                            <span className="absolute -inset-1 bg-primary/20 blur-lg opacity-0 group-hover/text:opacity-100 transition-opacity" />
                        </span> <motion.span variants={letterVariants}>IT.</motion.span>
                    </motion.h1>

                    <motion.p variants={letterVariants} className="font-mono text-gray-400 max-w-md mb-8 text-lg">
                        The world's first decentralized upcycling marketplace. Turn your deadstock into drip using our network of verified artists.
                    </motion.p>

                    <motion.button
                        variants={letterVariants}
                        className="group flex items-center gap-3 bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-primary transition-all duration-300 hover:shadow-[5px_5px_0px_rgba(255,255,255,0.2)]"
                    >
                        Explore Drops
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>
            </div>

            <div className="md:w-1/2 relative group bg-surface">
                <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src="https://images.unsplash.com/photo-1542272617-08f086303294?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Before" />}
                    itemTwo={<ReactCompareSliderImage src="https://images.unsplash.com/photo-1584370848010-d7cc637703e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="After" />}
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    style={{ height: '100%' }}
                />

                {/* Marquee effect */}
                <div className="absolute top-0 w-full overflow-hidden bg-primary/90 text-black font-bold text-xs py-1 whitespace-nowrap z-20">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        className="inline-block"
                    >
                        UPDATE YOUR AESTHETIC // SAVE THE PLANET // UPDATE YOUR AESTHETIC // SAVE THE PLANET // UPDATE YOUR AESTHETIC // SAVE THE PLANET //
                    </motion.div>
                </div>

                <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md px-4 py-2 font-mono text-xs uppercase border border-white/20 z-10">
                    <span className="text-primary animate-pulse">●</span> Live Preview
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
