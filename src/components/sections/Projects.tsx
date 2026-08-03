"use client";

import React, { useState, useMemo } from "react";
import {
    Search,
    ExternalLink,
    Info,
    X,
    Check,
    Laptop,
    ShieldCheck,
    Cpu,
    Code,
    FileText,
    GraduationCap,
    Brain,
    Wallet,
    Globe,
    Calendar,
    Flame,
    Layers
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
    id: string;
    title: string;
    category: "full-stack" | "ml" | "educational" | "frontend";
    categoryLabel: string;
    status: "Completed" | "Ongoing" | "Beta";
    description: string;
    longDescription?: string;
    features: string[];
    tech: string[];
    demoUrl: string;
    githubUrl: string;
    icon: React.ReactNode;

    // Expanded Metadata
    heroImage: string;
    architecture: string;
    timeline: string;
    challenges: string;
    learningOutcomes: string;
    futureScope: string;
    screenshots: string[];
}

export default function Projects() {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
    const [activeTab, setActiveTab] = useState<"overview" | "features" | "engineering" | "gallery">("overview");

    const projects: Project[] = [
        {
            id: "ai-platform",
            title: "AI Software Engineering Platform",
            category: "full-stack",
            categoryLabel: "Full Stack / AI Agents",
            status: "Ongoing",
            icon: <Cpu className="text-purple-400" size={24} />,
            description: "Enterprise-grade AI software engineering platform automating development workflows using autonomous team-based AI agents.",
            longDescription: "This advanced orchestrator channels specialized LLM agents (Architect, QA Tester, System Administrator) concurrently to code, debug, document, and test Next.js / Python architectures. Utilizes vector indexes as dynamic memory logs.",
            features: [
                "Agentic AI multi-agent orchestration model",
                "RAG database context parsing for complex file mapping",
                "Automated Jest and Jest-like QA testing pipelines",
                "Self-healing syntax loops checking compiler returns",
            ],
            tech: ["Spring Boot", "FastAPI", "React", "PostgreSQL", "LangChain", "Vector DB"],
            demoUrl: "#contact",
            githubUrl: "https://github.com/janiarithvika11/portfolio",
            heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
            architecture: "Next.js UI connecting to FastAPI agent nodes via local WebSocket gateways. Context retrieval is backed by active Pinecone vector registers.",
            timeline: "Jan 2026 - Present",
            challenges: "Preserving agent contexts across complex loops, avoiding token execution jams during asynchronous tester feedback cycles.",
            learningOutcomes: "Understood standard LLM tooling, LangGraph designs, and managing context limits using custom compression pipelines.",
            futureScope: "Incorporate self-healing pull request checks directly on remote GitHub actions.",
            screenshots: [
                "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
            ]
        },
        {
            id: "workflow-automation",
            title: "Enterprise Workflow Automation Platform",
            category: "full-stack",
            categoryLabel: "Full Stack / Enterprise",
            status: "Completed",
            icon: <Laptop className="text-blue-400" size={24} />,
            description: "Highly scalable workflow orchestrator allowing teams to design, trigger, and audit visual automated business processes.",
            longDescription: "A fully realized pipeline processor empowering system admins to construct nested trigger-action rules, manage webhook triggers, audit system access tokens, and analyze throughput charts via a premium administrative control dashboard.",
            features: [
                "Visual interactive trigger-node flow builder",
                "Granular Audit Logs with administrative details",
                "Role-Based Access Controls (RBAC) with JWT auth",
                "Automated external integrations (Gmail/SMS/Webhooks)",
            ],
            tech: ["Java", "Spring Boot", "React", "MongoDB", "JWT", "Tailwind CSS"],
            demoUrl: "#contact",
            githubUrl: "https://github.com/janiarithvika11/Enterprise_workflow",
            heroImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop",
            architecture: "Java Spring Boot microservices backed by MongoDB, secured with custom JWT request interceptors, and configured for active CORS clearance.",
            timeline: "Nov 2025 - Dec 2025",
            challenges: "Designing reliable asynchronous transaction states that do not block the active thread pool during network request fallouts.",
            learningOutcomes: "Learned Java concurrency designs, complex MongoDB aggregation frameworks, and security specs compliance.",
            futureScope: "Implement graphical flowchart editor using React Flow libraries for better ergonomics.",
            screenshots: [
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
            ]
        },
        {
            id: "phishing-detector",
            title: "AI Powered Phishing Email Detection",
            category: "ml",
            categoryLabel: "Machine Learning / Security",
            status: "Completed",
            icon: <ShieldCheck className="text-pink-400" size={24} />,
            description: "Chrome extension running real-time NLP classification models directly on client inbox data fetched via external mail integrations.",
            longDescription: "An end-to-end security plugin designed to parse client-side Gmail headers, identify raw URL structures, cross-reference metadata, and feed text vectors to local classification modules. Warns the student/professional instantly on detecting anomalies.",
            features: [
                "Real-time DOM structural parsing inside browser scripts",
                "Low-latency classification pipelines running on NLP",
                "Comprehensive warnings overlays with confidence indicators",
                "Background sync protocols keeping threats feeds up-to-date",
            ],
            tech: ["Python", "Scikit Learn", "NLP", "Gmail API", "Chrome API", "React"],
            demoUrl: "#contact",
            githubUrl: "https://github.com/janiarithvika11/spam_email_classification",
            heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
            architecture: "Chrome extension content scripts parsing text tokens, forwarding payloads to Scikit-model Flask endpoints for classification.",
            timeline: "Sep 2025 - Oct 2025",
            challenges: "Minimizing inference latency inside extension background threads while scanning heavy dynamic inboxes.",
            learningOutcomes: "Gained structural understanding of browser manifest configurations, DOM observer APIs, and NLP token serialization.",
            futureScope: "Support local client-side WebAssembly inference to remove server reliance completely.",
            screenshots: [
                "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop"
            ]
        },
        {
            id: "dsa-visualizer",
            title: "Interactive DSA Visualizer",
            category: "educational",
            categoryLabel: "Educational / Algorithms",
            status: "Completed",
            icon: <Code className="text-emerald-400" size={24} />,
            description: "An interactive educational platform that visualizes fundamental data structures and algorithms through real-time animations.",
            longDescription: "A frontend dashboard demonstrating sorting, graph routing, and tree operations. Users step forward or backward dynamically to explore stack indices, partition zones, and weight updates visually.",
            features: [
                "Interactive graphs, dynamic linked lists, and tree matrices",
                "Step-by-step backtrack traversal controls",
                "Dynamic code window emphasizing executing code lines",
                "Complexity logs updating dynamically with inputs",
            ],
            tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "D3.js"],
            demoUrl: "#contact",
            githubUrl: "https://github.com/janiarithvika11/portfolio",
            heroImage: "https://images.unsplash.com/photo-1516116211223-5c359a36298a?q=80&w=600&auto=format&fit=crop",
            architecture: "React state orchestration mapping array and node indices directly to D3.js coordinates using React-friendly SVG bindings.",
            timeline: "Jul 2025 - Aug 2025",
            challenges: "Coordinating nested setTimeout loops during complex algorithm recursions to support seamless pause and rewind clicks.",
            learningOutcomes: "Deepened knowledge of state mutations, DOM layouts, D3 node calculations, and mathematical graph rules.",
            futureScope: "Provide visual execution trees for custom JavaScript input codes.",
            screenshots: [
                "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=600&auto=format&fit=crop"
            ]
        },
        {
            id: "ats-checker",
            title: "AI Resume Analyzer & ATS Score Checker",
            category: "ml",
            categoryLabel: "Generative AI / Career Tech",
            status: "Completed",
            icon: <FileText className="text-amber-400" size={24} />,
            description: "An AI-powered platform that analyzes resumes against job descriptions, predicts ATS scores, and generates optimized suggestion cards.",
            longDescription: "A job seeker tool leveraging LangChain and OpenAI vectors to perform semantic correlation matches. Parses PDF structures, maps missing skills, compiles gap details, and designs tailored templates.",
            features: [
                "Parsing PDF data extracting core profile sections",
                "Similarity scoring mapping profile compatibility",
                "Context-aware cover letters and response generation",
                "Custom interview flashcards reflecting resume targets",
            ],
            tech: ["Python", "FastAPI", "React", "PostgreSQL", "OpenAI API", "RAG"],
            demoUrl: "#contact",
            githubUrl: "https://github.com/janiarithvika11/portfolio",
            heroImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop",
            architecture: "FastAPI REST handles parsing uploads, loading OpenAI API context feeds, and logging match logs inside a PostgreSQL index.",
            timeline: "May 2025 - Jun 2025",
            challenges: "Extracting readable data structures from heavily nested layout elements, multiple-columns templates, or raw scanning layouts.",
            learningOutcomes: "Mastered building clean RAG architectures, handling embeddings, and using vector cosine similarity maps.",
            futureScope: "Integrate automatic web spiders syncing requirements directly from active job URLs.",
            screenshots: [
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
            ]
        },
        {
            id: "campus-management",
            title: "Smart Campus Management System",
            category: "full-stack",
            categoryLabel: "Full Stack / College Web",
            status: "Completed",
            icon: <GraduationCap className="text-violet-400" size={24} />,
            description: "A complete campus management platform for students, faculty, and administrators with role-based access control.",
            longDescription: "An administrative tool managing classes, recording attendance, calculating marks averages, submitting homework deliverables, and dispatching announcements to student dashboards securely.",
            features: [
                "Role-based dashboards for Student / Faculty / Admin",
                "Attendance rosters with monthly calculation charts",
                "Interactive boards mapping timetable rosters and leaves",
                "Real-time notifications sent via REST notification triggers",
            ],
            tech: ["Spring Boot", "React", "MySQL", "JWT", "REST APIs"],
            demoUrl: "#contact",
            githubUrl: "https://github.com/janiarithvika11/portfolio",
            heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop",
            architecture: "Spring Boot JPA architecture mapping queries to a MySQL relational index with JWT validation filters.",
            timeline: "Mar 2025 - Apr 2025",
            challenges: "Structuring conflict-free timetable grids avoiding scheduler overlaps across professors and rooms.",
            learningOutcomes: "Understood data relations, custom JPA hooks, database index optimization, and security design specs.",
            futureScope: "Implement dynamic barcode/face scanning to record classroom entrance timestamps.",
            screenshots: [
                "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop"
            ]
        },
        {
            id: "medical-chatbot",
            title: "AI Medical Diagnosis Chatbot",
            category: "ml",
            categoryLabel: "Machine Learning / Health Tech",
            status: "Completed",
            icon: <Brain className="text-rose-400" size={24} />,
            description: "An intelligent healthcare chatbot that predicts diseases based on symptoms and provides preliminary medical guidance.",
            longDescription: "A patient-facing diagnostic gateway. Runs classification algorithms locally, parses user descriptive symptoms, assigns threat tags, and exports guidance recommendations.",
            features: [
                "Descriptive symptoms parsing using NLP models",
                "Disease probability prediction based on multi-variate logs",
                "Historical record indexes log for doctor handoff review",
                "Clean chat layouts with quick-feedback tags",
            ],
            tech: ["Python", "Flask", "Machine Learning", "NLP", "MySQL"],
            demoUrl: "#contact",
            githubUrl: "https://github.com/janiarithvika11/portfolio",
            heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
            architecture: "Flask server housing serialized Random Forest / Naive Bayes templates mapping user symptom data directly to MySQL tables.",
            timeline: "Jan 2025 - Feb 2025",
            challenges: "Fine-tuning classification weight thresholds to avoid displaying critical health predictions without sufficient inputs.",
            learningOutcomes: "Understood model weights, tokenization, text normalization, and integrating backend Python templates.",
            futureScope: "Support direct calendar hook-ups sync with local doctors.",
            screenshots: [
                "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop"
            ]
        },
        {
            id: "finance-tracker",
            title: "Personal Finance Tracker",
            category: "full-stack",
            categoryLabel: "Full Stack / FinTech",
            status: "Completed",
            icon: <Wallet className="text-cyan-400" size={24} />,
            description: "A personal finance management application that helps users monitor income, expenses, budgets, and savings goals.",
            longDescription: "A secure personal accounting system. Users submit transactions, filter expenses by category, configure monthly allocations targets, and parse cash-flow distributions.",
            features: [
                "Detailed transaction categorization ledger logs",
                "Savings goal thresholds trackers with progress counters",
                "Dynamic interactive charts displaying monthly trends",
                "Secured login pages using session hashes",
            ],
            tech: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
            demoUrl: "#contact",
            githubUrl: "https://github.com/janiarithvika11/portfolio",
            heroImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop",
            architecture: "MERN Stack (MongoDB, Express, React, Node.js) with dynamic Chart.js SVG templates on client bindings.",
            timeline: "Nov 2024 - Dec 2024",
            challenges: "Constructing reactive aggregation pipelines on MongoDB collections that don't bottleneck client-side loading speeds.",
            learningOutcomes: "Developed solid database management skills, Chart rendering cycles, and REST schema designs.",
            futureScope: "Integrate banking API connections for automatic transaction sync.",
            screenshots: [
                "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop"
            ]
        },
        {
            id: "dev-portfolio",
            title: "Developer Portfolio Website",
            category: "frontend",
            categoryLabel: "Frontend / Creative",
            status: "Completed",
            icon: <Globe className="text-teal-400" size={24} />,
            description: "A premium animated developer portfolio showcasing projects, experience, skills, achievements, and custom interactive assets.",
            longDescription: "This exact portfolio! Built with dynamic 3D elements, dark/light toggle options, a lagging custom cursor, mobile menu systems, and EmailJS connection configurations.",
            features: [
                "Interactive orbital 3D Globe rendered using Three.js points",
                "Lagging cursor tracking with custom local color themes",
                "Secure contact triggers with double confetti bursts",
                "Responsive Next.js components rendering with server optimizations",
            ],
            tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Three.js"],
            demoUrl: "#",
            githubUrl: "https://github.com/janiarithvika11/portfolio",
            heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
            architecture: "Next.js 16 App Router using dynamic client imports, custom contexts for theme status, and Framer Motion layouts.",
            timeline: "Jul 2026 - Aug 2026",
            challenges: "Structuring the Three.js point cloud globe so that it rescales fluidly on mobile viewports without crashing performance.",
            learningOutcomes: "Understood React Three Fiber, React context trees, and optimizing build compilation bundles.",
            futureScope: "Integrate a real-time web terminal for direct sandbox shell tests.",
            screenshots: [
                "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=600&auto=format&fit=crop"
            ]
        }
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

    const handleOpenModal = (project: Project) => {
        setActiveProjectModal(project);
        setActiveTab("overview");
    };

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
                            { id: "educational", label: "Edu & Lists" },
                            { id: "frontend", label: "Frontend" },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setSelectedCategory(tab.id)}
                                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all cursor-pointer ${selectedCategory === tab.id
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
                            className="w-full pl-10 pr-4 py-2.5 text-xs font-medium bg-white/[0.02] border border-white/5 focus:border-purple-500/50 focus:bg-white/[0.04] outline-none text-foreground placeholder:text-muted-foreground rounded-xl transition-all"
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
                                className="glow-card glass rounded-2xl flex flex-col justify-between overflow-hidden hover:translate-y-[-4px] transition-transform duration-300 group"
                            >
                                {/* Hero Image Header */}
                                <div className="relative h-44 w-full overflow-hidden border-b border-white/[0.04]">
                                    <img
                                        src={project.heroImage}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                    {/* Small floating icon and Category Tag */}
                                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                                        <div className="p-2.5 rounded-lg bg-black/60 backdrop-blur border border-white/10 text-white">
                                            {project.icon}
                                        </div>
                                        <div>
                                            <span className="text-[9px] uppercase font-bold text-white tracking-widest block drop-shadow-md">
                                                {project.categoryLabel}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Small floating Status */}
                                    <span
                                        className={`absolute top-4 right-4 text-[9px] font-bold px-2 py-0.5 rounded-full border shadow-md ${project.status === "Completed"
                                            ? "bg-emerald-500/80 border-emerald-500/25 text-white"
                                            : "bg-purple-500/80 border-purple-500/25 text-white"
                                            }`}
                                    >
                                        {project.status}
                                    </span>
                                </div>

                                {/* Body Info */}
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-base font-bold text-foreground mb-3 leading-snug tracking-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech stack row */}
                                    <div className="flex flex-wrap gap-1.5 mt-5">
                                        {project.tech.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-[9px] font-medium px-2 py-0.5 rounded-lg bg-white/[0.03] text-muted-foreground border border-white/[0.04]"
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
                                </div>

                                {/* Actions Area */}
                                <div className="px-6 py-4 bg-white/[0.02] border-t border-white/[0.04] flex items-center justify-between gap-3">
                                    <button
                                        onClick={() => handleOpenModal(project)}
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
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <svg className="w-4 h-4 text-neutral-400 hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                        <a
                                            href={project.demoUrl}
                                            className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                                            aria-label="Live Demo Link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink size={15} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
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
                            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
                        />

                        {/* Modal Body (Widescreen) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                            className="relative w-full max-w-3xl glass rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/10 flex flex-col h-[85vh] max-h-[700px]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setActiveProjectModal(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 border border-white/10 text-muted-foreground hover:text-white hover:bg-black/85 transition-all cursor-pointer z-20"
                            >
                                <X size={15} />
                            </button>

                            {/* Header Media panel */}
                            <div className="relative h-44 w-full shrink-0">
                                <img
                                    src={activeProjectModal.heroImage}
                                    alt={activeProjectModal.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-alt via-background-alt/50 to-transparent" />

                                {/* Info inside banner */}
                                <div className="absolute bottom-4 left-6 md:left-8 flex items-center gap-3">
                                    <div className="p-3 rounded-2xl bg-black/60 backdrop-blur border border-white/15 text-white">
                                        {activeProjectModal.icon}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest bg-purple-500/10 border border-purple-500/25 px-2 py-0.5 rounded">
                                                {activeProjectModal.status}
                                            </span>
                                            <span className="text-[10px] font-medium text-white/70 flex items-center gap-1">
                                                <Calendar size={11} className="text-purple-400" />
                                                {activeProjectModal.timeline}
                                            </span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mt-1.5 tracking-tight font-title">
                                            {activeProjectModal.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Spec dashboard navigation tabs */}
                            <div className="px-6 md:px-8 border-y border-white/[0.06] bg-black/[0.15] shrink-0 flex items-center gap-1 md:gap-2 py-2 overflow-x-auto overflow-y-hidden custom-scrollbar">
                                {[
                                    { id: "overview", label: "Overview" },
                                    { id: "features", label: "Features & Tech" },
                                    { id: "engineering", label: "Insights" },
                                    { id: "gallery", label: "Gallery" }
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as any)}
                                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg tracking-wide transition-all relative shrink-0 cursor-pointer ${activeTab === tab.id
                                                ? "text-white"
                                                : "text-muted-foreground hover:text-foreground"
                                            }`}
                                    >
                                        {tab.label}
                                        {activeTab === tab.id && (
                                            <motion.div
                                                layoutId="selectedModalTab"
                                                className="absolute inset-0 bg-white/5 border border-white/10 rounded-lg -z-10"
                                                transition={{ duration: 0.2 }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Scrolling content panel */}
                            <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.15 }}
                                        className="h-full"
                                    >
                                        {/* Overview Panel */}
                                        {activeTab === "overview" && (
                                            <div className="space-y-6">
                                                <div>
                                                    <h4 className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-2">Category</h4>
                                                    <p className="text-sm font-semibold text-foreground/80">{activeProjectModal.categoryLabel}</p>
                                                </div>
                                                <div>
                                                    <h4 className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-2">Description</h4>
                                                    <p className="text-sm text-foreground/80 leading-relaxed font-light">
                                                        {activeProjectModal.longDescription || activeProjectModal.description}
                                                    </p>
                                                </div>
                                                {/* Summary card */}
                                                <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 flex items-start gap-3">
                                                    <Layers size={18} className="text-purple-400 shrink-0 mt-0.5" />
                                                    <div>
                                                        <h5 className="text-xs font-bold text-foreground">Project Highlight</h5>
                                                        <p className="text-xs text-muted-foreground mt-0.5 font-light">
                                                            This systems architecture is engineered with optimized client rendering, low-latency API states, and structured backend handlers.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Features & Tech Panel */}
                                        {activeTab === "features" && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                {/* Left column: feature list */}
                                                <div>
                                                    <h4 className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-4">Core Specifications</h4>
                                                    <ul className="space-y-3">
                                                        {activeProjectModal.features.map((feature, idx) => (
                                                            <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/80 leading-relaxed">
                                                                <span className="flex h-4' w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5 p-0.5">
                                                                    <Check size={8} />
                                                                </span>
                                                                <span>{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Right column: tech labels */}
                                                <div>
                                                    <h4 className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-4">Technologies Deployed</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {activeProjectModal.tech.map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className="text-xs font-semibold px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.04] text-muted-foreground shadow-sm flex items-center gap-1.5"
                                                            >
                                                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Insights Panel */}
                                        {activeTab === "engineering" && (
                                            <div className="space-y-6">
                                                {/* Architecture definition */}
                                                <div>
                                                    <h4 className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-2">Systems Architecture</h4>
                                                    <div className="p-3.5 rounded-xl bg-white/[0.01] border border-white/5 font-mono text-[10px] text-purple-300 leading-normal">
                                                        {activeProjectModal.architecture}
                                                    </div>
                                                </div>

                                                {/* Half & Half: Challenges vs Takeaways */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                    {/* Challenges card */}
                                                    <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/10">
                                                        <h5 className="text-xs font-bold text-rose-400 flex items-center gap-1">
                                                            <Flame size={12} />
                                                            Challenges Faced
                                                        </h5>
                                                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-light">
                                                            {activeProjectModal.challenges}
                                                        </p>
                                                    </div>

                                                    {/* Learning Outcomes card */}
                                                    <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                                                        <h5 className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                                                            <Check size={12} />
                                                            Learning Outcomes
                                                        </h5>
                                                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-light">
                                                            {activeProjectModal.learningOutcomes}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Future Scope */}
                                                <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                                                    <h5 className="text-xs font-bold text-blue-400">Future Scope & Advancements</h5>
                                                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed font-light">
                                                        {activeProjectModal.futureScope}
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Gallery Screen panel */}
                                        {activeTab === "gallery" && (
                                            <div className="space-y-4">
                                                <h4 className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-2">Project Media Gallery</h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    {activeProjectModal.screenshots.map((screen, idx) => (
                                                        <div key={idx} className="relative aspect-video rounded-xl overflow-hidden border border-white/5 bg-neutral-900/50">
                                                            <img
                                                                src={screen}
                                                                alt={`${activeProjectModal.title} interface preview ${idx}`}
                                                                className="w-full h-full object-cover"
                                                            />
                                                            <span className="absolute bottom-2 right-2 text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/75 border border-white/5 text-white/80">
                                                                Preview {idx + 1}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Footer links */}
                            <div className="px-6 md:px-8 py-5 border-t border-white/[0.06] bg-black/[0.1] shrink-0 flex flex-col sm:flex-row gap-3">
                                <a
                                    href={activeProjectModal.demoUrl}
                                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold text-xs shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink size={13} />
                                    Launch Live Demo
                                </a>
                                <a
                                    href={activeProjectModal.githubUrl}
                                    className="flex-1 py-2.5 rounded-xl glass border border-white/5 text-foreground font-bold text-xs hover:bg-neutral-800/10 dark:hover:bg-white/5 hover:scale-[1.01] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    Inspect Repository
                                </a>
                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </section>
    );
}
