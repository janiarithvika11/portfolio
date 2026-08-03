"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const experiences = [
        {
            role: "Python Developer Intern",
            company: "Syncall Technologies",
            location: "Remote / Hybrid",
            duration: "Dec 2024 - Present", // Keep the timeline active and realistic
            description:
                "Developed backend services and deployed high-performance web applications using modern pythonic server stacks and cloud systems.",
            highlights: [
                "Developed scalable, high-performance backend microservices using Flask and MongoDB.",
                "Implemented secure REST APIs with token validation and role-based authentication.",
                "Orchestrated cloud deployment pipelines on Azure with performance monitoring.",
                "Optimized database queries and API response times, resulting in a 25% throughput improvement.",
            ],
        },
    ];

    return (
        <section id="experience" className="py-24 relative overflow-hidden bg-background">
            {/* Background decoration glows */}
            <div className="absolute top-[40%] left-[-10%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6" ref={containerRef}>

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl font-bold tracking-tight font-title"
                    >
                        Professional <span className="text-gradient">Experience</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "80px" } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"
                    />
                </div>

                {/* Timeline representation */}
                <div className="relative border-l border-white/10 dark:border-white/10 ml-4 md:ml-8 pl-8 md:pl-10 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.role}
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative"
                        >
                            {/* Timeline Indicator Node */}
                            <span className="absolute -left-[53px] md:-left-[61px] top-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-background border-2 border-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.3)] z-10">
                                <Briefcase className="text-purple-400" size={16} />
                            </span>

                            {/* Timeline Card */}
                            <div className="glow-card glass rounded-2xl p-6 md:p-8 hover:shadow-xl hover:shadow-purple-500/5 duration-300">

                                {/* Meta details */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground tracking-tight">
                                            {exp.role}
                                        </h3>
                                        <p className="text-sm font-semibold text-purple-400 mt-0.5">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-muted-foreground bg-white/[0.02] border border-white/[0.04] px-3.5 py-1.5 rounded-full w-fit">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={13} className="text-purple-500/70" />
                                            {exp.duration}
                                        </span>
                                        <span className="hidden sm:inline">|</span>
                                        <span className="flex items-center gap-1">
                                            <MapPin size={13} className="text-blue-500/70" />
                                            {exp.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Info Text */}
                                <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                                    {exp.description}
                                </p>

                                {/* Key Bullet Highlights */}
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                                        Key Highlights & Responsibilities
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {exp.highlights.map((highlight, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed"
                                            >
                                                <CheckCircle2 size={14} className="text-purple-500 shrink-0 mt-0.5" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
