"use client";

import { FaCode, FaServer, FaMobileAlt, FaPenNib, FaArrowRight } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

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

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
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
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service) => (
                        <motion.a
                            key={service.title}
                            href="https://app.pivothire.tech"
                            className="group rounded-[20px] bg-zinc-50 p-8 flex flex-col transition-colors duration-300 hover:bg-zinc-200"
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
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
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {services.map((service) => (
                        <motion.a
                            key={service.title}
                            href="https://app.pivothire.tech"
                            className="rounded-[20px] border border-zinc-200 bg-zinc-50 p-7 flex flex-col"
                            variants={cardVariants}
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
