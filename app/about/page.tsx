import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

export const metadata = {
    title: "About - PivotHire",
    description: "Our vision: entrepreneurship should be about long term vision and goals.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white font-sans selection:bg-[#242424] selection:text-white">
            <Navbar />
            <div className="pt-24">
                <About />
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
