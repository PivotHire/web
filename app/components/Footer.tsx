import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { FaX, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#242424] text-white pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="grid gap-12 lg:grid-cols-4 mb-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="relative block w-48 h-12">
                            <Image
                                src="/logo-dark-transparent.png"
                                alt="PivotHire Logo"
                                fill
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-zinc-400">
                            Connecting the world's best tech talent with ambitious companies.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.linkedin.com/company/pivothire/" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                                <FaLinkedin />
                            </Link>
                            <Link href="https://x.com/PivotHireAI" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                                <FaXTwitter />
                            </Link>
                            <Link href="https://github.com/PivotHire" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                                <FaGithub />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Company</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="mailto:core@pivothire.tech" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6">Services</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li><Link href="#services" className="hover:text-white transition-colors">Web Development</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">Mobile Development</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">Cloud Services</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">Quality Assurance</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Stay Updated</h3>
                        <p className="text-zinc-400 mb-4">Subscribe to our newsletter for the latest tech trends.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-white/10 border border-white/10 rounded-full px-4 text-sm text-white focus:outline-none focus:border-white/30"
                            />
                            <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
                    <p>&copy; {new Date().getFullYear()} PivotHire Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        {/* <Link href="#" className="hover:text-white">Privacy Policy</Link> */}
                        {/* <Link href="#" className="hover:text-white">Terms of Service</Link> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
