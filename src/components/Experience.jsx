import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            type: "work",
            title: "DevOps Engineer",
            company: "RxLogix Corporation",
            period: "March 2023 - October 2025",
            description: [
                "Designed and maintained scalable CI/CD pipelines using Jenkins & GitHub Actions.",
                "Implemented shift-left security using Gitleaks, SonarQube, and Trivy.",
                "Provisioned secure AWS infrastructure (EC2, VPC, S3, IAM) using Terraform.",
            ],
            icon: <Briefcase size={24} />,
        },
        {
            type: "education",
            title: "B.Tech in Electrical Engineering",
            company: "Madhav Institute of Technology and Science",
            period: "August 2019 - May 2023",
            description: ["CGPA: 8.46"],
            icon: <GraduationCap size={24} />,
        },
    ];

    return (
        <section id="experience" className="py-20 bg-slate-950 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                        Experience & <span className="text-purple-400">Education</span>
                    </h2>

                    <div className="relative border-l-2 border-purple-500/30 ml-4 md:ml-10 space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[11px] top-0 bg-slate-900 border-2 border-purple-500 p-2 rounded-full text-purple-400 z-10">
                                    {exp.icon}
                                </div>

                                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                            <p className="text-purple-400 font-medium">{exp.company}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500 text-sm mt-2 md:mt-0 bg-slate-800 px-3 py-1 rounded-full">
                                            <Calendar size={14} /> {exp.period}
                                        </div>
                                    </div>

                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-gray-400 text-sm md:text-base flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
