import React, { useState, useRef, useEffect } from 'react';
import { styles } from '../data';
import { Upload, Sparkles, Loader2, Download, RefreshCw, Bot, Sliders } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIStudio = () => {
    const [originalImage, setOriginalImage] = useState(null);
    const [resultImage, setResultImage] = useState(null);
    const [isRemixing, setIsRemixing] = useState(false);
    const [analysisLog, setAnalysisLog] = useState([]);

    // User Inputs
    const [customPrompt, setCustomPrompt] = useState("");
    const [mood, setMood] = useState("Cyberpunk"); // Default
    const [material, setMaterial] = useState("Denim"); // Default
    const [colorPalette, setColorPalette] = useState("#CCFF00"); // Acid Green default
    const [selectedStyle, setSelectedStyle] = useState(styles[0]);

    const canvasRef = useRef(null);
    const logContainerRef = useRef(null);

    // Auto-scroll logs
    useEffect(() => {
        if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
    }, [analysisLog]);

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setOriginalImage(url);
            setResultImage(null);
            setAnalysisLog([]);
        }
    };

    // Helper to draw varied patterns
    const drawPattern = (ctx, width, height, type, color) => {
        ctx.save();
        if (type === 'patch') {
            // Draw random patchwork squares
            const patchCount = 15;
            for (let i = 0; i < patchCount; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                const w = Math.random() * 100 + 50;
                const h = Math.random() * 100 + 50;

                ctx.fillStyle = i % 2 === 0 ? color : '#1a1a1a';
                ctx.globalAlpha = 0.4;
                ctx.fillRect(x, y, w, h);

                // Stitching lines
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 2;
                ctx.setLineDash([5, 5]);
                ctx.strokeRect(x, y, w, h);
            }
        } else if (type === 'distress') {
            // Draw scratch lines
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.globalAlpha = 0.6;
            for (let i = 0; i < 50; i++) {
                ctx.beginPath();
                const x = Math.random() * width;
                const y = Math.random() * height;
                ctx.moveTo(x, y);
                ctx.lineTo(x + (Math.random() - 0.5) * 50, y + (Math.random() - 0.5) * 50);
                ctx.stroke();
            }
        } else if (type === 'dye') {
            // Radial gradient for tie-dye feel
            const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
            gradient.addColorStop(0, color);
            gradient.addColorStop(0.5, "transparent");
            gradient.addColorStop(1, color);
            ctx.fillStyle = gradient;
            ctx.globalAlpha = 0.3;
            ctx.fillRect(0, 0, width, height);
        } else {
            // Acid wash / noise
            ctx.fillStyle = color;
            ctx.globalCompositeOperation = 'multiply';
            ctx.globalAlpha = 0.3;
            ctx.fillRect(0, 0, width, height);
        }
        ctx.restore();
    };

    const addToLog = (message) => {
        setAnalysisLog(prev => [...prev, message]);
    };

    const processImage = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = originalImage;

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;

            // 1. Draw Base Image
            ctx.drawImage(img, 0, 0);

            // 2. Tint with selected User Color Palette
            ctx.save();
            ctx.fillStyle = colorPalette;
            ctx.globalCompositeOperation = 'overlay'; // Blend mode for tint
            ctx.globalAlpha = 0.4;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.restore();

            // 3. Apply Style-Specific Procedural Pattern
            drawPattern(ctx, canvas.width, canvas.height, selectedStyle.id, colorPalette);

            // 4. "Smart" Overlay based on material (Mock)
            if (material.toLowerCase().includes('denim')) {
                // Add simplified noise to simulate texture
                // (Omitted for brevity, using simple overlay)
            }

            // 5. Watermark
            ctx.save();
            ctx.font = `bold ${canvas.width * 0.04}px monospace`;
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.textAlign = "left";
            ctx.shadowColor = "black";
            ctx.shadowBlur = 4;
            ctx.fillText(`MOOD: ${mood.toUpperCase()}`, 20, canvas.height - 60);
            ctx.fillText(`MAT: ${material.toUpperCase()}`, 20, canvas.height - 20);
            ctx.restore();

            // Export
            setResultImage(canvas.toDataURL('image/png'));
            setIsRemixing(false);
            addToLog(`>> BLUEPRINT GENERATED SUCCESSFULLY.`);
        };
    };

    const handleRemix = () => {
        if (!originalImage) return;
        setIsRemixing(true);
        setResultImage(null);
        setAnalysisLog([]);

        // Simulated Analysis Steps
        const steps = [
            `INITIALIZING NEURAL NET...`,
            `DETECTING FABRIC: ${material.toUpperCase()}... DETECTED.`,
            `ANALYZING PALETTE: ${colorPalette.toUpperCase()}...`,
            `APPLYING MOOD FILTER: ${mood.toUpperCase()}...`,
            `PROCESSING USER PROMPT: "${customPrompt}"...`,
            `SYNTHESIZING PATTERNS...`
        ];

        let delay = 0;
        steps.forEach((step, index) => {
            delay += 600 + Math.random() * 400;
            setTimeout(() => {
                addToLog(`>> ${step}`);
                if (index === steps.length - 1) {
                    processImage();
                }
            }, delay);
        });
    };

    return (
        <div className="p-8 md:p-20 pt-12 min-h-[80vh]">
            <canvas ref={canvasRef} className="hidden" />

            <div className="mb-12">
                <h1 className="text-6xl font-bold mb-4 uppercase tracking-tighter">AI Remix <span className="text-primary">Studio</span></h1>
                <p className="font-mono text-gray-400 max-w-xl text-lg">
                    Advanced Neural Upcycling. Validating inputs...
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* CONFIGURATION PANEL (Left implementation) */}
                <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
                    <div className="bg-surface border border-white/10 p-6 rounded-sm">
                        <div className="flex items-center gap-2 mb-6 text-primary">
                            <Sliders className="w-5 h-5" />
                            <h3 className="font-bold uppercase tracking-widest">Parameters</h3>
                        </div>

                        {/* Mood */}
                        <div className="mb-6">
                            <label className="block text-xs font-mono text-gray-400 mb-2">TARGET MOOD</label>
                            <select
                                value={mood}
                                onChange={(e) => setMood(e.target.value)}
                                className="w-full bg-black border border-white/20 p-3 font-mono text-white focus:border-primary outline-none"
                            >
                                <option>Cyberpunk</option>
                                <option>Vintage</option>
                                <option>Minimalist</option>
                                <option>Grunge</option>
                                <option>Streetwear</option>
                            </select>
                        </div>

                        {/* Material */}
                        <div className="mb-6">
                            <label className="block text-xs font-mono text-gray-400 mb-2">MATERIAL DETECTED</label>
                            <input
                                type="text"
                                value={material}
                                onChange={(e) => setMaterial(e.target.value)}
                                placeholder="e.g. Denim, Silk, Cotton"
                                className="w-full bg-black border border-white/20 p-3 font-mono text-white focus:border-primary outline-none"
                            />
                        </div>

                        {/* Color Picker */}
                        <div className="mb-6">
                            <label className="block text-xs font-mono text-gray-400 mb-2">COLOR PALETTE</label>
                            <div className="flex gap-2">
                                <input
                                    type="color"
                                    value={colorPalette}
                                    onChange={(e) => setColorPalette(e.target.value)}
                                    className="h-10 w-full bg-transparent cursor-pointer border-none"
                                />
                            </div>
                        </div>

                        {/* Custom Prompt */}
                        <div className="mb-8">
                            <label className="block text-xs font-mono text-gray-400 mb-2">SPECIFIC INSTRUCTIONS</label>
                            <textarea
                                value={customPrompt}
                                onChange={(e) => setCustomPrompt(e.target.value)}
                                placeholder="e.g. Add extra tearing on the knees..."
                                className="w-full bg-black border border-white/20 p-3 font-mono text-white focus:border-primary outline-none h-24 resize-none"
                            />
                        </div>

                        <h3 className="text-xs font-mono text-gray-400 mb-4 mt-8">SELECT PROCESS</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {styles.map((style) => (
                                <button
                                    key={style.id}
                                    onClick={() => setSelectedStyle(style)}
                                    className={`p-2 text-xs font-bold uppercase border transition-all ${selectedStyle.id === style.id ? 'bg-primary text-black border-primary' : 'border-white/20 text-gray-400 hover:border-white'}`}
                                >
                                    {style.name}
                                </button>
                            ))}
                        </div>

                    </div>
                </div>

                {/* VISUALIZER & LOGS (Right Implementation) */}
                <div className="lg:col-span-8 order-1 lg:order-2">
                    <div className="bg-surface border border-white/10 p-2 rounded-sm h-[600px] relative overflow-hidden group flex flex-col">

                        {/* Image Window */}
                        <div className="flex-1 relative bg-black/50 overflow-hidden flex items-center justify-center">
                            {!originalImage ? (
                                <div className="text-center">
                                    <Upload className="w-16 h-16 mx-auto mb-4 text-gray-600 group-hover:text-primary transition-colors" />
                                    <p className="font-mono text-gray-500 mb-4">DRAG & DROP OR SELECT</p>
                                    <label className="bg-white text-black px-6 py-3 font-bold uppercase cursor-pointer hover:bg-primary transition-colors">
                                        UPLOAD SOURCE
                                        <input type="file" className="hidden" accept="image/*" onChange={handleUpload} />
                                    </label>
                                </div>
                            ) : (
                                <div className="w-full h-full relative">
                                    <AnimatePresence mode='wait'>
                                        {isRemixing && (
                                            <motion.div
                                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                className="absolute inset-0 z-30 bg-black/90 backdrop-blur-sm flex items-center justify-center flex-col p-8"
                                            >
                                                <Loader2 className="w-16 h-16 text-primary animate-spin mb-8" />
                                                <div ref={logContainerRef} className="w-full max-w-md h-48 overflow-y-auto font-mono text-xs text-primary space-y-1 p-4 border border-primary/20 bg-primary/5">
                                                    {analysisLog.map((log, i) => (
                                                        <div key={i}>{log}</div>
                                                    ))}
                                                    <div className="animate-pulse">_</div>
                                                </div>
                                            </motion.div>
                                        )}

                                        <img
                                            src={resultImage || originalImage}
                                            className="w-full h-full object-contain"
                                            alt="Workplace"
                                        />
                                    </AnimatePresence>

                                    {/* Floating Tools */}
                                    {!isRemixing && (
                                        <div className="absolute top-4 right-4 flex gap-2 z-40">
                                            <button onClick={() => setOriginalImage(null)} className="p-2 bg-black/80 text-white hover:text-red-500"><RefreshCw /></button>
                                            {resultImage && (
                                                <a href={resultImage} download="blueprint.png" className="p-2 bg-primary text-black"><Download /></a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Execution Bar */}
                        <div className="border-t border-white/10 p-4 bg-black">
                            <button
                                onClick={handleRemix}
                                disabled={!originalImage || isRemixing}
                                className="w-full bg-primary text-black font-bold uppercase py-4 tracking-[0.2em] hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                            >
                                <Bot className="w-5 h-5" />
                                {isRemixing ? "PROCESSING..." : "EXECUTE GENERATION"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIStudio;
