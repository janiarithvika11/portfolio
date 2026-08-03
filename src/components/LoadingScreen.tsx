"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu } from "lucide-react";

const SYSTEM_LOGS = [
    "Initializing systems core...",
    "Loading neural configurations...",
    "Running vector search matrix...",
    "Initializing interface layers...",
    "Security audit completed.",
    "System fully operational.",
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);
    const [logIndex, setLogIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    // Animate Progress Bar and Logs
    useEffect(() => {
        let logTimer: NodeJS.Timeout;

        // Smooth progress increment
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    // Wait briefly, then close loading screen
                    setTimeout(() => {
                        setVisible(false);
                        setTimeout(onComplete, 400); // Allow fadeout animation to finish
                    }, 600);
                    return 100;
                }

                // Random step sizes
                const step = Math.floor(Math.random() * 8) + 2;
                return Math.min(prev + step, 100);
            });
        }, 85);

        // Rotate diagnostics logs
        const rotateLogs = () => {
            setLogIndex((prev) => {
                if (prev < SYSTEM_LOGS.length - 1) {
                    const nextDelay = Math.random() * 500 + 300;
                    logTimer = setTimeout(rotateLogs, nextDelay);
                    return prev + 1;
                }
                return prev;
            });
        };

        logTimer = setTimeout(rotateLogs, 400);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(logTimer);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 bg-[#030303] z-[99999] flex flex-col items-center justify-center p-6"
                >
                    {/* Main Logo Loader */}
                    <div className="flex flex-col items-center max-w-sm w-full text-center">

                        {/* Spinning AI Logo */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-white shadow-xl shadow-purple-500/10 mb-8"
                        >
                            <Cpu size={28} className="animate-pulse" />
                            <div className="absolute inset-0 rounded-2xl border border-white/20 animate-ping opacity-25" style={{ animationDuration: "2s" }} />
                        </motion.div>

                        {/* Diagnostic system log */}
                        <div className="h-6 mb-8 w-full">
                            <span className="text-[11px] font-mono tracking-wider text-purple-400 bg-purple-500/5 border border-purple-500/10 px-3 py-1 rounded-full uppercase">
                                {SYSTEM_LOGS[logIndex]}
                            </span>
                        </div>

                        {/* Progress Count */}
                        <div className="flex justify-between items-baseline w-full mb-2">
                            <span className="text-xs font-semibold uppercase tracking-widest text-[#666]">
                                Transmitting
                            </span>
                            <span className="text-xl font-bold font-title text-foreground-muted">
                                {progress}%
                            </span>
                        </div>

                        {/* Loading Bar Slider */}
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden relative">
                            <motion.div
                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                                style={{ width: `${progress}%` }}
                                layout
                            />
                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
