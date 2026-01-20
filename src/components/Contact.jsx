import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, Linkedin, Github, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        // ----------------------------------------------------------------------
        // HOW TO ENABLE EMAIL SENDING:
        // 1. Go to https://www.emailjs.com/ and create a free account.
        // 2. Add a new "Email Service" (e.g., Gmail).
        // 3. Create an "Email Template".
        // 4. Replace the placeholders below with your actual IDs.
        // ----------------------------------------------------------------------

        // TEMPORARY: If IDs are missing, fallback to the old mailto behavior
        const serviceId = "service_a1ufunr";
        const templateId = "template_81wa0gm";
        const publicKey = "WOQeo8Pv0KlIRK5Lo";

        if (serviceId === "YOUR_SERVICE_ID") {
            // Fallback for demo purposes so it still "works" without their keys
            setTimeout(() => {
                const formData = new FormData(form.current);
                const subject = `Service Inquiry: ${formData.get('serviceType')}`;
                const body = `Name: ${formData.get('user_name')}\nEmail: ${formData.get('user_email')}\n\nMessage:\n${formData.get('message')}`;
                window.location.href = `mailto:kaushalkumar5407@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                setIsSubmitting(false);
                setIsSent(true);
            }, 1500);
            return;
        }

        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    setIsSubmitting(false);
                    setIsSent(true);
                },
                (error) => {
                    setIsSubmitting(false);
                    setError("Failed to send message. Please try again or email directly.");
                    console.error('FAILED...', error.text);
                },
            );
    };

    return (
        <section id="contact" className="py-20 bg-slate-900/30">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-purple-400">Touch</span>
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Ready to optimize your infrastructure? Let's discuss how I can help.
                    </p>

                    <div className="flex justify-center gap-6 mb-8">
                        <a href="mailto:kaushalkumar5407@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                            <Mail size={24} />
                        </a>
                        <a href="https://linkedin.com/in/kaushal-kumar-788425224/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/Kaushal-DevOps-Journey" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800/50 p-8 md:p-12 rounded-2xl border border-slate-700 backdrop-blur-sm"
                >
                    {isSent ? (
                        <div className="text-center py-12">
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                            <p className="text-gray-400">Thank you for reaching out. I'll get back to you shortly.</p>
                            <button
                                onClick={() => setIsSent(false)}
                                className="mt-6 text-purple-400 hover:text-purple-300 underline"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Service Type</label>
                                <select
                                    name="serviceType"
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                >
                                    <option>DevOps Consultation</option>
                                    <option>CI/CD Implementation</option>
                                    <option>Cloud Infrastructure Setup</option>
                                    <option>Security Audit</option>
                                    <option>MLOps Pipeline</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            {error && <p className="text-red-400 text-sm text-center">{error}</p>}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        Sending... <Loader2 className="animate-spin" size={18} />
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
