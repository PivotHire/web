import Link from "next/link";
import Image from "next/image";
import { IoMenu, IoSearch } from "react-icons/io5";

export default function Navbar() {
    return (
        <div className="fixed top-4 left-0 right-0 z-50 mx-4 lg:mx-8 transition-all">
            <nav className="w-full bg-white/60 backdrop-blur-2xl shadow-sm border border-white/40 rounded-[2rem]">
                <div className="pl-6 pr-4 h-[4rem] flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative w-40 h-12">
                            <Image
                                src="/logo-light-transparent.png" alt="PivotHire Logo" fill
                                className="object-contain" />

                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#" className="text-sm font-medium text-zinc-600 hover:text-black :text-white transition-colors">
                            Home
                        </Link>
                        <Link href="#services" className="text-sm font-medium text-zinc-600 hover:text-black :text-white transition-colors">
                            Services
                        </Link>
                        <Link href="#about" className="text-sm font-medium text-zinc-600 hover:text-black :text-white transition-colors">
                            About
                        </Link>
                        {/* <Link href="#projects"className="text-sm font-medium text-zinc-600 hover:text-black :text-white transition-colors">
 Projects
 </Link> */}
                        <Link href="#contact" className="text-sm font-medium text-zinc-600 hover:text-black :text-white transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="https://app.pivothire.tech" className="inline-flex h-9 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden p-2 text-zinc-600">
                        <IoMenu className="w-6 h-6" />
                    </button>
                </div>
            </nav>
        </div>
    );
}
