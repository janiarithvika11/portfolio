"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ArrowRight, Download, Mail, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

// Dynamically import Three.js Canvas to avoid SSR issues
const AIGlobe = dynamic(() => import("../AIGlobe"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full min-h-[350px] md:min-h-[500px] flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
        </div>
    ),
});

const ROLES = [
    "AI Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "Open Source Learner",
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        const handleTyping = () => {
            const fullText = ROLES[roleIndex];
            if (!isDeleting) {
                // Typing
                setCurrentText(fullText.substring(0, currentText.length + 1));
                setTypingSpeed(100);

                if (currentText === fullText) {
                    // Pause before deleting
                    timer = setTimeout(() => setIsDeleting(true), 2000);
                    return;
                }
            } else {
                // Deleting
                setCurrentText(fullText.substring(0, currentText.length - 1));
                setTypingSpeed(50);

                if (currentText === "") {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % ROLES.length);
                }
            }
        };

        timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, roleIndex, typingSpeed]);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background">
            {/* Background glowing decorations */}
            <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none dark:block hidden animate-pulse" />
            <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none dark:block hidden animate-pulse" />

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">

                {/* Left Side Content */}
                <div className="md:col-span-7 flex flex-col justify-center text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6 w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                            Available for Internships & Projects
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
                    >
                        Hi, I'm <br />
                        <span className="text-gradient font-title">Janiarithvika Simma</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-xl sm:text-2xl font-bold h-8 text-foreground/80 flex items-center"
                    >
                        <span>I'm a&nbsp;</span>
                        <span className="text-purple-500 dark:text-purple-400 border-r-2 border-purple-500 animate-pulse pr-1">
                            {currentText}
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
                    >
                        Building AI-Powered Software that Solves Real Problems. Specialized engineering student developing agentic systems, full-stack tools, and intelligent workflows.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold text-sm shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group cursor-pointer"
                        >
                            View Projects
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="https://drive.google.com/file/d/1UAoN9rB1ls6ptcGNttOfyooT1M_ngAuL/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full glass font-semibold text-sm hover:bg-neutral-800/10 dark:hover:bg-white/5 border border-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                        >
                            <Download size={16} />
                            Download Resume
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-full hover:bg-neutral-800/5 dark:hover:bg-white/5 border border-transparent hover:border-white/10 font-semibold text-sm text-muted-foreground hover:text-foreground transition-all flex items-center gap-2 cursor-pointer"
                        >
                            <Mail size={16} />
                            Contact
                        </a>
                    </motion.div>
                </div>

                {/* Right Side 3D Globe Illustration */}
                <div className="md:col-span-5 w-full flex justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full max-w-[450px] aspect-square relative"
                    >
                        <AIGlobe />
                    </motion.div>
                </div>

            </div>

            {/* Floating prompt to scroll */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <a href="#about" className="flex flex-col items-center">
                    <span className="text-xs tracking-widest uppercase font-semibold text-muted-foreground mb-1">
                        Scroll down
                    </span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                        <ArrowDown size={14} className="text-purple-500" />
                    </motion.div>
                </a>
            </div>
        </section>
    );
}
