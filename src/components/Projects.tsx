import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
// import { ImageUpload } from "./ImageUpload";

interface Project {
    id: string;
    title: string;
    description: string;
    stack: string[];
    githubUrl: string;
    liveUrl: string;
    image: string | null;
    tags: string[];
}

export const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([
        {
            id: "1",
            title: "My-Cyber",
            description:
                "Full-stack business management platform for cyber cafés and small businesses, featuring product and service management, inventory tracking, pricing, profit calculations, image uploads, and role-based access control.",
            stack: [
                "React",
                "TypeScript",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "Drizzle ORM",
                "Docker",
                "Redis",
                "Cloudinary",
                "Tailwind CSS",
            ],
            githubUrl: "https://github.com/dev-m-josh/my-cyber",
            liveUrl: "https://my-cyber-hub-roan.vercel.app",
            image: "my-cyber.png",
            tags: ["#FullStack", "#React", "#TypeScript", "#PostgreSQL", "#InventoryManagement", "#Authentication"],
        },

        {
            id: "2",
            title: "Hotel Management System",
            description:
                "A full-stack CRUD hotel management system with user authentication and role-based permissions.",
            stack: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS"],
            githubUrl: "https://github.com/dev-m-josh/final-project",
            liveUrl: "https://final-project-plum-five.vercel.app/",
            image: "hotel management.png",
            tags: ["#React", "#PostgreSQL", "#CRUD", "#Authentication"],
        },
        {
            id: "3",
            title: "CyberHub",
            description:
                "A responsive cyber-café website showcasing digital services, pricing, contact information, and easy customer access through WhatsApp and Email.",
            stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
            githubUrl: "https://github.com/dev-m-josh/reminder-app",
            liveUrl: "https://reminder-app-two-phi.vercel.app/",
            image: "cyberhub.png",
            tags: ["#React", "#TypeScript", "#TailwindCSS", "#Vite"],
        },
        {
            id: "4",
            title: "Reminder App",
            description:
                "A responsive reminder application for creating and managing personal reminders with a clean and intuitive user interface.",
            stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
            githubUrl: "https://github.com/dev-m-josh/reminder-app",
            liveUrl: "https://reminder-app-two-phi.vercel.app/",
            image: "reminder.png",
            tags: ["#React", "#TypeScript", "#TailwindCSS", "#Vite"],
        },
    ]);

    const [isAddingProject, setIsAddingProject] = useState(false);
    const [newProject, setNewProject] = useState<Omit<Project, "id">>({
        title: "",
        description: "",
        stack: [],
        githubUrl: "",
        liveUrl: "",
        image: null,
        tags: [],
    });

    const handleAddProject = () => {
        if (newProject.title && newProject.description) {
            const project: Project = {
                ...newProject,
                id: Date.now().toString(),
            };
            setProjects([...projects, project]);
            setNewProject({
                title: "",
                description: "",
                stack: [],
                githubUrl: "",
                liveUrl: "",
                image: null,
                tags: [],
            });
            setIsAddingProject(false);
        }
    };

    return (
        <section id="projects" className="py-10 bg-gray-50 dark:bg-gray-800/50">
            <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-6 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">My Projects</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        A showcase of my recent work and side projects
                    </p>
                </motion.div>

                {/* <div className="flex justify-center mb-4">
                    <button
                        onClick={() => setIsAddingProject(true)}
                        className="inline-flex items-center px-6 py-3 text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Add New Project
                    </button>
                </div> */}

                {isAddingProject && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-6 mb-8 bg-white border border-gray-200 shadow-lg dark:bg-gray-800 rounded-xl dark:border-gray-700"
                    >
                        <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Add New Project</h3>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Project Title"
                                    value={newProject.title}
                                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                                    className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                                <textarea
                                    placeholder="Project Description"
                                    value={newProject.description}
                                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                                    rows={3}
                                    className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                                <input
                                    type="text"
                                    placeholder="Stack (comma separated)"
                                    onChange={(e) =>
                                        setNewProject({
                                            ...newProject,
                                            stack: e.target.value.split(",").map((s) => s.trim()),
                                        })
                                    }
                                    className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                                <input
                                    type="url"
                                    placeholder="GitHub URL"
                                    value={newProject.githubUrl}
                                    onChange={(e) => setNewProject({ ...newProject, githubUrl: e.target.value })}
                                    className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                                <input
                                    type="url"
                                    placeholder="Live Demo URL"
                                    value={newProject.liveUrl}
                                    onChange={(e) => setNewProject({ ...newProject, liveUrl: e.target.value })}
                                    className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                                <input
                                    type="text"
                                    placeholder="Tags (comma separated, e.g., #React, #Node)"
                                    onChange={(e) =>
                                        setNewProject({
                                            ...newProject,
                                            tags: e.target.value.split(",").map((s) => s.trim()),
                                        })
                                    }
                                    className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                            <div>
                                <h4 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Project Screenshot
                                </h4>
                                <div className="h-48">
                                    {/* <ImageUpload
                                        currentImage={newProject.image}
                                        onImageChange={(image) => setNewProject({ ...newProject, image })}
                                        placeholder="Upload Screenshot"
                                        className="w-full h-full"
                                    /> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-6 space-x-3">
                            <button
                                onClick={() => setIsAddingProject(false)}
                                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddProject}
                                className="px-6 py-2 text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
                            >
                                Add Project
                            </button>
                        </div>
                    </motion.div>
                )}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-lg dark:bg-gray-800 rounded-xl hover:shadow-2xl dark:border-gray-700"
                        >
                            <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-fit-cover"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center w-full h-full">
                                        <div className="text-center">
                                            <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 rounded-lg dark:bg-gray-600"></div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                No image uploaded
                                            </p>
                                        </div>
                                    </div>
                                )}
                                {/* <div className="absolute flex space-x-1 top-2 right-2">
                                    <button
                                        onClick={() => handleDeleteProject(project.id)}
                                        className="p-1.5 bg-red-500 text-white rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200"
                                    >
                                        <Trash2 className="w-3 h-3" />
                                    </button>
                                </div> */}
                                {/* <div className="absolute bottom-2 left-2">
                                    <div className="w-24 h-12">
                                        <ImageUpload
                                            currentImage={project.image}
                                            onImageChange={(image) => handleImageChange(project.id, image)}
                                            placeholder="+"
                                            className="w-full h-full transition-opacity duration-200 opacity-0 hover:opacity-100"
                                        />
                                    </div>
                                </div> */}
                            </div>

                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded dark:bg-blue-900/30 dark:text-blue-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-1 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded dark:text-gray-400 dark:bg-gray-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between w-full">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-4 py-2 text-gray-700 transition-colors duration-200 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                    >
                                        <Github className="w-4 h-4 mr-2" />
                                        Code
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-4 py-2 text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
