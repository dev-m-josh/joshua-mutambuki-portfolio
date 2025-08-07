import React from "react";
import { motion } from "framer-motion";
// import { ImageUpload } from "./ImageUpload";

export const About: React.FC = () => {
    // const [profileImage, setProfileImage] = useState<string | null>(null);

    const techStack = {
        Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Typescript"],
        Backend: ["Node.js", "Express"],
        Database: ["PostgreSQL", "SQL Server"],
        Tools: ["Git", "GitHub", "Vercel", "Postman", "Visual Studio Code", "Render"],
        Extras: ["Framer Motion", "React Hook Form"],
    };

    return (
        <section id="about" className="py-10 pt-5 pb-8 bg-gray-50 dark:bg-gray-800/50">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">About Me</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        Learn more about my journey as a self-taught developer
                    </p>
                </motion.div>

                <div className="grid items-center gap-12 mt-0 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Journey</h3>
                            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                                As a self-taught full stack developer, I've dedicated myself to mastering modern web
                                technologies through hands-on projects and continuous learning. My passion lies in
                                creating scalable, user-friendly applications that solve real-world problems.
                            </p>
                            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                                I believe in writing clean, maintainable code and staying up-to-date with the latest
                                industry trends and best practices. Every project is an opportunity to learn something
                                new and push the boundaries of what's possible.
                            </p>
                        </div>

                        <div className="mt-8">
                            <h4 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                                Profile Picture
                            </h4>
                            <div className="w-64 h-64">
                                {/* <ImageUpload
                                    currentImage={profileImage}
                                    onImageChange={setProfileImage}
                                    placeholder="Upload Profile Picture"
                                    className="w-full h-full"
                                /> */}
                                <img src="./Pasted image.png" alt="Profile Picture" className="w-full h-full" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="p-6 space-y-4 rounded-lg shadow-md bg-slate-100 dark:bg-gray-700/50"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Tech Stack</h3>

                        {Object.entries(techStack).map(([category, technologies]) => (
                            <div key={category} className="space-y-3">
                                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">{category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-sm font-medium text-gray-700 transition-shadow duration-200 bg-white border border-gray-200 rounded-full shadow-sm dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 hover:shadow-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
