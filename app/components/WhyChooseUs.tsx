import { FaRobot, FaCheckCircle, FaVoteYea, FaGlobe } from "react-icons/fa";
import Image from "next/image";

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-zinc-50 dark:bg-black">
            <div className="container mx-auto px-4">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                    {/* Content Left */}
                    <div>
                        <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
                            Why PivotHire?
                        </h2>
                        <p className="mb-8 text-lg text-zinc-500 dark:text-zinc-400">
                            We deliver more than just code. We provide a partnership that guarantees quality, transparency, and results.
                        </p>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-[#1a1a1a]">
                                <FaRobot className="h-8 w-8 text-[#242424] dark:text-white mb-4" />
                                <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-2">Intelligent Central AI Agent</h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">Our AI agent analyzes project requirements and team capabilities to ensure optimal, data-driven pairings for successful delivery.</p>
                            </div>
                            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-[#1a1a1a]">
                                <FaCheckCircle className="h-8 w-8 text-[#242424] dark:text-white mb-4" />
                                <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-2">Verified & Vetted Ecosystem</h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">We conduct rigorous legal verification for clients and multi-stage skill assessments for our delivery partners, creating a high-trust marketplace.</p>
                            </div>
                            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-[#1a1a1a]">
                                <FaVoteYea className="h-8 w-8 text-[#242424] dark:text-white mb-4" />
                                <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-2">Ironclad IP Protection</h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">The platform manages binding legal agreements and uses Web3 for immutable records, safeguarding your intellectual property.</p>
                            </div>
                            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-[#1a1a1a]">
                                <FaGlobe className="h-8 w-8 text-[#242424] dark:text-white mb-4" />
                                <h3 className="font-semibold text-lg text-zinc-900 dark:text-white mb-2">Borderless Collaboration</h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">Our platform is built for versatility, enabling seamless, project-based work across any industry, role, or region to power global innovation.</p>
                            </div>
                        </div>
                    </div>

                    {/* Images Right */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <div className="h-48 w-full rounded-2xl bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1717501218636-a390f9ac5957"
                                        alt="About Image"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="h-64 w-full rounded-2xl bg-zinc-300 dark:bg-zinc-700 relative overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1688380692117-63178554d76d"
                                        alt="About Image"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-64 w-full rounded-2xl bg-zinc-300 dark:bg-zinc-700 relative overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad"
                                        alt="About Image"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="h-48 w-full rounded-2xl bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2"
                                        alt="About Image"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
