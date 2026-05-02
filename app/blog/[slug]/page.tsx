import { notFound } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FootnoteDiagram from "../../components/FootnoteDiagram";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

const mdxComponents = {
    FootnoteDiagram,
};

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
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-900 transition-colors mb-8"
                    >
                        <FaArrowLeft className="h-3 w-3" /> Back to Blog
                    </Link>

                    <header className="mb-12">
                        <time className="text-sm text-zinc-400">
                            {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                        </time>
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mt-3 leading-tight">
                            {post.title}
                        </h1>
                        <p className="mt-4 text-lg text-zinc-500 leading-relaxed">{post.excerpt}</p>
                        <div className="mt-8 h-px bg-zinc-200" />
                    </header>

                    <div className="prose-article [&>*]:mb-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-zinc-900 [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-zinc-900 [&_h3]:mt-10 [&_h3]:mb-3 [&_p]:text-zinc-600 [&_p]:leading-[1.8] [&_p]:text-[15px] [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:my-6 [&_ul]:text-zinc-600 [&_ul]:text-[15px] [&_ul]:leading-[1.8] [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:my-6 [&_ol]:text-zinc-600 [&_a]:underline [&_a]:text-zinc-900 [&_a]:underline-offset-2 hover:[&_a]:text-zinc-600 [&_a]:transition-colors [&_strong]:text-zinc-900 [&_strong]:font-semibold [&_blockquote]:border-l-2 [&_blockquote]:border-zinc-300 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-zinc-500 [&_code]:bg-zinc-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:text-zinc-800 [&_pre]:bg-zinc-50 [&_pre]:border [&_pre]:border-zinc-200 [&_pre]:rounded-xl [&_pre]:p-5 [&_pre]:overflow-x-auto [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_img]:rounded-xl [&_img]:border [&_img]:border-zinc-200 [&_img]:shadow-sm [&_img]:my-8 [&_img]:w-full [&_hr]:border-zinc-200 [&_hr]:my-12">
                        <MDXRemote source={post.content} components={mdxComponents} />
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
