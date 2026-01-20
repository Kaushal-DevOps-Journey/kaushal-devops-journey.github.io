import { motion } from "framer-motion";
import { FolderGit2, Server, Shield, Activity, Terminal } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "End-to-End DevSecOps Pipeline",
            description: "Implemented a secure pipeline for Java Maven apps using Jenkins, GitHub Actions, SonarQube, and Trivy. Automated deployment to Nexus and self-managed Kubernetes.",
            tags: ["Jenkins", "SonarQube", "Trivy", "Kubernetes"],
            icon: <Shield className="w-10 h-10 text-purple-400" />,
            link: "https://github.com/Kaushal-DevOps-Journey/End-to-End-DevSecOps-CI-CD-Project"
        },
        {
            title: "End-to-End DevOps Monitoring",
            description: "Set up comprehensive monitoring with Prometheus, Grafana, Node Exporter, and Blackbox Exporter. Configured email alerts via SMTP.",
            tags: ["Prometheus", "Grafana", "Linux", "SMTP"],
            icon: <Activity className="w-10 h-10 text-blue-400" />,
            link: "https://github.com/Kaushal-DevOps-Journey/End-to-End-DevOps-Monitoring-Project"
        },
        {
            title: "Ansible VM Health Monitor",
            description: "Automated EC2 VM monitoring using Ansible and Python. System delivers HTML health reports directly to email.",
            tags: ["Ansible", "Python", "AWS EC2", "Automation"],
            icon: <Terminal className="w-10 h-10 text-green-400" />,
            link: "https://github.com/Kaushal-DevOps-Journey/Ansible-VM-Monitor"
        },
        {
            title: "AWS Infrastructure Provisioning",
            description: "Provisioned scalable AWS infrastructure (EC2, VPC, S3, IAM) using Terraform, ensuring consistent and reproducible environments.",
            tags: ["Terraform", "AWS", "IaC"],
            icon: <Server className="w-10 h-10 text-orange-400" />,
            link: "https://github.com/Kaushal-DevOps-Journey"
        },
        {
            title: "MLOps-Vehicle-Insurance-Data-Pipeline",
            description: "Automated vehicle insurance prediction pipeline with MongoDB ingestion, Dockerized Flask API, and GitHub Actions CI/CD deployed on AWS EC2.",
            tags: ["MLOps", "Docker", "AWS", "MongoDB"],
            icon: <Activity className="w-10 h-10 text-pink-400" />,
            link: "https://github.com/Kaushal-DevOps-Journey/MLOps-Vehicle-Insurance-Data-Pipeline"
        },
    ];

    return (
        <section id="projects" className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
                        Featured <span className="text-purple-400">Projects</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.a
                                key={index}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5 }}
                                className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all group block cursor-pointer"
                            >
                                <div className="mb-6 bg-slate-800/50 w-fit p-4 rounded-xl group-hover:bg-purple-900/20 transition-colors">
                                    {project.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                                <p className="text-gray-400 mb-6">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-sm text-purple-300 bg-purple-900/20 px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
