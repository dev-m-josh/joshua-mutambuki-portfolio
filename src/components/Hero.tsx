import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";

export const Hero: React.FC = () => {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="flex items-center justify-center px-4 pt-20 mt-10 pb-10">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white"
                    >
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                            Joshua
                        </span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300"
                    >
                        A Full Stack Web Developer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        I build real-world applications using React, Node.js, and PostgreSQL. Focused on clean code,
                        scalable design, and solving real problems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                    >
                        <button
                            onClick={() => scrollToSection("#projects")}
                            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            View Projects
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>

                        <button
                            onClick={() => scrollToSection("#blog")}
                            className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-105"
                        >
                            Read My Blog
                        </button>

                        <button
                            onClick={() => scrollToSection("#contact")}
                            className="inline-flex items-center px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105"
                        >
                            <Mail className="mr-2 w-5 h-5" />
                            Contact Me
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex justify-center space-x-6 pt-8"
                    >
                        <a
                            href="https://github.com/dev-m-josh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                            <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                        </a>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=mutambukijoshua2@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                            <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
