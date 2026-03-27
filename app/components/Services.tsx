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
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
                            Services Tailored to You
                        </h2>
                        <p className="text-lg text-zinc-500">
                            We offer a comprehensive suite of software development services designed to help you achieve your business goals.
                        </p>
                    </div>
                    <a
                        href="https://app.pivothire.tech" className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100">
                        View All Services <FaArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <a
                            href="https://app.pivothire.tech"
                            key={index}
                            className="group relative flex flex-col rounded-3xl border border-zinc-200 bg-zinc-50/50 p-8 transition-colors hover:bg-zinc-100">
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white shrink-0">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-zinc-900">
                                {service.title}
                            </h3>
                            <p className="text-zinc-500 mb-6">
                                {service.description}
                            </p>
                            <div className="mt-auto flex items-center text-sm font-medium text-[#242424] opacity-0 transition-opacity group-hover:opacity-100">
                                Learn more <FaArrowRight className="ml-2 h-3 w-3" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
