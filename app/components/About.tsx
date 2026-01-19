import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 bg-zinc-50 dark:bg-black overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <div className="relative">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-zinc-200 dark:bg-zinc-800">
                            <Image
                                src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885"
                                alt="About Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-8 -right-8 -z-10 h-64 w-64 rounded-full bg-[#242424]/10 blur-3xl dark:bg-white/5"></div>
                    </div>

                    <div>
                        <div className="mb-6 inline-flex items-center rounded-full border border-[#242424]/10 bg-[#242424]/5 px-3 py-1 text-sm font-medium text-[#242424] dark:border-white/10 dark:bg-white/5 dark:text-white">
                            Our Vision
                        </div>
                        <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
                            Entrepreneurship should be about long term vision and goals.
                        </h2>
                        <p className="mb-8 text-lg font-medium text-zinc-900 dark:text-white">
                            You imagine, and we deliver your thoughts.
                        </p>
                        <p className="mb-8 text-lg text-zinc-500 dark:text-zinc-400">
                            We strive to provide low prices and ease of use, high trust through Web3 IP archiving, and worry-free project management driven by our AI agent.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <FaCheckCircle className="h-6 w-6 text-[#242424] dark:text-white shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-zinc-900 dark:text-white">Low Price & Easy to Use</h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Accessible services similar to an e-commerce experience.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaCheckCircle className="h-6 w-6 text-[#242424] dark:text-white shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-zinc-900 dark:text-white">High Trust</h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Web3-backed results archiving for transparency.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaCheckCircle className="h-6 w-6 text-[#242424] dark:text-white shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-zinc-900 dark:text-white">AI-Driven Management</h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Pay once and wait for acceptance — we handle the rest.</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="#"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-[#242424] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#333] dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                        >
                            Learn More About Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
