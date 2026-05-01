"use client";

import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) => Math.round(v));
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    animate(count, value, { duration: 1.5, ease: "easeOut" });
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [count, value]);

    return (
        <div>
            <div className="text-3xl font-bold">
                <motion.span ref={ref}>{rounded}</motion.span>{suffix}
            </div>
            <div className="text-sm text-zinc-500">{label}</div>
        </div>
    );
}

export default function Hero() {
    return (
        <div className="relative overflow-hidden bg-zinc-50">
            <div className="container mx-auto px-4 pt-32 pb-20">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <motion.div
                        className="flex flex-col justify-center space-y-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none text-zinc-900">
                            Complex Projects, <br />Simply Delivered.
                        </h1>
                        <p className="max-w-[600px] text-zinc-500 md:text-xl">
                            PivotHire connects you with top-tier engineering talent to build scalable, high-performance software solutions. We bridge the gap between your vision and reality.
                        </p>
                        <div className="flex flex-col gap-4 min-[400px]:flex-row">
                            <a
                                href="https://app.pivothire.tech" className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-sm font-medium text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                                Get Started
                            </a>
                            <a
                                href="/about" className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                                Learn More <FaArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </div>

                        <div className="pt-8 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-8">
                            <AnimatedStat value={30} suffix="+" label="Engineers" />
                            <AnimatedStat value={10} suffix="+" label="Projects" />
                            <AnimatedStat value={100} suffix="%" label="Satisfaction" />
                            <AnimatedStat value={5} suffix="+" label="Countries" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative mx-auto w-full max-w-[500px] lg:max-w-none"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="relative aspect-square overflow-hidden rounded-3xl bg-zinc-100 object-cover shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7" alt="Hero Image" fill
                                className="object-cover" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
