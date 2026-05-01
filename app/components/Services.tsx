"use client";

import { useEffect, useRef, useState } from "react";
import { FaCode, FaServer, FaMobileAlt, FaPenNib, FaArrowRight } from "react-icons/fa";

const services = [
    {
        icon: FaCode,
        title: "Frontend",
        label: "Web Interfaces",
        description: "Pixel-perfect interfaces with modern frameworks and responsive design.",
        tags: ["React", "Next.js", "Vue", "Tailwind"],
        focusPosition: "left" as const,
    },
    {
        icon: FaServer,
        title: "Backend",
        label: "APIs & Infra",
        description: "Scalable APIs, microservices, and cloud infrastructure built for performance.",
        tags: ["Node.js", "Python", "Go", "AWS"],
        focusPosition: "right" as const,
    },
    {
        icon: FaMobileAlt,
        title: "Mobile",
        label: "iOS & Android",
        description: "Native and cross-platform apps for iOS and Android with seamless UX.",
        tags: ["Swift", "Kotlin", "Flutter", "React Native"],
        focusPosition: "right" as const,
    },
    {
        icon: FaPenNib,
        title: "Design",
        label: "UI/UX & Brand",
        description: "Beautiful UI/UX design, brand identity, and motion graphics that elevate your product.",
        tags: ["Figma", "UI/UX", "Branding", "Motion"],
        focusPosition: "left" as const,
    },
];

function BentoCard({ service, isFocused }: { service: typeof services[number]; isFocused: boolean }) {
    if (isFocused) {
        return (
            <div className="bg-[#111] text-white rounded-[20px] p-7 row-span-2 flex flex-col transition-all duration-500">
                <service.icon className="h-7 w-7 mb-3" />
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-auto">{service.description}</p>
                <div className="flex gap-2 flex-wrap mt-4">
                    {service.tags.map((tag) => (
                        <span key={tag} className="text-[11px] px-3 py-1 bg-white/10 rounded-full text-zinc-300">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="bg-zinc-50 border border-zinc-200 rounded-[20px] p-5 flex flex-col justify-center transition-all duration-500">
            <h3 className="text-sm font-bold text-zinc-900">{service.title}</h3>
            <p className="text-xs text-zinc-500 mt-1">{service.label}</p>
        </div>
    );
}

function BentoGrid({ activeIndex }: { activeIndex: number }) {
    const focused = services[activeIndex];
    const others = services.filter((_, i) => i !== activeIndex);
    const isLeft = focused.focusPosition === "left";

    const focusedCard = <BentoCard key={focused.title} service={focused} isFocused />;
    const smallTop = <BentoCard key={others[0].title} service={others[0]} isFocused={false} />;
    const smallBottomLeft = <BentoCard key={others[1].title} service={others[1]} isFocused={false} />;
    const smallBottomRight = <BentoCard key={others[2].title} service={others[2]} isFocused={false} />;

    return (
        <div
            className={`grid gap-2 h-[360px] transition-all duration-500 ${
                isLeft ? "grid-cols-[1.4fr_0.6fr]" : "grid-cols-[0.6fr_1.4fr]"
            }`}
            style={{ gridTemplateRows: "1fr 1fr" }}
        >
            {isLeft ? (
                <>
                    {focusedCard}
                    {smallTop}
                    <div className="grid grid-cols-2 gap-2">
                        {smallBottomLeft}
                        {smallBottomRight}
                    </div>
                </>
            ) : (
                <>
                    {smallTop}
                    {focusedCard}
                    <div className="grid grid-cols-2 gap-2">
                        {smallBottomLeft}
                        {smallBottomRight}
                    </div>
                </>
            )}
        </div>
    );
}

function MobileCards() {
    return (
        <div className="flex flex-col gap-4 lg:hidden">
            {services.map((service) => (
                <a
                    key={service.title}
                    href="https://app.pivothire.tech"
                    className="bg-[#111] text-white rounded-[20px] p-7 flex flex-col"
                >
                    <service.icon className="h-7 w-7 mb-3" />
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-4">{service.description}</p>
                    <div className="flex gap-2 flex-wrap">
                        {service.tags.map((tag) => (
                            <span key={tag} className="text-[11px] px-3 py-1 bg-white/10 rounded-full text-zinc-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                </a>
            ))}
        </div>
    );
}

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const handleScroll = () => {
            const rect = section.getBoundingClientRect();
            const sectionHeight = section.offsetHeight;
            const scrolled = -rect.top;
            const scrollableDistance = sectionHeight - window.innerHeight;

            if (scrolled < 0 || scrolled > scrollableDistance) return;

            const progress = scrolled / scrollableDistance;
            const newIndex = Math.min(3, Math.floor(progress * 4));
            setActiveIndex(newIndex);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="services" ref={sectionRef} className="relative bg-white" style={{ height: "400vh" }}>
            {/* Sticky container */}
            <div className="sticky top-0 h-screen flex flex-col justify-center py-12">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
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
                    </div>

                    {/* Desktop Bento Grid */}
                    <div className="hidden lg:block max-w-2xl mx-auto">
                        <BentoGrid activeIndex={activeIndex} />
                    </div>

                    {/* Mobile: stacked cards, no scroll effect */}
                    <MobileCards />

                    {/* Scroll progress dots */}
                    <div className="hidden lg:flex justify-center gap-2 mt-8">
                        {services.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    i === activeIndex ? "w-8 bg-zinc-900" : "w-1.5 bg-zinc-300"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
