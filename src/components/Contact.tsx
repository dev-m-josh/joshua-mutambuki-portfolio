import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle } from "lucide-react";

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const Contact: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactForm>();

    const onSubmit = async (data: ContactForm) => {
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Form submitted:", data);
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "mutambukijoshua2@gmail.com",
            href: "mailto:mutambukijoshua2@gmail.com",
        },
        {
            icon: Github,
            label: "GitHub",
            value: "github.com/dev-m-josh",
            href: "https://github.com/joshuamutambuki",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "Connect with me",
            href: "https://linkedin.com/in/joshuamutambuki",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Available for Remote Work",
            href: null,
        },
    ];

    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Ready to work together? Let's discuss your next project or just say hello!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                I'm always open to discussing new opportunities, interesting projects, or just having a
                                chat about web development. Feel free to reach out through any of the channels below.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                                >
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                                        <info.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            {info.label}
                                        </h4>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                target={info.href.startsWith("http") ? "_blank" : undefined}
                                                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span className="text-gray-900 dark:text-white">{info.value}</span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Message</h3>

                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg flex items-center"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                                    <span className="text-green-700 dark:text-green-300">
                                        Message sent successfully! I'll get back to you soon.
                                    </span>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                        >
                                            Name *
                                        </label>
                                        <input
                                            {...register("name", { required: "Name is required" })}
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                            placeholder="Your Name"
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                        >
                                            Email *
                                        </label>
                                        <input
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address",
                                                },
                                            })}
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Subject *
                                    </label>
                                    <input
                                        {...register("subject", { required: "Subject is required" })}
                                        type="text"
                                        id="subject"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                        placeholder="What's this about?"
                                    />
                                    {errors.subject && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.subject.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        {...register("message", { required: "Message is required" })}
                                        id="message"
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                        placeholder="Tell me about your project or just say hello!"
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                                            {errors.message.message}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
