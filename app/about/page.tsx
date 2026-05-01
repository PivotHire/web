"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
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
        title: "Focus on what matters",
        description: "Spend your time on product vision, customers, and growth — not managing developers or debugging deploys.",
    },
    {
        title: "From idea to product, fast",
        description: "Our AI-powered workflow matches your project with the right talent and manages delivery end-to-end.",
    },
    {
        title: "Built on trust and transparency",
        description: "Every deliverable is archived with immutable records. You always own your code, and you always know what's happening.",
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
            <section className="pt-32 pb-20 bg-zinc-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-6 inline-flex items-center rounded-full border border-[#242424]/10 bg-[#242424]/5 px-3 py-1 text-sm font-medium text-[#242424]">
                            About PivotHire
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-6 leading-tight">
                            Entrepreneurship should be about long term vision and goals.
                        </h1>
                        <p className="text-xl text-zinc-500 leading-relaxed">
                            Building software shouldn&apos;t slow you down. We exist so founders can stay focused on strategy, growth, and the problems only they can solve — while we turn their ideas into production-ready products.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Image + Mission */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-zinc-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885"
                                    alt="PivotHire team"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 -z-10 h-64 w-64 rounded-full bg-[#242424]/10 blur-3xl" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-6">
                                Our Mission
                            </h2>
                            <p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                                We believe the biggest barrier to innovation isn&apos;t ideas — it&apos;s execution. PivotHire removes that barrier by connecting ambitious founders with world-class engineering talent, powered by AI-driven matching and end-to-end project management.
                            </p>
                            <p className="text-lg text-zinc-500 leading-relaxed">
                                Our platform handles everything from talent vetting and IP protection to delivery coordination, so you can focus on building your business — not managing your dev team.
                            </p>
                        </motion.div>
                    </div>
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
                            What We Stand For
                        </h2>
                        <p className="text-lg text-zinc-500">
                            The principles that guide everything we build.
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
                                className="rounded-[20px] bg-white p-8"
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
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

            {/* CTA */}
            <section className="py-24 bg-zinc-50">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
                            Ready to Build Something Great?
                        </h2>
                        <p className="text-lg text-zinc-500 mb-8 max-w-xl mx-auto">
                            Tell us about your project and we&apos;ll match you with the right team.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://app.pivothire.tech"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-sm font-medium text-white transition-opacity hover:opacity-80"
                            >
                                Get Started
                            </a>
                            <a
                                href="mailto:core@pivothire.tech"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-50"
                            >
                                Contact Us
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <div className="bg-white pt-4">
                <div className="bg-[#242424] text-white rounded-t-[2.5rem] mx-4 lg:mx-8">
                    <div className="pt-8">
                        <Footer />
                    </div>
                </div>
            </div>
        </main>
    );
}
