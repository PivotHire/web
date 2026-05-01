"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

interface Post {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
}

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function BlogList({ posts }: { posts: Post[] }) {
    return (
        <motion.div
            className="flex flex-col divide-y divide-zinc-100"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {posts.map((post) => (
                <motion.div key={post.slug} variants={itemVariants}>
                    <Link
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 transition-colors duration-200 hover:bg-zinc-50 -mx-6 px-6 rounded-2xl"
                    >
                        <time className="text-sm text-zinc-400 md:w-36 shrink-0">
                            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                        </time>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors duration-200">
                                {post.title}
                            </h2>
                            <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">
                                {post.excerpt}
                            </p>
                        </div>
                        <div className="shrink-0 flex items-center gap-2 text-sm font-medium text-zinc-400 group-hover:text-zinc-900 group-hover:gap-3 transition-all duration-300">
                            Read <FaArrowRight className="h-3 w-3" />
                        </div>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
}
