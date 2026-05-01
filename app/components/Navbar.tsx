"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar({ mode = "default" }: { mode?: "default" | "legal" }) {
    const [menuOpen, setMenuOpen] = useState(false);

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
                        {mode === "default" ? (
                            <>
                                <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
                                    Home
                                </Link>
                                <Link href="/blog" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
                                    Blog
                                </Link>
                                <Link href="/about" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
                                    About
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/privacy-policy" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms-of-service" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
                                    Terms of Service
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        {mode === "default" ? (
                            <Link
                                href="https://app.pivothire.tech" className="inline-flex h-9 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                                Get Started
                            </Link>
                        ) : (
                            <Link
                                href="mailto:core@pivothire.tech" className="inline-flex h-9 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                                Contact Us
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden p-2 text-zinc-600" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <IoClose className="w-6 h-6" /> : <IoMenu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden border-t border-zinc-200/50 px-6 pb-6 pt-4 flex flex-col gap-4">
                        {mode === "default" ? (
                            <>
                                <Link href="/" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
                                    Home
                                </Link>
                                <Link href="/blog" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
                                    Blog
                                </Link>
                                <Link href="/about" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
                                    About
                                </Link>
                                <Link href="https://app.pivothire.tech" className="inline-flex h-10 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-800">
                                    Get Started
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/privacy-policy" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms-of-service" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
                                    Terms of Service
                                </Link>
                                <Link href="mailto:core@pivothire.tech" className="inline-flex h-10 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-800">
                                    Contact Us
                                </Link>
                            </>
                        )}
                    </div>
                )}
            </nav>
        </div>
    );
}
