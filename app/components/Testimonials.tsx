import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        text: "PivotHire transformed our development process. The project is perfectly delivered at a very affordable price.",
        author: "Tony Qiu",
        role: "Co-Founder, OpenEd",
        imageColor: "bg-orange-200",
    },
    {
        text: "The quality of talent is unmatched. We tried other platforms, but PivotHire's vetting process truly sets them apart.",
        author: "Richard Liu",
        role: "Co-Founder, Stealth Startup",
        imageColor: "bg-blue-200",
    },
    {
        text: "Communication was seamless. It felt like the developers were sitting right next to us, despite being thousands of miles away.",
        author: "Emily Rodriguez",
        role: "Product Manager, TechGiant",
        imageColor: "bg-green-200",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white dark:bg-[#1a1a1a]">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white mb-4">
                        Trusted by Innovators
                    </h2>
                    <p className="text-lg text-zinc-500 dark:text-zinc-400">
                        See what our partners have to say about working with PivotHire.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="relative rounded-3xl border border-zinc-100 bg-zinc-50 p-8 shadow-sm dark:border-zinc-800 dark:bg-[#242424]"
                        >
                            <FaQuoteLeft className="mb-4 h-8 w-8 text-[#242424]/20 dark:text-white/20" />
                            <div className="flex gap-1 text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className="mb-6 text-zinc-600 dark:text-zinc-300 italic">
                                "{testimonial.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className={`h-12 w-12 rounded-full ${testimonial.imageColor} flex items-center justify-center font-bold text-zinc-700`}>
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-zinc-900 dark:text-white">
                                        {testimonial.author}
                                    </h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
