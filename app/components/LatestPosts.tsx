import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { getAllPosts } from "@/lib/blog";

export default function LatestPosts() {
    const posts = getAllPosts().slice(0, 3);

    return (
        <section className="py-24 bg-zinc-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
                            Latest Posts
                        </h2>
                        <p className="text-lg text-zinc-500">
                            Insights and updates from the PivotHire team.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100"
                    >
                        View All Posts <FaArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group rounded-[20px] bg-white p-8 flex flex-col transition-colors duration-300 hover:bg-zinc-100"
                        >
                            <time className="text-xs text-zinc-400 mb-3">
                                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                            </time>
                            <h3 className="text-lg font-bold text-zinc-900 mb-3">{post.title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed mb-6">{post.excerpt}</p>
                            <div className="mt-auto flex items-center gap-2 text-sm font-medium text-zinc-900 group-hover:gap-3 transition-all duration-300">
                                Read more <FaArrowRight className="h-3 w-3" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
