"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Calendar, Link2, BookOpen, Brain, Terminal, Code } from "lucide-react";

export default function EducationAchievements() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const educations = [
        {
            degree: "B.Tech Computer Science (AI & ML)",
            institution: "Shri Vishnu Engineering College for Women",
            duration: "2023 - 2027",
            grade: "CGPA 8.71",
            highlights: [
                "Specializing in Artificial Intelligence and Machine Learning pipelines.",
                "Active member of the Coding & AI developer clubs.",
                "Engaged in technical research on Deep Learning algorithms.",
            ],
        },
    ];

    const achievements = [
        {
            title: "200+ DSA Problems",
            desc: "Solved core algorithmic challenges across LeetCode & CodeChef.",
            icon: <Terminal className="text-purple-400" size={18} />,
        },
        {
            title: "AI Hackathons",
            desc: "Designed autonomous agent agents and NLP prediction models.",
            icon: <Brain className="text-blue-400" size={18} />,
        },
        {
            title: "Java Programming Certificate",
            desc: "NPTEL/Swayam verification in advanced Java structures.",
            icon: <Award className="text-pink-400" size={18} />,
        },
        {
            title: "Python Problem Solving",
            desc: "HackerRank certification proving procedural efficiency.",
            icon: <Award className="text-teal-400" size={18} />,
        },
    ];

    const profiles = [
        {
            name: "LeetCode",
            url: "https://leetcode.com", // Placeholder URLs targetting profiles
            icon: <Code className="text-amber-500" size={20} />,
            label: "@janiarithvika",
        },
        {
            name: "GitHub",
            url: "https://github.com",
            icon: (
                <svg className="w-5 h-5 text-neutral-200" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            label: "@janiarithvika-s",
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com",
            icon: (
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
            label: "Janiarithvika Simma",
        },
        {
            name: "CodeChef",
            url: "https://codechef.com",
            icon: <Terminal className="text-emerald-500" size={20} />,
            label: "@janiarithvika",
        },
        {
            name: "HackerRank",
            url: "https://hackerrank.com",
            icon: <Award className="text-green-500" size={20} />,
            label: "@janiarithvika",
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Glow elements */}
            <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 h-full" ref={containerRef}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Education Timeline */}
                    <div className="lg:col-span-6 space-y-8">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 15 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5 }}
                                className="text-2xl sm:text-3xl font-bold tracking-tight font-title"
                            >
                                My <span className="text-gradient">Education</span>
                            </motion.h2>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "60px" } : {}}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-3 rounded-full"
                            />
                        </div>

                        <div className="relative border-l border-white/10 dark:border-white/10 ml-3 pl-8 space-y-10">
                            {educations.map((edu, idx) => (
                                <motion.div
                                    key={edu.degree}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 * idx }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[45px] top-1.5 flex h-7.5 w-7.5 items-center justify-center rounded-full bg-background border border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)] z-10">
                                        <GraduationCap className="text-blue-400" size={13} />
                                    </span>

                                    <div className="glow-card glass p-6 rounded-2xl">
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                            <h4 className="text-base font-bold text-foreground tracking-tight">
                                                {edu.degree}
                                            </h4>
                                            <span className="flex items-center gap-1 text-[11px] font-semibold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full">
                                                <Calendar size={11} />
                                                {edu.duration}
                                            </span>
                                        </div>

                                        <p className="text-xs font-semibold text-muted-foreground mb-1">
                                            {edu.institution}
                                        </p>
                                        <p className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded w-fit mb-4">
                                            {edu.grade}
                                        </p>

                                        <ul className="space-y-1.5 text-xs text-muted-foreground">
                                            {edu.highlights.map((h, i) => (
                                                <li key={i} className="list-disc list-inside">
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Achievements & Coding Profiles */}
                    <div className="lg:col-span-6 space-y-12">

                        {/* Achievements Sub-Section */}
                        <div className="space-y-6">
                            <div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5 }}
                                    className="text-2xl sm:text-3xl font-bold tracking-tight font-title"
                                >
                                    Key <span className="text-gradient">Achievements</span>
                                </motion.h2>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: "60px" } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-3 rounded-full"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {achievements.map((ach, idx) => (
                                    <motion.div
                                        key={ach.title}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                                        className="glow-card glass p-5 rounded-2xl flex gap-3.5 items-start hover:translate-y-[-2px] transition-transform duration-200"
                                    >
                                        <div className="p-2 rounded-xl bg-white/[0.03] dark:bg-black/[0.2] border border-white/[0.05] shadow-inner text-foreground">
                                            {ach.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-foreground leading-snug">
                                                {ach.title}
                                            </h4>
                                            <p className="text-xs text-muted-foreground mt-1 leading-normal">
                                                {ach.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Coding Profiles Sub-Section */}
                        <div className="space-y-6 pt-2">
                            <div>
                                <motion.h3
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5 }}
                                    className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-title"
                                >
                                    Developer <span className="text-gradient">Profiles</span>
                                </motion.h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {profiles.map((prof, idx) => (
                                    <motion.a
                                        key={prof.name}
                                        href={prof.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.4, delay: idx * 0.08 + 0.4 }}
                                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass border border-white/5 hover:border-purple-500/30 hover:bg-neutral-800/10 dark:hover:bg-white/5 transition-all duration-200 cursor-pointer shadow-sm hover:scale-[1.02]"
                                    >
                                        <div className="shrink-0">{prof.icon}</div>
                                        <div className="text-left">
                                            <p className="text-xs font-bold leading-none text-foreground">
                                                {prof.name}
                                            </p>
                                            <span className="text-[10px] text-muted-foreground font-medium">
                                                {prof.label}
                                            </span>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
