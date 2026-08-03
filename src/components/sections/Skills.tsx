"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Monitor, Server, Database, BrainCircuit, Wrench, Settings } from "lucide-react";

type Skill = {
    name: string;
    level: string; // Add visual levels for premium feel
};

type SkillCategory = {
    title: string;
    icon: React.ReactNode;
    skills: Skill[];
    color: string;
};

export default function Skills() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const categories: SkillCategory[] = [
        {
            title: "Programming",
            icon: <Code2 className="text-purple-400" size={20} />,
            color: "from-purple-500/10 to-indigo-500/15",
            skills: [
                { name: "Java", level: "Advanced" },
                { name: "Python", level: "Advanced" },
                { name: "C", level: "Intermediate" },
                { name: "JavaScript", level: "Advanced" },
            ],
        },
        {
            title: "AI & ML",
            icon: <BrainCircuit className="text-pink-400" size={20} />,
            color: "from-pink-500/10 to-rose-500/15",
            skills: [
                { name: "Machine Learning", level: "Advanced" },
                { name: "Deep Learning", level: "Intermediate" },
                { name: "NLP", level: "Intermediate" },
                { name: "Computer Vision", level: "Intermediate" },
                { name: "PyTorch", level: "Intermediate" },
                { name: "Scikit-learn", level: "Advanced" },
            ],
        },
        {
            title: "Backend",
            icon: <Server className="text-blue-400" size={20} />,
            color: "from-blue-500/10 to-cyan-500/15",
            skills: [
                { name: "Spring Boot", level: "Advanced" },
                { name: "FastAPI", level: "Advanced" },
                { name: "Flask", level: "Intermediate" },
                { name: "REST APIs", level: "Advanced" },
                { name: "JWT Auth", level: "Advanced" },
            ],
        },
        {
            title: "Frontend",
            icon: <Monitor className="text-teal-400" size={20} />,
            color: "from-teal-500/10 to-emerald-500/15",
            skills: [
                { name: "React", level: "Advanced" },
                { name: "HTML5/CSS3", level: "Advanced" },
                { name: "Tailwind CSS", level: "Advanced" },
            ],
        },
        {
            title: "Databases",
            icon: <Database className="text-indigo-400" size={20} />,
            color: "from-indigo-500/10 to-blue-500/15",
            skills: [
                { name: "PostgreSQL", level: "Advanced" },
                { name: "MongoDB", level: "Advanced" },
            ],
        },
        {
            title: "Tools & OS",
            icon: <Wrench className="text-orange-400" size={20} />,
            color: "from-orange-500/10 to-yellow-500/15",
            skills: [
                { name: "Git & GitHub", level: "Advanced" },
                { name: "VS Code", level: "Advanced" },
                { name: "Azure Cloud", level: "Intermediate" },
                { name: "Jupyter / Colab", level: "Advanced" },
                { name: "Linux OS", level: "Advanced" },
                { name: "Windows", level: "Advanced" },
            ],
        },
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-background-alt/30 border-y border-white/[0.02]">
            {/* Decorative glows */}
            <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6" ref={containerRef}>

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl font-bold tracking-tight font-title"
                    >
                        Technical <span className="text-gradient">Skills</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "80px" } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"
                    />
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 25 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glow-card glass rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300"
                        >
                            {/* Category Title */}
                            <div className="flex items-center gap-3.5 pb-4 mb-5 border-b border-white/[0.05]">
                                <div className="p-2.5 rounded-xl bg-white/[0.03] dark:bg-black/[0.2] border border-white/[0.05] shadow-inner">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                            </div>

                            {/* Skill Badges */}
                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group relative px-3 py-1.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] dark:bg-neutral-900/50 dark:hover:bg-neutral-800/80 border border-white/[0.04] hover:border-purple-500/30 transition-all duration-200 cursor-default flex items-center justify-between gap-3 w-fit"
                                    >
                                        <span className="text-xs font-semibold text-foreground/80 group-hover:text-foreground">
                                            {skill.name}
                                        </span>
                                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20">
                                            {skill.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
