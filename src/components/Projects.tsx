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
            title: "Hotel Management System",
            description:
                "A full-stack CRUD bHotel Management System with user authentication and role-based permissions.",
            stack: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS"],
            githubUrl: "https://github.com/dev-m-josh/final-project",
            liveUrl: "https://final-project-plum-five.vercel.app/",
            image: "hotel management.png",
            tags: ["#React", "#PostgreSQL", "#CRUD", "#Authentication"],
        },
        {
            id: "2",
            title: "E-Commerce Store",
            description: "Modern e-commerce platform with payment integration and inventory management.",
            stack: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS"],
            githubUrl: "https://github.com/joshuamutambuki/ecommerce-store",
            liveUrl: "https://ecommerce-demo.vercel.app",
            image: null,
            tags: ["#React", "#PostgreSQL", "#CRUD", "#Authentication"],
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

    // const handleDeleteProject = (id: string) => {
    //     setProjects(projects.filter((p) => p.id !== id));
    // };

    // const handleImageChange = (projectId: string, imageDataUrl: string | null) => {
    //     setProjects(projects.map((p) => (p.id === projectId ? { ...p, image: imageDataUrl } : p)));
    // };

    return (
        <section id="projects" className="py-10 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A showcase of my recent work and side projects
                    </p>
                </motion.div>

                {/* <div className="flex justify-center mb-4">
                    <button
                        onClick={() => setIsAddingProject(true)}
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Add New Project
                    </button>
                </div> */}

                {isAddingProject && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-8 border border-gray-200 dark:border-gray-700"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Add New Project</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Project Title"
                                    value={newProject.title}
                                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                />
                                <textarea
                                    placeholder="Project Description"
                                    value={newProject.description}
                                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                />
                                <input
                                    type="url"
                                    placeholder="GitHub URL"
                                    value={newProject.githubUrl}
                                    onChange={(e) => setNewProject({ ...newProject, githubUrl: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                />
                                <input
                                    type="url"
                                    placeholder="Live Demo URL"
                                    value={newProject.liveUrl}
                                    onChange={(e) => setNewProject({ ...newProject, liveUrl: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                        <div className="flex justify-end space-x-3 mt-6">
                            <button
                                onClick={() => setIsAddingProject(false)}
                                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddProject}
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                            >
                                Add Project
                            </button>
                        </div>
                    </motion.div>
                )}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                        >
                            <div className="relative h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-fit-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-lg mx-auto mb-2"></div>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                                No image uploaded
                                            </p>
                                        </div>
                                    </div>
                                )}
                                {/* <div className="absolute top-2 right-2 flex space-x-1">
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
                                            className="w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-200"
                                        />
                                    </div>
                                </div> */}
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-1 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="w-full flex justify-between">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                                    >
                                        <Github className="w-4 h-4 mr-2" />
                                        Code
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
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
