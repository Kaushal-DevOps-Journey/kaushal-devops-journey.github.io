import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
    const certifications = [
        {
            title: "Microsoft Certified: Azure Fundamentals",
            issuer: "Microsoft",
            date: "2024",
            link: "#" // Add actual link if available
        },
        {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2024",
            link: "#"
        },
        {
            title: "NPTEL - Foundation of Cloud IoT Edge ML",
            issuer: "IIT Kharagpur",
            date: "May 2023",
            score: "Elite + Gold",
            link: "#"
        }
    ];

    return (
        <section id="certifications" className="py-20 bg-slate-900/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Certifications & <span className="text-purple-400">Awards</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-all flex flex-col items-center text-center"
                            >
                                <div className="bg-purple-900/20 p-4 rounded-full mb-4 text-purple-400">
                                    <Award size={32} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                                <p className="text-purple-300 text-sm mb-1">{cert.issuer}</p>
                                <p className="text-gray-500 text-xs mb-4">{cert.date} {cert.score && `• ${cert.score}`}</p>
                                {/* 
                <a href={cert.link} className="text-gray-400 hover:text-white text-sm flex items-center gap-1 transition-colors">
                  Verify <ExternalLink size={14} />
                </a> 
                */}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
