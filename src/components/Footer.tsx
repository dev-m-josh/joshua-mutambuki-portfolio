import React from "react";
import { motion } from "framer-motion";
import { Code, Github, Mail, ExternalLink, Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export const Footer: React.FC = () => {
    const { isDark, toggleTheme } = useTheme();

    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Resume", href: "#resume" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/dev-m-josh",
            icon: Github,
        },
        {
            name: "Email",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=mutambukijoshua2@gmail.com",
            icon: Mail,
        },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="bg-gray-900 dark:bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 mb-4"
                        >
                            <div className="p-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg">
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold">Joshua Mutambuki</span>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-gray-400 leading-relaxed mb-6 max-w-md"
                        >
                            A Full Stack Developer passionate about creating scalable web applications with
                            clean code and modern design.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-4"
                        >
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="p-2 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-200"
                                    aria-label={link.name}
                                >
                                    <link.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg font-semibold mb-4"
                        >
                            Quick Links
                        </motion.h3>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-2"
                        >
                            {footerLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.href)}
                                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </motion.div>
                    </div>

                    {/* Settings */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg font-semibold mb-4"
                        >
                            Settings
                        </motion.h3>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="space-y-3"
                        >
                            <button
                                onClick={toggleTheme}
                                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                {isDark ? (
                                    <>
                                        <Sun className="w-4 h-4" />
                                        <span>Light Mode</span>
                                    </>
                                ) : (
                                    <>
                                        <Moon className="w-4 h-4" />
                                        <span>Dark Mode</span>
                                    </>
                                )}
                            </button>
                            <a
                                href="https://github.com/joshuamutambuki/portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span>View Source</span>
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                >
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Joshua Mutambuki. Built with React, TypeScript and Tailwind CSS. Deployed on
                        Vercel.
                    </p>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <span className="text-gray-400 text-sm">Made with ❤️ in Kenya</span>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};
