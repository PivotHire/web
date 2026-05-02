"use client";

import { FaCheckCircle } from"react-icons/fa";
import Image from"next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

export default function About() {
 return (
 <section id="about"className="py-24 bg-zinc-50 overflow-hidden">
 <div className="container mx-auto px-4">
 <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="grid gap-16 lg:grid-cols-2 lg:items-center"
 >
 <motion.div variants={fadeInUp} className="relative">
 <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-zinc-200">
 <Image
 src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885"alt="About Image"fill
 className="object-cover"/>
 </div>
 {/* Decorative element */}
 <div className="absolute -bottom-8 -right-8 -z-10 h-64 w-64 rounded-full bg-[#242424]/10 blur-3xl"></div>
 </motion.div>

 <motion.div variants={staggerContainer}>
 <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center rounded-full border border-[#242424]/10 bg-[#242424]/5 px-3 py-1 text-sm font-medium text-[#242424]">
 Our Vision
 </motion.div>
 <motion.h2 variants={fadeInUp} className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
 Entrepreneurship should be about long term vision and goals.
 </motion.h2>
 <motion.p variants={fadeInUp} className="mb-8 text-lg text-zinc-500">
 Building software shouldn&apos;t slow you down. We exist so founders can stay focused on strategy, growth, and the problems only they can solve — while we turn their ideas into production-ready products.
 </motion.p>

 <motion.div variants={fadeInUp} className="space-y-4 mb-8">
 <div className="flex items-start gap-3">
 <FaCheckCircle className="h-6 w-6 text-[#242424] shrink-0"/>
 <div>
 <h4 className="font-semibold text-zinc-900">Focus on what matters</h4>
 <p className="text-sm text-zinc-500">Spend your time on product vision, customers, and growth — not managing developers or debugging deploys.</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <FaCheckCircle className="h-6 w-6 text-[#242424] shrink-0"/>
 <div>
 <h4 className="font-semibold text-zinc-900">From idea to product, fast</h4>
 <p className="text-sm text-zinc-500">Our AI-powered workflow matches your project with the right talent and manages delivery end-to-end.</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <FaCheckCircle className="h-6 w-6 text-[#242424] shrink-0"/>
 <div>
 <h4 className="font-semibold text-zinc-900">Built on trust and transparency</h4>
 <p className="text-sm text-zinc-500">Every deliverable is archived with immutable records. You always own your code, and you always know what&apos;s happening.</p>
 </div>
 </div>
 </motion.div>

 <motion.a
 variants={fadeInUp}
 href="#about" className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-sm font-medium text-white transition-opacity hover:opacity-80">
 Learn More About Us
 </motion.a>
 </motion.div>
 </motion.div>
 </div>
 </section>
 );
}
