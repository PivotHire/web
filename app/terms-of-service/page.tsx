import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white font-sans selection:bg-[#242424] selection:text-white flex flex-col">
            <Navbar mode="legal" />
            <div className="container mx-auto px-4 pt-32 pb-20 flex-grow w-full">
                <h1 className="text-4xl font-semibold tracking-tight mb-8">Terms of Service</h1>
                <div className="space-y-6 text-zinc-600 leading-relaxed">
                    <p>Last updated: March 27, 2026</p>
                    <p>
                        This is a placeholder for the Terms of Service content. The actual content will be provided later.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                    </p>
                </div>
            </div>

            <div className="bg-white pt-4">
                <div id="bottom-card" className="bg-[#242424] text-white rounded-t-[2.5rem] mx-4 lg:mx-8">
                    <div className="pt-8">
                        <Footer />
                    </div>
                </div>
            </div>
        </main>
    );
}
