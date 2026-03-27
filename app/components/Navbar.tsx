"use client";

import Link from "next/link";
import Image from "next/image";
import { IoMenu, IoSearch } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const footerCard = document.getElementById('bottom-card');
            if (footerCard) {
                const rect = footerCard.getBoundingClientRect();
                // Check if the top of the black card is visible in the viewport
                if (rect.top <= window.innerHeight) {
                    setIsHidden(true);
                } else {
                    setIsHidden(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-4 left-0 right-0 z-50 container mx-auto px-4 transition-transform duration-500 ease-in-out ${isHidden ? '-translate-y-[150%]' : 'translate-y-0'}`}>
            <nav className="w-full bg-white/60 backdrop-blur-2xl shadow-sm border border-white/40 rounded-3xl">
                <div className="px-4 md:px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative w-36 h-12">
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
