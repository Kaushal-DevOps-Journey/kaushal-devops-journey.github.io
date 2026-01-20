import { motion } from "framer-motion";

export default function About() {
    const skills = [
        "AWS", "Azure", "Docker", "Kubernetes",
        "MLOps", "Model Deployment", "Jenkins", "GitHub Actions",
        "Terraform", "Ansible", "Python", "Bash",
        "Prometheus", "Grafana", "SQL", "PostgreSQL"
    ];

    return (
        <section id="about" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        About <span className="text-purple-400">Me</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                I am a **DevOps Engineer** with almost 3 Years experience.
                                I specialize in designing scalable CI/CD pipelines, provisioning cloud infrastructure,
                                and implementing **MLOps** strategies to streamline machine learning lifecycles.
                            </p>
                            <p>
                                My expertise spans across AWS and Azure, Containerization (Docker/Kubernetes), and Infrastructure as Code.
                                I am passionate about automating specific development and ML workflows, ensuring high availability,
                                security, and observability.
                            </p>
                        </div>

                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                            <h3 className="text-xl font-semibold mb-6 text-white">Technical Arsenal</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-slate-700 hover:bg-purple-600/20 hover:text-purple-300 hover:border-purple-500/50 border border-transparent rounded-full text-sm text-gray-300 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
