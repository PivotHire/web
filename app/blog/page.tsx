import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogList from "../components/BlogList";
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
                <BlogList posts={posts.map(({ slug, title, date, excerpt }) => ({ slug, title, date, excerpt }))} />
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
