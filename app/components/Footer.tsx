import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { FaX, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer id="contact" className="bg-transparent text-white pt-16 pb-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid gap-12 lg:grid-cols-3 mb-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="relative block w-48 h-12">
                            <Image
                                src="/logo-dark-transparent.png" alt="PivotHire Logo" fill
                                className="object-contain" />
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
                        <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="mailto:core@pivothire.tech" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Services</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li><Link href="#services" className="hover:text-white transition-colors">Web Development</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">Mobile Development</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">Cloud Services</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">Quality Assurance</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
                    <p>&copy; {new Date().getFullYear()} PivotHire Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
