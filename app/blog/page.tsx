import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
    title: "Blog - PivotHire",
    description: "Insights and updates from the PivotHire team.",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen bg-white font-sans selection:bg-[#242424] selection:text-white">
            <Navbar />
            <div className="container mx-auto px-4 pt-32 pb-20">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">Blog</h1>
                    <p className="text-lg text-zinc-500">Insights and updates from the PivotHire team.</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group rounded-[20px] bg-zinc-50 p-8 flex flex-col transition-colors duration-300 hover:bg-zinc-100"
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

            <div className="bg-white pt-4">
                <div className="bg-[#242424] text-white rounded-t-[2.5rem] mx-4 lg:mx-8">
                    <div className="pt-8">
                        <Footer />
                    </div>
                </div>
            </div>
        </main>
    );
}
