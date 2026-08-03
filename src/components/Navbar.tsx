"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { title: "About", href: "#about" },
        { title: "Skills", href: "#skills" },
        { title: "Experience", href: "#experience" },
        { title: "Projects", href: "#projects" },
        { title: "Contact", href: "#contact" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                        ? "glass-nav shadow-lg py-3"
                        : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#"
                        className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground hover:opacity-85 transition-opacity"
                    >
                        <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-purple-500/20">
                            <Terminal size={16} />
                        </div>
                        <span className="font-title tracking-wide bg-gradient-to-r from-foreground to-foreground-muted bg-clip-text text-transparent">
                            Janiarithvika.
                        </span>
                    </a>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                {link.title}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-full hover:bg-neutral-800/10 dark:hover:bg-neutral-200/10 text-foreground transition-all duration-200 cursor-pointer"
                            aria-label="Toggle Theme"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        {/* Resume Button */}
                        <a
                            href="#contact"
                            className="relative group px-5 py-2 overflow-hidden rounded-full glass text-xs font-semibold tracking-wide text-foreground shadow-md transition-all duration-300 hover:shadow-purple-500/15 cursor-pointer flex items-center justify-center"
                        >
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                                Contact Me
                            </span>
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-500 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 -z-10" />
                        </a>
                    </div>

                    {/* Mobile Right Controls */}
                    <div className="flex md:hidden items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-neutral-800/10 dark:hover:bg-neutral-200/10 text-foreground cursor-pointer"
                            aria-label="Toggle Theme"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-full hover:bg-neutral-800/10 dark:hover:bg-neutral-200/10 text-foreground cursor-pointer"
                            aria-label="Menu"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Slideout Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-x-0 top-[60px] glass z-40 md:hidden border-b border-white/5 py-6 px-6"
                    >
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-base font-semibold text-muted-foreground hover:text-foreground py-2 border-b border-white/5 transition-colors"
                                >
                                    {link.title}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-2 w-full text-center py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold text-sm shadow-md"
                            >
                                Contact Me
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
