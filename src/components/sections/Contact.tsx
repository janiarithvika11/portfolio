"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, FileText, Globe } from "lucide-react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";

export default function Contact() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const triggerConfetti = () => {
        const duration = 2.5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 100 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 40 * (timeLeft / duration);
            // Confetti burst from edges
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    };

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setIsSubmitting(true);
        setSubmitStatus("idle");

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_gnfsvgm";
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_3getrp8";
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "_PBlDKL_5wrnc_qjK";

        try {
            if (serviceId && templateId && publicKey) {
                // Real EmailJS Send API Call
                await emailjs.send(
                    serviceId,
                    templateId,
                    {
                        from_name: formData.name,
                        reply_to: formData.email,
                        message: formData.message,
                        to_email: "simmajaniarithvika@gmail.com",
                    },
                    publicKey
                );
            } else {
                // Safe dev fallback if keys are vacant
                await new Promise((resolve) => setTimeout(resolve, 1500));
            }

            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
            triggerConfetti();
        } catch (err) {
            console.error("EmailJS Error:", err);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-background-alt/30 border-t border-white/[0.02]">
            {/* Decorative glows */}
            <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[110px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 h-full" ref={containerRef}>

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl font-bold tracking-tight font-title"
                    >
                        Get In <span className="text-gradient">Touch</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "80px" } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

                    {/* Left Column: Info Text & Cards */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold text-foreground">
                                Let's discuss a new project or role.
                            </h3>
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                Have a question or want to work together? Drop a message in the contact form or download my CV below.
                                I'm active on major developer directories and respond promptly.
                            </p>

                            {/* Direct Mail Card */}
                            <div className="glow-card glass p-5 rounded-2xl flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                                        Email Direct
                                    </p>
                                    <a
                                        href="mailto:simmajaniarithvika@gmail.com"
                                        className="text-sm font-bold text-foreground hover:text-purple-400 transition-colors"
                                    >
                                        simmajaniarithvika@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Download CV Card */}
                            <div className="glow-card glass p-5 rounded-2xl flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                                    <FileText size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                                        Curriculum Vitae
                                    </p>
                                    <a
                                        href="https://drive.google.com/file/d/1UAoN9rB1ls6ptcGNttOfyooT1M_ngAuL/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-bold text-foreground hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
                                    >
                                        Download Resume PDF
                                    </a>
                                </div>
                            </div>

                        </motion.div>

                        {/* Bottom details */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 0.8 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="hidden lg:flex items-center gap-2 text-xs font-medium text-muted-foreground mt-8"
                        >
                            <Globe size={13} className="text-purple-500" />
                            <span>Available globally for remote developer engagements.</span>
                        </motion.div>
                    </div>

                    {/* Right Column: Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="lg:col-span-7"
                    >
                        <div className="glow-card glass p-6 sm:p-8 rounded-3xl h-full border border-white/5 relative">
                            <form ref={formRef} onSubmit={handleSend} className="space-y-5">

                                {/* Name */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 focus:border-purple-500/40 outline-none text-sm text-foreground transition-all"
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 focus:border-purple-500/40 outline-none text-sm text-foreground transition-all"
                                    />
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your product designs or internship details..."
                                        className="w-full px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 focus:border-purple-500/40 outline-none text-sm text-foreground transition-all resize-none"
                                    />
                                </div>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold text-sm shadow-lg hover:shadow-purple-500/10 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <Send size={15} />
                                            Send Secure Message
                                        </>
                                    )}
                                </button>

                                {/* Success/Error Alerts */}
                                {submitStatus === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4.5 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-medium flex items-center gap-2.5"
                                    >
                                        <CheckCircle2 size={16} className="shrink-0" />
                                        <span>Your message has been sent successfully! I will reply shortly.</span>
                                    </motion.div>
                                )}

                                {submitStatus === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4.5 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 text-xs font-medium flex items-center gap-2.5"
                                    >
                                        <AlertCircle size={16} className="shrink-0" />
                                        <span>Failed to transmit metadata. Please contact direct email instead.</span>
                                    </motion.div>
                                )}

                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
