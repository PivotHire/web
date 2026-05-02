"use client";

import { FaShieldAlt, FaRobot, FaFileContract, FaGlobeAmericas } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

const features = [
    {
        icon: FaShieldAlt,
        title: "Compliance Corridor",
        description: "We handle IP assignment, tax forms, payment routing, engineer screening, and classification review — so you don't have to.",
    },
    {
        icon: FaRobot,
        title: "Agent-Driven Delivery",
        description: "AI agents manage code review, timeline tracking, and client communication — eliminating project management overhead entirely.",
    },
    {
        icon: FaFileContract,
        title: "Engineering-Grade Contracts",
        description: "Contracts built for software work. Escrow-based payments, refund guarantees for poor outcomes, and clear IP chain for both sides.",
    },
    {
        icon: FaGlobeAmericas,
        title: "China–US Talent Pipeline",
        description: "Access China's top engineering talent — rigorously vetted in ML, AI, and software development — with full US-compliant legal and payment infrastructure.",
    },
];



export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                            Why PivotHire?
                        </h2>
                        <p className="mb-8 text-lg text-zinc-500">
                            Not another freelance platform. We&apos;re cross-border engineering infrastructure — compliance, delivery, and transparency built in from day one.
                        </p>

                        <motion.div
                            className="grid gap-6 sm:grid-cols-2"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {features.map((feature) => (
                                <motion.div
                                    key={feature.title}
                                    className="rounded-3xl glass-card p-8"
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
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
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
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
