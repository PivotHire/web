"use client";

import { FaRobot, FaCheckCircle, FaVoteYea, FaGlobe } from "react-icons/fa";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const features = [
    {
        icon: FaRobot,
        title: "Intelligent Central AI Agent",
        description: "Our AI agent analyzes project requirements and team capabilities to ensure optimal, data-driven pairings for successful delivery.",
    },
    {
        icon: FaCheckCircle,
        title: "Verified & Vetted Ecosystem",
        description: "We conduct rigorous legal verification for clients and multi-stage skill assessments for our delivery partners, creating a high-trust marketplace.",
    },
    {
        icon: FaVoteYea,
        title: "Ironclad IP Protection",
        description: "The platform manages binding legal agreements for immutable records, safeguarding your intellectual property.",
    },
    {
        icon: FaGlobe,
        title: "Borderless Collaboration",
        description: "Our platform is built for versatility, enabling seamless, project-based work across any industry, role, or region to power global innovation.",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                            Why PivotHire?
                        </h2>
                        <p className="mb-8 text-lg text-zinc-500">
                            We deliver more than just code. We provide a partnership that guarantees quality, transparency, and results.
                        </p>

                        <motion.div
                            className="grid gap-6 sm:grid-cols-2"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {features.map((feature) => (
                                <motion.div
                                    key={feature.title}
                                    className="rounded-3xl border border-zinc-200 bg-zinc-50/50 p-8 transition-colors hover:bg-zinc-100"
                                    variants={cardVariants}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <feature.icon className="h-8 w-8 text-black mb-4" />
                                    <h3 className="font-semibold text-lg text-zinc-900 mb-2">{feature.title}</h3>
                                    <p className="text-sm text-zinc-500">{feature.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <div className="h-48 w-full rounded-2xl bg-zinc-200 relative overflow-hidden">
                                    <Image src="https://images.unsplash.com/photo-1717501218636-a390f9ac5957" alt="Team collaboration" fill className="object-cover" />
                                </div>
                                <div className="h-64 w-full rounded-2xl bg-zinc-300 relative overflow-hidden">
                                    <Image src="https://images.unsplash.com/photo-1688380692117-63178554d76d" alt="Modern workspace" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-64 w-full rounded-2xl bg-zinc-300 relative overflow-hidden">
                                    <Image src="https://images.unsplash.com/photo-1543269865-cbf427effbad" alt="Diverse team" fill className="object-cover" />
                                </div>
                                <div className="h-48 w-full rounded-2xl bg-zinc-200 relative overflow-hidden">
                                    <Image src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2" alt="Global collaboration" fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
