import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, Plus, Trash2 } from "lucide-react";

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    tags: string[];
    category: string;
}

export const Blog: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([
        {
            id: "1",
            title: "Learning React.js API Routes",
            excerpt: "My journey exploring React.js API routes and how they simplified my backend development process.",
            content:
                "React.js API routes have been a game-changer in my development workflow. They allow me to create serverless functions with ease...",
            date: "2025-01-15",
            readTime: "5 min read",
            tags: ["React.js", "API", "Backend"],
            category: "Development Tips",
        },
        {
            id: "2",
            title: "Why I Chose Self-Taught Development",
            excerpt:
                "Reflections on my decision to become a self-taught developer and the lessons learned along the way.",
            content:
                "The decision to teach myself programming was not taken lightly. It required discipline, dedication, and a lot of coffee...",
            date: "2025-01-10",
            readTime: "7 min read",
            tags: ["Personal Growth", "Self-Learning", "Career"],
            category: "Personal Growth",
        },
        {
            id: "3",
            title: "Building Scalable React Components",
            excerpt: "Best practices for creating reusable and maintainable React components in large applications.",
            content:
                "When building React applications, component architecture is crucial for maintainability and scalability...",
            date: "2025-01-08",
            readTime: "6 min read",
            tags: ["React", "Components", "Best Practices"],
            category: "Development Tips",
        },
    ]);

    const [isAddingPost, setIsAddingPost] = useState(false);
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [newPost, setNewPost] = useState<Omit<BlogPost, "id" | "date">>({
        title: "",
        excerpt: "",
        content: "",
        readTime: "",
        tags: [],
        category: "",
    });

    const categories = ["Development Tips", "Personal Growth", "Problem Solving", "Tutorials"];

    const handleAddPost = () => {
        if (newPost.title && newPost.excerpt && newPost.content) {
            const post: BlogPost = {
                ...newPost,
                id: Date.now().toString(),
                date: new Date().toISOString().split("T")[0],
            };
            setPosts([post, ...posts]);
            setNewPost({
                title: "",
                excerpt: "",
                content: "",
                readTime: "",
                tags: [],
                category: "",
            });
            setIsAddingPost(false);
        }
    };

    const handleDeletePost = (id: string) => {
        setPosts(posts.filter((p) => p.id !== id));
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <section id="blog" className="py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">My Blog</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                        Sharing insights, tips, and reflections from my development journey
                    </p>
                </motion.div>

                <div className="flex justify-center mb-8">
                    <button
                        onClick={() => setIsAddingPost(true)}
                        className="inline-flex items-center px-6 py-3 text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Write New Post
                    </button>
                </div>

                {isAddingPost && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-6 mb-8 bg-white border border-gray-200 shadow-lg dark:bg-gray-800 rounded-xl dark:border-gray-700"
                    >
                        <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                            Write New Blog Post
                        </h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Blog Post Title"
                                value={newPost.title}
                                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                                className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            />
                            <textarea
                                placeholder="Excerpt (brief summary)"
                                value={newPost.excerpt}
                                onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                                rows={3}
                                className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            />
                            <textarea
                                placeholder="Full content"
                                value={newPost.content}
                                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                                rows={8}
                                className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            />
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <select
                                    value={newPost.category}
                                    onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                                    className="px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                >
                                    <option value="">Select Category</option>
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat}>
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="text"
                                    placeholder="Read time (e.g., 5 min read)"
                                    value={newPost.readTime}
                                    onChange={(e) => setNewPost({ ...newPost, readTime: e.target.value })}
                                    className="px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                                <input
                                    type="text"
                                    placeholder="Tags (comma separated)"
                                    onChange={(e) =>
                                        setNewPost({ ...newPost, tags: e.target.value.split(",").map((s) => s.trim()) })
                                    }
                                    className="px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end mt-6 space-x-3">
                            <button
                                onClick={() => setIsAddingPost(false)}
                                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddPost}
                                className="px-6 py-2 text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
                            >
                                Publish Post
                            </button>
                        </div>
                    </motion.div>
                )}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-lg cursor-pointer dark:bg-gray-800 rounded-xl hover:shadow-2xl dark:border-gray-700"
                            onClick={() => setSelectedPost(post)}
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                                        {post.category}
                                    </span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDeletePost(post.id);
                                        }}
                                        className="p-1 text-red-500 transition-colors duration-200 rounded hover:bg-red-100 dark:hover:bg-red-900/30"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>

                                <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                                    {post.title}
                                </h3>

                                <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">{post.excerpt}</p>

                                <div className="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    <span className="mr-4">{formatDate(post.date)}</span>
                                    <Clock className="w-4 h-4 mr-1" />
                                    <span>{post.readTime}</span>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300"
                                        >
                                            <Tag className="w-3 h-3 mr-1" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Blog Post Modal */}
                {selectedPost && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
                        onClick={() => setSelectedPost(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                                    {selectedPost.category}
                                </span>
                                <button
                                    onClick={() => setSelectedPost(null)}
                                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                >
                                    ✕
                                </button>
                            </div>

                            <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                                {selectedPost.title}
                            </h1>

                            <div className="flex items-center mb-6 text-sm text-gray-500 dark:text-gray-400">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span className="mr-4">{formatDate(selectedPost.date)}</span>
                                <Clock className="w-4 h-4 mr-1" />
                                <span>{selectedPost.readTime}</span>
                            </div>

                            <div className="mb-6 prose dark:prose-invert max-w-none">
                                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                                    {selectedPost.content}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {selectedPost.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300"
                                    >
                                        <Tag className="w-3 h-3 mr-1" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};
