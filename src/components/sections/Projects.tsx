"use client";

import React, { useState, useMemo } from "react";
import { Search, ExternalLink, Info, X, Check, Laptop, ShieldCheck, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
    id: string;
    title: string;
    category: "full-stack" | "ml" | "chrome-ext";
    categoryLabel: string;
    status: "Completed" | "Ongoing" | "Beta";
    description: string;
    features: string[];
    tech: string[];
    demoUrl: string;
    githubUrl: string;
    longDescription?: string;
    icon: React.ReactNode;
};

export default function Projects() {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            id: "ai-platform",
            title: "AI Software Engineering Platform",
            category: "full-stack",
            categoryLabel: "Full Stack / AI Agents",
            status: "Ongoing",
            icon: <Cpu className="text-purple-400" size={24} />,
            description:
                "Enterprise-grade AI software engineering platform automating development workflows using autonomous team-based AI agents.",
            longDescription:
                "This platform orchestrates a team of specialized AI agents (Architect, Programmer, QA Tester, Documenter) working concurrently to generate, test, and document production-ready code. Utilizes vector databases for long-term memory and retrieval systems.",
            features: [
                "Agentic AI multi-agent orchestration",
                "RAG (Retrieval Augmented Generation) for codebase context mapping",
                "Automated unit testing and syntax checks",
                "Automated markdown technical documentation generator",
                "Real-time progress telemetry over WebSockets",
            ],
            tech: ["Spring Boot", "FastAPI", "React", "PostgreSQL", "LangChain", "Vector DB"],
            demoUrl: "#contact",
            githubUrl: "#contact",
        },
        {
            id: "workflow-automation",
            title: "Enterprise Workflow Automation Platform",
            category: "full-stack",
            categoryLabel: "Full Stack / Enterprise",
            status: "Completed",
            icon: <Laptop className="text-blue-400" size={24} />,
            description:
                "Highly scalable workflow orchestrator allowing teams to design, trigger, and audit visual automated business processes.",
            longDescription:
                "A robust process-management platform enabling corporate teams to build trigger-action style operations, configure complex event paths, view live telemetry logs, and analyze pipeline efficiency reports via a centralized administrative dashboard.",
            features: [
                "Interactive drag-and-drop workflow designer",
                "Real-time system telemetry and metrics reporting",
                "Custom template notification triggers (Email/SMS)",
                "Comprehensive RBAC (Role Based Access Control) and security compliance",
                "Secure microservices validation with JWT and OAuth2",
            ],
            tech: ["Java", "Spring Boot", "React", "MongoDB", "JWT", "Tailwind CSS"],
            demoUrl: "#contact",
            githubUrl: "https://github.com/janiarithvika11/Enterprise_workflow",
        },
        {
            id: "phishing-detector",
            title: "AI Powered Phishing Email Detection",
            category: "ml",
            categoryLabel: "Machine Learning / Security",
            status: "Completed",
            icon: <ShieldCheck className="text-pink-400" size={24} />,
            description:
                "Chrome extension running real-time NLP classification models directly on client inbox data fetched via external mail integrations.",
            longDescription:
                "Developed to scan incoming mail structure on page load, map headers, extract hypertexts, and pipe tokens to a locally cached machine learning prediction model. Warns users instantly with high-risk banners on identifying anomalies.",
            features: [
                "Real-time Gmail inbox document parser",
                "Low-latency text analysis using Machine Learning pipelines",
                "Custom Spam vs Phishing binary categorization systems",
                "Immediate high-priority threat alert banners and UI warnings",
                "Automated background model updates via Chrome extension services",
            ],
            tech: ["Python", "Scikit Learn", "NLP", "Gmail API", "Chrome API", "React"],
            demoUrl: "#contact",
            githubUrl: "https://github.com/janiarithvika11/spam_email_classification",
        },
    ];

    // Filtering Logic
    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
            const matchesSearch =
                project.title.toLowerCase().includes(search.toLowerCase()) ||
                project.description.toLowerCase().includes(search.toLowerCase()) ||
                project.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [search, selectedCategory]);

    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-background-alt/30 border-y border-white/[0.02]">
            {/* Decorative gradients */}
            <div className="absolute bottom-[10%] right-[-10%] w-[380px] h-[380px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl font-bold tracking-tight font-title"
                    >
                        Featured <span className="text-gradient">Projects</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"
                    />
                </div>

                {/* Filters dashboard bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">

                    {/* Category tabs */}
                    <div className="flex flex-wrap gap-2">
                        {[
                            { id: "all", label: "All Cases" },
                            { id: "full-stack", label: "Full Stack" },
                            { id: "ml", label: "AI & ML" },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setSelectedCategory(tab.id)}
                                className={`px-4.5 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all cursor-pointer ${selectedCategory === tab.id
                                    ? "bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-600/20"
                                    : "glass border-white/5 text-muted-foreground hover:text-foreground hover:bg-white/[0.03]"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Search box */}
                    <div className="relative w-full md:max-w-sm">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                            <Search size={15} />
                        </span>
                        <input
                            type="text"
                            placeholder="Search project by stack, name..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 text-xs font-medium bg-white/[0.02] border border-white/5 focus:border-purple-500/50 focus:bg-white/[0.04] outline-none text-foreground placeholder:text-muted-foreground rounded-xl transition-all"
                        />
                        {search && (
                            <button
                                onClick={() => setSearch("")}
                                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted-foreground hover:text-foreground cursor-pointer"
                            >
                                <X size={14} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="glow-card glass rounded-2xl flex flex-col justify-between overflow-hidden hover:translate-y-[-4px] transition-transform duration-300"
                            >
                                {/* Header Info */}
                                <div className="p-6 pb-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="p-2.5 rounded-xl bg-white/[0.03] dark:bg-black/[0.2] border border-white/[0.05]">
                                            {project.icon}
                                        </div>
                                        {/* Status Badge */}
                                        <span
                                            className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${project.status === "Completed"
                                                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                                                : "bg-purple-500/10 border-purple-500/20 text-purple-400"
                                                }`}
                                        >
                                            {project.status}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-foreground mb-1 leading-snug tracking-tight">
                                        {project.title}
                                    </h3>
                                    <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider">
                                        {project.categoryLabel}
                                    </span>

                                    <p className="mt-4 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Badges & Buttons Footer */}
                                <div>
                                    {/* Tech stack row */}
                                    <div className="px-6 py-2.5 flex flex-wrap gap-1.5 border-t border-white/[0.03] bg-white/[0.01]">
                                        {project.tech.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/[0.03] text-muted-foreground border border-white/[0.03]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 4 && (
                                            <span className="text-[9px] font-semibold text-muted-foreground/60 px-1 py-0.5">
                                                +{project.tech.length - 4} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Actions Area */}
                                    <div className="px-6 py-4.5 bg-white/[0.02] border-t border-white/[0.04] flex items-center justify-between gap-3">
                                        <button
                                            onClick={() => setActiveProjectModal(project)}
                                            className="cursor-pointer text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1.5 transition-colors"
                                        >
                                            <Info size={14} />
                                            Specs & Details
                                        </button>

                                        <div className="flex items-center gap-3">
                                            <a
                                                href={project.githubUrl}
                                                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                                aria-label="GitHub Repository"
                                            >
                                                <svg className="w-4 h-4 text-neutral-400" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                            <a
                                                href={project.demoUrl}
                                                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                                aria-label="Live Demo Link"
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty Search State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-sm text-muted-foreground font-medium">
                            No projects found matching current queries. Try modifying filters.
                        </p>
                    </div>
                )}

            </div>

            {/* Details modal overlay */}
            <AnimatePresence>
                {activeProjectModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Modal Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveProjectModal(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
                        />

                        {/* Modal Body */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-xl glass rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/10"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setActiveProjectModal(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all cursor-pointer z-10"
                            >
                                <X size={15} />
                            </button>

                            <div className="p-6 md:p-8">
                                {/* Heading */}
                                <div className="flex items-center gap-3.5 mb-5">
                                    <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                                        {activeProjectModal.icon}
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest bg-purple-500/5 border border-purple-500/10 px-2 py-0.5 rounded">
                                            {activeProjectModal.status}
                                        </span>
                                        <h3 className="text-2xl font-bold text-foreground mt-1.5 tracking-tight font-title">
                                            {activeProjectModal.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Subtitle */}
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                                    Overview & Engineering Highlights
                                </p>

                                {/* Description */}
                                <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                                    {activeProjectModal.longDescription || activeProjectModal.description}
                                </p>

                                {/* Key Features Bullet List */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                                        Core Specifications
                                    </h4>
                                    <ul className="space-y-2.5">
                                        {activeProjectModal.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-2.5 text-xs text-foreground/80">
                                                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 mt-0.5">
                                                    <Check size={10} />
                                                </span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Full Stack Tech Badges */}
                                <div className="mb-8">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground-alt/80 mb-3">
                                        Technologies Deployed
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {activeProjectModal.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-muted-foreground shadow-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* CTAs */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/[0.06]">
                                    <a
                                        href={activeProjectModal.demoUrl}
                                        className="flex-1 py-3 text-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold text-sm shadow-lg hover:gradient hover:scale-[1.01] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                                    >
                                        <ExternalLink size={14} />
                                        Launch Live Demo
                                    </a>
                                    <a
                                        href={activeProjectModal.githubUrl}
                                        className="flex-1 py-3 text-center rounded-full glass border border-white/5 font-semibold text-sm hover:bg-neutral-800/10 dark:hover:bg-white/5 hover:scale-[1.01] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                                    >
                                        <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        Inspect Repository
                                    </a>
                                </div>

                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </section>
    );
}
