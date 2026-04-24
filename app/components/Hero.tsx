import { FaArrowRight, FaPlay } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative overflow-hidden bg-zinc-50">
            <div className="container mx-auto px-4 pt-32 pb-20">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Content */}
                    <div className="flex flex-col justify-center space-y-8">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none text-zinc-900">
                            Complex Projects, <br />Simply Delivered.
                        </h1>
                        <p className="max-w-[600px] text-zinc-500 md:text-xl">
                            PivotHire connects you with top-tier engineering talent to build scalable, high-performance software solutions. We bridge the gap between your vision and reality.
                        </p>
                        <div className="flex flex-col gap-4 min-[400px]:flex-row">
                            <a
                                href="https://app.pivothire.tech" className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-sm font-medium text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                                Get Started
                            </a>
                            <a
                                href="#about" className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                                Learn More <FaArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </div>

                        {/* Stats Strip */}
                        <div className="pt-8 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-3xl font-bold">30+</div>
                                <div className="text-sm text-zinc-500">Engineers</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold">10+</div>
                                <div className="text-sm text-zinc-500">Projects</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold">100%</div>
                                <div className="text-sm text-zinc-500">Satisfaction</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold">5+</div>
                                <div className="text-sm text-zinc-500">Countries</div>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                        <div className="relative aspect-square overflow-hidden rounded-3xl bg-zinc-100 object-cover shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7" alt="Hero Image" fill
                                className="object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
