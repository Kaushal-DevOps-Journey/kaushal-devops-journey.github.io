import { motion } from "framer-motion";

const techStack = [
    "AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Ansible",
    "Jenkins", "GitHub Actions", "Python", "Bash", "Prometheus", "Grafana",
    "Linux", "Git", "Maven", "SonarQube"
];

export default function TechStackMarquee() {
    return (
        <div className="py-10 bg-slate-950 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

            <div className="flex">
                <motion.div
                    className="flex gap-12 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                        <span
                            key={index}
                            className="text-2xl font-bold text-gray-500/50 uppercase tracking-widest hover:text-purple-400 transition-colors cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
