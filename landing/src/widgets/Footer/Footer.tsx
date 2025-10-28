import { Instagram, Twitter, Linkedin } from "lucide-react";
import links from "./Links";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="py-16 md:py-32 footer-bg ">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid gap-12  md:grid-cols-4">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold mb-6">Aurora</h2>
                        <p className="text-lg text-gray-600 mb-4">
                             Aurora helps brands measure and grow their visibility inside AI search engines.
                            The next evolution of SEO — from keyword ranking to decision-stage influence.
                        </p>
                    </div>
                    <div className="md:col-span-2 md:ml-18 grid grid-cols-3 gap-6">
                       {links.map((link, index) => (
                            <div
                                key={index}
                                className="space-y-4">
                                <span className="block font-medium">{link.group}</span>
                                {link.items.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.href}
                                        className="text-muted-foreground hover:text-primary block duration-150">
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div> 
                </div>
                <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t-2 py-3">
                    <p className="text-lg text-gray-600">© {new Date().getFullYear()} Aurora. All rights reserved.</p>
                    <div className="flex items-center justify-end gap-6">
                        <Instagram className="hover:text-rose-500"/>
                        <Linkedin className="hover:text-blue-500"/>
                    </div>
                </div>

            </div>
        </footer>
    );
}
