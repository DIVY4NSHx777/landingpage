import { Instagram, Twitter, Linkedin } from "lucide-react";
export default function Footer() {
    return (
        <footer className="py-16 md:py-24 footer-bg ">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-4">Footer</h2>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, ab?
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-10 text-sm">
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Company</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-3">Support</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Terms & Privacy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <Instagram/>
                                <a href="#">Instagram</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Twitter/>
                                <a href="#">Twitter</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Linkedin/>
                                <a href="#">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-12 text-gray-400">
                    <p>{new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
}
