import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black font-sans selection:bg-[#242424] selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      {/* <Projects /> */}
      {/* <Testimonials /> */}
      <div className="bg-[#242424]">
        <section className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl mb-6">
            Let's Create Your Ideal Software Solution
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:core@pivothire.tech"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-zinc-200"
            >
              Start Your Project
            </a>
            <a
              href="mailto:core@pivothire.tech"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-600 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800"
            >
              Contact Sales
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
