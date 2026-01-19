import Link from "next/link";
import Image from "next/image";
import { IoMenu, IoSearch } from "react-icons/io5";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md dark:bg-[#242424]/90 border-b border-zinc-100 dark:border-zinc-800">
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-36 h-12">
                        <Image
                            src="/logo-light-transparent.png"
                            alt="PivotHire Logo"
                            fill
                            className="object-contain dark:hidden"
                        />
                        <Image
                            src="/logo-dark-transparent.png"
                            alt="PivotHire Logo"
                            fill
                            className="object-contain hidden dark:block"
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors">
                        Home
                    </Link>
                    <Link href="#services" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors">
                        Services
                    </Link>
                    <Link href="#about" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors">
                        About
                    </Link>
                    {/* <Link href="#projects" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors">
                        Projects
                    </Link> */}
                    <Link href="#contact" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors">
                        Contact
                    </Link>
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="p-2 text-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors">
                        <IoSearch className="w-5 h-5" />
                    </button>
                    <Link
                        href="mailto:core@pivothire.tech"
                        className="inline-flex h-9 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                    >
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden p-2 text-zinc-600 dark:text-zinc-300">
                    <IoMenu className="w-6 h-6" />
                </button>
            </div>
        </nav>
    );
}
