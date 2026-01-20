import { motion } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl text-purple-400 font-semibold mb-4">
                        Hello, I am Kaushal Kumar
                    </h2>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent pb-2 min-h-[90px]">
                        <Typewriter
                            words={['DevOps Engineer', 'Cloud Architect', 'MLOps Engineer', 'Automator']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                        Specializing in CI/CD automation, Cloud Infrastructure (AWS/Azure), and MLOps.
                        I bridge the gap between development, operations, and machine learning workflows.
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6 mb-10">
                        <a
                            href="https://github.com/Kaushal-DevOps-Journey"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white hover:scale-110 transition-all p-2 bg-slate-900/50 rounded-full border border-slate-700 hover:border-purple-500"
                            title="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/kaushal-kumar-788425224/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white hover:scale-110 transition-all p-2 bg-slate-900/50 rounded-full border border-slate-700 hover:border-purple-500"
                            title="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="mailto:kaushalkumar5407@gmail.com"
                            className="text-gray-400 hover:text-white hover:scale-110 transition-all p-2 bg-slate-900/50 rounded-full border border-slate-700 hover:border-purple-500"
                            title="Email"
                        >
                            <Mail size={24} />
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-colors flex items-center justify-center gap-2"
                        >
                            View Projects <ArrowRight size={20} />
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1UpGlrs8NrzQKri_prfMMXLWnDEcEG7h4/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border border-gray-600 hover:border-purple-500 hover:text-purple-400 text-gray-300 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
                        >
                            Download Resume <Download size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
