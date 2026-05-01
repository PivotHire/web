import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: "Not Found" };
    return {
        title: `${post.title} - PivotHire Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    return (
        <main className="min-h-screen bg-white font-sans selection:bg-[#242424] selection:text-white">
            <Navbar />
            <article className="container mx-auto px-4 pt-32 pb-20">
                <div className="max-w-3xl mx-auto">
                    <time className="text-sm text-zinc-400">
                        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900 mt-2 mb-8">{post.title}</h1>
                    <div className="space-y-4 text-zinc-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-zinc-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-zinc-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ul]:my-4 [&_a]:underline [&_a]:text-zinc-900 hover:[&_a]:text-zinc-700 [&_a]:transition-colors [&_strong]:text-zinc-900">
                        <MDXRemote source={post.content} />
                    </div>
                </div>
            </article>

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
