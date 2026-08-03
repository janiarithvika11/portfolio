"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, Heart, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="py-12 bg-background border-t border-white/[0.03]">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Logo and Name */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-semibold">
                    <Terminal size={14} className="text-purple-500" />
                    <span>Janiarithvika Simma</span>
                </div>

                {/* Note */}

                {/* Copyright */}
                <p className="text-xs text-muted-foreground/60 font-medium">
                    &copy; {new Date().getFullYear()} Janiarithvika Simma. All rights reserved.
                </p>

            </div>

            {/* Floating Back To Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 p-3 rounded-full glass border border-white/10 hover:border-purple-500/30 text-purple-400 hover:text-purple-300 hover:bg-neutral-800/10 dark:hover:bg-white/5 transition-all shadow-xl cursor-pointer z-40 group"
                        aria-label="Back to Top"
                    >
                        <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
}
