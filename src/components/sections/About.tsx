"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Code, BookOpen, Brain, Briefcase, FileSpreadsheet } from "lucide-react";

export default function About() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const stats = [
        {
            icon: <GraduationCap className="text-purple-400" size={24} />,
            label: "College",
            value: "Shri Vishnu Engineering College",
            sub: "for Women",
            color: "from-purple-500/10 to-indigo-500/10",
        },
        {
            icon: <BookOpen className="text-blue-400" size={24} />,
            label: "Branch",
            value: "B.Tech CSE (AI & ML)",
            sub: "2023 - 2027",
            color: "from-blue-500/10 to-cyan-500/10",
        },
        {
            icon: <Award className="text-indigo-400" size={24} />,
            label: "CGPA",
            value: "8.71",
            sub: "Out of 10.0",
            color: "from-indigo-500/10 to-purple-500/10",
        },
        {
            icon: <Code className="text-pink-400" size={24} />,
            label: "DSA Solved",
            value: "200+ Problems",
            sub: "LeetCode & CodeChef",
            color: "from-pink-500/10 to-rose-500/10",
        },
        {
            icon: <Briefcase className="text-teal-400" size={24} />,
            label: "Experience",
            value: "Syncall Intern",
            sub: "Flask & Backend Dev",
            color: "from-teal-500/10 to-emerald-500/10",
        },
        {
            icon: <Brain className="text-orange-400" size={24} />,
            label: "Hackathons",
            value: "AI & ML focus",
            sub: "Active Participant",
            color: "from-orange-500/10 to-yellow-500/10",
        },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-background">
            <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6" ref={containerRef}>

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl font-bold tracking-tight font-title"
                    >
                        About <span className="text-gradient">Me</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "80px" } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"
                    />
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Bio text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        {/* Profile Image Frame */}
                        <div className="relative w-28 h-28 rounded-2xl overflow-hidden border border-purple-500/20 shadow-md">
                            <img
                                src="https://drive.google.com/uc?export=view&id=1MFf-ROQSQ3PCfc7gnIDCE08B-eh1zARn"
                                alt="Janiarithvika Simma"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                        </div>

                        <h3 className="text-2xl font-bold text-foreground">
                            Engineering Intelligent Systems for the Future
                        </h3>

                        <p className="text-base text-muted-foreground leading-relaxed">
                            I am a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning.
                            I enjoy building scalable software systems, AI applications, and full-stack web platforms.
                            My interests include backend engineering, machine learning, distributed systems, and solving complex algorithmic problems.
                        </p>

                        <p className="text-base text-muted-foreground leading-relaxed">
                            Driven by curiosity, I love dissecting complex problems and translating them into robust, clean code.
                            I'm always seeking opportunities to learn new technologies and apply my knowledge directly to resolve real-world challenges.
                        </p>

                        <div className="pt-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                            >
                                Let's collaborate on code
                                <span className="text-lg">→</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Core Specs Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 15 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.1 * i + 0.4 }}
                                className="glow-card glass p-6 rounded-2xl flex flex-col justify-between h-[160px] hover:translate-y-[-4px] transition-transform duration-300"
                            >
                                <div className="flex justify-between items-center">
                                    <div className="p-2.5 rounded-xl bg-white/[0.03] dark:bg-black/[0.2] border border-white/[0.05] shadow-inner">
                                        {stat.icon}
                                    </div>
                                    <span className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground">
                                        {stat.label}
                                    </span>
                                </div>

                                <div className="mt-4">
                                    <h4 className="text-lg font-bold text-foreground tracking-tight leading-snug">
                                        {stat.value}
                                    </h4>
                                    <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                                        {stat.sub}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
