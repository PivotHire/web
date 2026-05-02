"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const values = [
    {
        title: "Compliance, not checklists",
        description: "IP assignment, tax forms, payment routing, screening, and classification — we handle the legal infrastructure so you can focus on shipping.",
    },
    {
        title: "Agents, not managers",
        description: "AI agents handle code review, timeline tracking, and communication with non-technical stakeholders. No PM overhead.",
    },
    {
        title: "Contracts built for engineering",
        description: "Escrow-based payments, refund guarantees for poor outcomes, and a clear IP chain that protects both clients and engineers.",
    },
];

const stats = [
    { value: "30+", label: "Engineers Worldwide" },
    { value: "10+", label: "Projects Delivered" },
    { value: "5+", label: "Countries" },
    { value: "100%", label: "Client Satisfaction" },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white font-sans selection:bg-[#242424] selection:text-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-44 pb-36 bg-zinc-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-8 leading-tight">
                            Not another freelance platform.
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto">
                            PivotHire is cross-border engineering infrastructure. We connect China&apos;s top software talent with US companies — and handle the compliance, payments, IP, and project delivery so neither side has to.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Image + Mission */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="grid gap-16 lg:grid-cols-2 lg:items-center"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { 
                                opacity: 1, 
                                y: 0, 
                                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 } 
                            }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="relative">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-zinc-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885"
                                    alt="PivotHire team"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 -z-10 h-64 w-64 rounded-full bg-[#242424]/10 blur-3xl" />
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-6">
                                The Problem We Solve
                            </h2>
                            <p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                                China has one of the world&apos;s largest and most capable engineering workforces — but US companies rarely tap into it. Communication concerns, legal complexity, and compliance overhead keep both sides apart.
                            </p>
                            <p className="text-lg text-zinc-500 leading-relaxed">
                                PivotHire is the infrastructure layer that bridges the gap. We handle IP assignment, tax compliance, payment routing, engineer vetting, and AI-driven project delivery — so US clients get top talent at lower cost, and Chinese engineers get access to global opportunities.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-zinc-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-2xl mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
                            How We&apos;re Different
                        </h2>
                        <p className="text-lg text-zinc-500">
                            We don&apos;t just match talent — we own the infrastructure that makes cross-border engineering work.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid gap-6 md:grid-cols-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {values.map((value) => (
                            <motion.div
                                key={value.title}
                                className="rounded-[20px] glass-card p-8 flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                                variants={itemVariants}
                            >
                                <FaCheckCircle className="h-6 w-6 text-[#242424] mb-4" />
                                <h3 className="text-lg font-bold text-zinc-900 mb-3">{value.title}</h3>
                                <p className="text-sm text-zinc-500 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                    >
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <div className="text-4xl font-bold text-zinc-900 mb-2">{stat.value}</div>
                                <div className="text-sm text-zinc-500">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA + Footer */}
            <div className="bg-white pt-4">
                <div className="bg-[#242424] text-white rounded-t-[2.5rem] mx-4 lg:mx-8">
                    <section className="container mx-auto px-4 py-20 text-center">
                        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl mb-6">
                            Let&apos;s Create Your Ideal Software Solution
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://app.pivothire.tech"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black transition-opacity hover:opacity-90"
                            >
                                Get Started
                            </a>
                            <a
                                href="mailto:core@pivothire.tech"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-700 bg-transparent px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-900"
                            >
                                Contact Us
                            </a>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        </main>
    );
}
