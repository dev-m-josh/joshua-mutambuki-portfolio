import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

export const Resume: React.FC = () => {
    const experiences = [
        {
            title: "Full Stack Developer",
            company: "Blogging Platform",
            period: "2025",
            location: "Personal Project",
            description: [
                "Built a CRUD blog app using React, Node.js, and PostgreSQL",
                "Implemented user authentication and role-based permissions",
                "Deployed via Vercel with custom API routes",
                "Integrated rich text editor and comment system",
            ],
            technologies: ["React", "Node.js", "PostgreSQL", "Express", "JWT"],
        },
        {
            title: "Full Stack Developer",
            company: "E-Commerce Platform",
            period: "2024 - 2025",
            location: "Personal Project",
            description: [
                "Developed a complete e-commerce solution with payment processing",
                "Implemented inventory management and order tracking",
                "Built responsive UI with modern design principles",
                "Integrated Stripe for secure payment processing",
            ],
            technologies: ["Next.js", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL"],
        },
        {
            title: "Project-Based Learning",
            company: "Self-Directed Education",
            period: "Ongoing",
            location: "Remote",
            description: [
                "Completed over 10 mini-projects focusing on clean code and REST APIs",
                "Mastered modern frontend frameworks and backend technologies",
                "Practiced Test-Driven Development and code optimization",
                "Built responsive web applications with focus on user experience",
            ],
            technologies: ["JavaScript", "React", "Node.js", "SQL", "Git", "Agile"],
        },
    ];

    const skills = [
        { category: "Frontend", items: ["JavaScript", "TypeScript", "React", "Tailwind CSS", "HTML5", "CSS3"] },
        { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Authentication", "JWT"] },
        { category: "Database", items: ["PostgreSQL", "SQL Server", "Database Design"] },
        { category: "Tools & Others", items: ["Git", "GitHub", "Vercel", "Postman", "VS Code", "Responsive Design"] },
    ];

    return (
        <section id="resume" className="py-10 bg-gray-50 dark:bg-gray-800/50">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-8 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                        Resume & Experience
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        My journey through self-directed learning and project development
                    </p>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-3">
                    {/* Experience Section */}
                    <div className="lg:col-span-2">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mb-8 text-2xl font-bold text-gray-900 dark:text-white"
                        >
                            Experience
                        </motion.h3>

                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-white border border-gray-200 shadow-lg dark:bg-gray-800 rounded-xl dark:border-gray-700"
                                >
                                    <div className="flex flex-col mb-4 md:flex-row md:items-center md:justify-between">
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                                {exp.title}
                                            </h4>
                                            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div className="flex flex-col mt-2 md:items-end md:mt-0">
                                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {exp.period}
                                            </div>
                                            <div className="flex items-center mt-1 text-sm text-gray-600 dark:text-gray-400">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                {exp.location}
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="mb-4 space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                                                <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mb-8 text-2xl font-bold text-gray-900 dark:text-white"
                        >
                            Skills
                        </motion.h3>

                        <div className="space-y-6">
                            {skills.map((skillGroup, index) => (
                                <motion.div
                                    key={skillGroup.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-white border border-gray-200 shadow-lg dark:bg-gray-800 rounded-xl dark:border-gray-700"
                                >
                                    <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                                        {skillGroup.category}
                                    </h4>
                                    <div className="space-y-2">
                                        {skillGroup.items.map((skill) => (
                                            <div key={skill} className="flex items-center">
                                                <div className="w-2 h-2 mr-3 bg-teal-500 rounded-full"></div>
                                                <span className="text-gray-600 dark:text-gray-400">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="mt-8"
                        >
                            <a
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 font-semibold text-white transition-all duration-200 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 hover:scale-105 hover:shadow-xl"
                            >
                                Download Resume
                                <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
