import { FaCheckCircle } from"react-icons/fa";
import Image from"next/image";

export default function About() {
 return (
 <section id="about"className="py-24 bg-zinc-50 overflow-hidden">
 <div className="container mx-auto px-4">
 <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
 <div className="relative">
 <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-zinc-200">
 <Image
 src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885"alt="About Image"fill
 className="object-cover"/>
 </div>
 {/* Decorative element */}
 <div className="absolute -bottom-8 -right-8 -z-10 h-64 w-64 rounded-full bg-[#242424]/10 blur-3xl"></div>
 </div>

 <div>
 <div className="mb-6 inline-flex items-center rounded-full border border-[#242424]/10 bg-[#242424]/5 px-3 py-1 text-sm font-medium text-[#242424]">
 Our Vision
 </div>
 <h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
 Entrepreneurship should be about long term vision and goals.
 </h2>
 <p className="mb-8 text-lg font-medium text-zinc-900">
 You imagine, and we deliver your thoughts.
 </p>
 <p className="mb-8 text-lg text-zinc-500">
 We strive to provide low prices and ease of use, high trust through IP archiving, and worry-free project management driven by our AI agent.
 </p>

 <div className="space-y-4 mb-8">
 <div className="flex items-start gap-3">
 <FaCheckCircle className="h-6 w-6 text-[#242424] shrink-0"/>
 <div>
 <h4 className="font-semibold text-zinc-900">Low Price & Easy to Use</h4>
 <p className="text-sm text-zinc-500">Accessible services similar to an e-commerce experience.</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <FaCheckCircle className="h-6 w-6 text-[#242424] shrink-0"/>
 <div>
 <h4 className="font-semibold text-zinc-900">High Trust</h4>
 <p className="text-sm text-zinc-500">Results archiving for transparency.</p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <FaCheckCircle className="h-6 w-6 text-[#242424] shrink-0"/>
 <div>
 <h4 className="font-semibold text-zinc-900">AI-Driven Management</h4>
 <p className="text-sm text-zinc-500">Pay once and wait for acceptance — we handle the rest.</p>
 </div>
 </div>
 </div>

 <a
 href="#"className="inline-flex h-12 items-center justify-center rounded-full bg-[#242424] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#333] :bg-zinc-200">
 Learn More About Us
 </a>
 </div>
 </div>
 </div>
 </section>
 );
}
