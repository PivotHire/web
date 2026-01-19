import { FaCode, FaMobileAlt, FaPenNib, FaNetworkWired, FaArrowRight } from "react-icons/fa";

const services = [
    {
        icon: FaCode,
        title: "Web Development",
        description: "Robust, scalable, and secure web applications built with modern frameworks like React, Next.js, and Node.js.",
    },
    {
        icon: FaMobileAlt,
        title: "Mobile Development",
        description: "Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences.",
    },
    {
        icon: FaPenNib,
        title: "Graphics & Motion",
        description: "Stunning visual designs and motion graphics that captivate your audience and elevate your brand identity.",
    },
    {
        icon: FaNetworkWired,
        title: "Networks & Systems",
        description: "Reliable network infrastructure and system development to ensure your business operations run smoothly.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white dark:bg-[#1a1a1a]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white mb-4">
                            Services Tailored to You
                        </h2>
                        <p className="text-lg text-zinc-500 dark:text-zinc-400">
                            We offer a comprehensive suite of software development services designed to help you achieve your business goals.
                        </p>
                    </div>
                    <a
                        href="#services"
                        className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-transparent dark:text-white dark:hover:bg-zinc-800"
                    >
                        View All Services <FaArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative rounded-3xl border border-zinc-100 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-[#242424] dark:hover:border-zinc-700"
                        >
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#242424] text-white dark:bg-white dark:text-black">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-white">
                                {service.title}
                            </h3>
                            <p className="text-zinc-500 dark:text-zinc-400">
                                {service.description}
                            </p>
                            <div className="mt-6 flex items-center text-sm font-medium text-[#242424] dark:text-white opacity-0 transition-opacity group-hover:opacity-100">
                                Learn more <FaArrowRight className="ml-2 h-3 w-3" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
