"use client";

import { FaCode, FaServer, FaMobileAlt, FaPenNib, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, premiumEasing } from "@/lib/animations";

const services = [
    {
        icon: FaCode,
        title: "Frontend",
        description: "Pixel-perfect interfaces with modern frameworks and responsive design.",
        tags: ["React", "Next.js", "Vue", "Tailwind"],
    },
    {
        icon: FaServer,
        title: "Backend",
        description: "Scalable APIs, microservices, and cloud infrastructure built for performance.",
        tags: ["Node.js", "Python", "Go", "AWS"],
    },
    {
        icon: FaMobileAlt,
        title: "Mobile",
        description: "Native and cross-platform apps for iOS and Android with seamless UX.",
        tags: ["Swift", "Kotlin", "Flutter", "React Native"],
    },
    {
        icon: FaPenNib,
        title: "Design",
        description: "Beautiful UI/UX design, brand identity, and motion graphics that elevate your product.",
        tags: ["Figma", "UI/UX", "Branding", "Motion"],
    },
];



export default function Services() {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative">
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
                            Services Tailored to You
                        </h2>
                        <p className="text-lg text-zinc-500">
                            We offer a comprehensive suite of software development services designed to help you achieve your business goals.
                        </p>
                    </div>
                    <a
                        href="https://app.pivothire.tech"
                        className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100"
                    >
                        View All Services <FaArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </motion.div>

                <motion.div
                    className="hidden lg:grid lg:grid-cols-4 gap-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service) => (
                        <motion.a
                            key={service.title}
                            href="https://app.pivothire.tech"
                            className="group rounded-[20px] glass-card p-8 flex flex-col"
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shrink-0">
                                    <service.icon className="h-5 w-5 text-zinc-900" />
                                </div>
                                <h3 className="text-lg font-bold text-zinc-900">
                                    {service.title}
                                </h3>
                            </div>
                            <p className="text-sm text-zinc-500 leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <div className="mt-auto flex items-center gap-2 text-sm font-medium text-zinc-900 group-hover:gap-3 transition-all duration-300">
                                Read more <FaArrowRight className="h-3 w-3" />
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div
                    className="flex flex-col gap-4 lg:hidden"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {services.map((service) => (
                        <motion.a
                            key={service.title}
                            href="https://app.pivothire.tech"
                            className="rounded-[20px] glass-card p-7 flex flex-col"
                            variants={fadeInUp}
                        >
                            <service.icon className="h-7 w-7 mb-3 text-zinc-900" />
                            <h3 className="text-lg font-bold mb-2 text-zinc-900">{service.title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed mb-4">{service.description}</p>
                            <div className="flex gap-2 flex-wrap">
                                {service.tags.map((tag) => (
                                    <span key={tag} className="text-[11px] px-3 py-1 bg-zinc-200 rounded-full text-zinc-600">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
