import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 py-10 border-t border-slate-900 text-center">
            <div className="flex justify-center gap-6 mb-6">
                <a
                    href="https://github.com/Kaushal-DevOps-Journey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <Github size={20} />
                </a>
                <a
                    href="https://linkedin.com/in/kaushal-kumar-788425224/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <Linkedin size={20} />
                </a>
                <a
                    href="mailto:kaushalkumar5407@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <Mail size={20} />
                </a>
            </div>
            <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Kaushal Kumar. All rights reserved.
            </p>
        </footer>
    );
}
