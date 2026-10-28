import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CalendarDays, Clock3, Code2, Tag, X } from "lucide-react";

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string[];
    date: string;
    readTime: string;
    tags: string[];
    category: string;
}

const blogPosts: BlogPost[] = [
    {
        id: "self-taught-web-development",
        title: "Why I Chose Self-Taught Web Development",
        excerpt:
            "My journey into web development, learning through projects, and building practical skills one step at a time.",
        content: [
            "Choosing the self-taught path into web development has been a journey of curiosity, discipline, challenges, and continuous learning. I wanted to understand how websites and applications work, from the user interface to the backend systems that power them.",
            "One of the biggest advantages of learning independently is the freedom to explore technologies and apply what I learn through practical projects. Instead of focusing only on theory, I work on building applications that help me understand how different parts of software fit together.",
            "Building projects like My-Cyber has helped me put these skills into practice. Working with React, TypeScript, Node.js, Express, PostgreSQL, and other tools has taught me that developing software involves more than writing code. It requires problem-solving, debugging, planning, and learning how to build reliable features.",
            "The journey has not always been easy. Some concepts take time to understand, and bugs often require patience and careful investigation. These challenges have taught me to break problems into smaller steps, read documentation, test solutions, and keep improving rather than give up when something doesn't work.",
            "My goal is to continue growing as a web developer by building meaningful projects, strengthening my fundamentals, and learning from feedback and real-world development challenges.",
            "For me, being self-taught isn't about knowing everything. It's about being willing to learn, solve problems, and keep getting better.",
        ],
        date: "2026-10-29",
        readTime: "5 min read",
        tags: ["Self-Learning", "Web Development", "Career Growth", "Problem Solving"],
        category: "Personal Growth",
    },
    {
        id: "my-cyber-full-stack",
        title: "Building My-Cyber: Connecting the Frontend and Backend",
        excerpt:
            "A look at how I approached building a business management platform with React, TypeScript, Express, and PostgreSQL.",
        content: [
            "My-Cyber is a full-stack business management application designed to help cyber cafés and small businesses manage everyday operations. Building it gave me an opportunity to bring frontend development, backend APIs, database design, and third-party services together in one project.",
            "On the frontend, I use React and TypeScript to build reusable interface components and keep data handling more predictable. The frontend communicates with an Express.js backend through REST APIs, separating the user interface from business logic.",
            "PostgreSQL stores the application's structured data, while Drizzle ORM provides a typed way to work with database queries and schemas. This separation makes it easier to organize features such as product and service management, inventory tracking, and pricing.",
            "The project has also involved practical integration work, including Cloudinary for image uploads and authentication with role-based access control. Each integration introduced its own considerations around validation, errors, and keeping the user experience clear.",
            "My biggest takeaway is that a full-stack application is more than a collection of technologies. The API contracts, data model, validation, security, and frontend states all need to work together. Building My-Cyber has helped me practice those connections in a realistic project.",
        ],
        date: "2026-10-29",
        readTime: "5 min read",
        tags: ["React", "TypeScript", "Express.js", "PostgreSQL"],
        category: "Projects",
    },
    {
        id: "redis-email-rate-limiting",
        title: "Using Redis to Rate-Limit Email Requests",
        excerpt:
            "Why limiting repeated password-reset and account-setup requests matters, and where Redis can fit into a backend.",
        content: [
            "Email-based account flows are useful, but they can be abused if a user or automated script repeatedly triggers them. Password-reset and account-setup endpoints should therefore have sensible limits rather than allowing an unlimited number of requests.",
            "Redis is an in-memory data store that can support rate limiting by keeping request counters and expiration data. A rate limiter can check the relevant counter before allowing an endpoint to continue. Once a configured threshold is reached, the application can reject additional requests temporarily, commonly with HTTP 429 Too Many Requests.",
            "For a distributed application, storing rate-limit state in Redis can be more consistent than keeping counters only in an individual server process. This is especially useful when more than one backend instance may handle requests.",
            "The exact policy matters. Limits should be chosen for the application's needs, and the implementation should consider which identifier is counted, how windows expire, and what response is returned when the limit is exceeded. Sensitive endpoints may need more than one layer of protection.",
            "Rate limiting is one part of protecting email workflows, not a complete security solution. It should complement input validation, safe token handling, monitoring, and clear user-facing messages. In My-Cyber, this is a practical example of using backend infrastructure to help prevent excessive email requests.",
        ],
        date: "2026-10-27",
        readTime: "4 min read",
        tags: ["Redis", "Node.js", "Security", "Rate Limiting"],
        category: "Development Tips",
    },
    {
        id: "cloudinary-image-uploads",
        title: "Replacing Image URLs with Cloudinary Uploads",
        excerpt:
            "Lessons from adding file uploads, validating images, and saving hosted image URLs for products and services.",
        content: [
            "As a business application grows, asking someone to paste an image URL is not always the most convenient workflow. For My-Cyber, I wanted users to choose an image file when creating or updating a product or service.",
            "The frontend sends the form fields and selected file as multipart form data. On the Express.js backend, Multer handles the incoming upload in memory and applies limits such as the maximum file size and the accepted image MIME types.",
            "The backend then sends the file to Cloudinary and receives a secure hosted URL. The application can store that URL with the product or service record instead of storing the image bytes directly in PostgreSQL.",
            "This flow needs validation and error handling at each step. The server should enforce file-size and file-type restrictions rather than trusting the browser alone, and it should respond clearly if the upload provider fails. The interface should also make it clear which image is selected and whether an upload succeeded.",
            "The main lesson was to treat uploads as a complete feature rather than just a file input. A reliable experience includes frontend feedback, backend validation, cloud storage integration, and correctly associating the resulting URL with the saved record.",
        ],
        date: "2026-10-25",
        readTime: "4 min read",
        tags: ["Cloudinary", "Multer", "Express.js", "File Uploads"],
        category: "Tutorials",
    },
    {
        id: "learning-through-projects",
        title: "What Building Projects Has Taught Me About Learning to Code",
        excerpt:
            "How working through real features helped me connect individual programming concepts into a complete application.",
        content: [
            "Learning software development involves more than understanding syntax. Concepts become clearer when I have to use them to solve a concrete problem, debug unexpected behavior, and make different parts of an application work together.",
            "Building projects has helped me practice breaking larger requirements into smaller tasks. A feature such as uploading a product image involves a user interface, request formatting, server-side validation, an external storage service, and database updates. Thinking through each boundary makes the work easier to reason about.",
            "Debugging has also become an important part of the process. Reading error messages, checking network requests, inspecting server logs, and testing assumptions often reveal more than simply rewriting code until it works.",
            "I am learning to value maintainability alongside getting a feature working. Clear naming, reusable components, validation, and predictable API responses make future changes easier. Version control also helps me make changes in smaller, more manageable steps.",
            "My approach is to keep building, document what I learn, and be honest about what I still need to improve. Each project gives me a chance to turn theory into practice and develop better habits as a software developer.",
        ],
        date: "2026-10-22",
        readTime: "3 min read",
        tags: ["Learning", "Problem Solving", "Software Development"],
        category: "Personal Growth",
    },
];

const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];

const formatDate = (dateString: string) =>
    new Date(`${dateString}T12:00:00`).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

export const Blog: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [activeCategory, setActiveCategory] = useState("All");
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    const filteredPosts =
        activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory);

    useEffect(() => {
        if (!selectedPost) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setSelectedPost(null);
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedPost]);

    return (
        <section id="blog" aria-labelledby="blog-heading" className="sm:py-4">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-2 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-blue-700 border border-blue-200 rounded-full bg-blue-50 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
                        <Code2 className="w-4 h-4" aria-hidden="true" />
                        Notes from my development journey
                    </div>

                    <h2
                        id="blog-heading"
                        className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
                    >
                        My Blog
                    </h2>

                    <p className="max-w-2xl mx-auto text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
                        Practical lessons, project breakdowns, and reflections on building web applications and growing
                        as a developer.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-2 mb-10" aria-label="Filter blog posts by category">
                    {categories.map((category) => {
                        const isActive = activeCategory === category;

                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                aria-pressed={isActive}
                                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950 ${
                                    isActive
                                        ? "bg-blue-600 text-white shadow-sm"
                                        : "border border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-700 dark:hover:text-blue-300"
                                }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.07 }}
                            viewport={{ once: true, amount: 0.15 }}
                            whileHover={{ y: -4 }}
                            className="flex flex-col h-full overflow-hidden transition-shadow bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
                        >
                            <div className="flex flex-col flex-1 p-6">
                                <div className="flex items-center justify-between gap-3 mb-4">
                                    <span className="px-3 py-1 text-xs font-semibold text-blue-700 rounded-full bg-blue-50 dark:bg-blue-950/50 dark:text-blue-300">
                                        {post.category}
                                    </span>
                                    <span className="flex items-center gap-1 text-xs text-gray-500 shrink-0 dark:text-gray-400">
                                        <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900 dark:text-white">
                                    {post.title}
                                </h3>

                                <p className="flex-1 mb-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                    {post.excerpt}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center gap-1 px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-300"
                                        >
                                            <Tag className="w-3 h-3" aria-hidden="true" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                                    <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                                        <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                                        {formatDate(post.date)}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() => setSelectedPost(post)}
                                        className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                                        aria-label={`Read article: ${post.title}`}
                                    >
                                        Read article
                                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <p className="py-12 text-center text-gray-600 dark:text-gray-400">
                        No articles found in this category.
                    </p>
                )}
            </div>

            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-sm sm:p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onMouseDown={(event) => {
                            if (event.target === event.currentTarget) {
                                setSelectedPost(null);
                            }
                        }}
                    >
                        <motion.section
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="blog-dialog-title"
                            aria-describedby="blog-dialog-excerpt"
                            initial={{ opacity: 0, y: 16, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900 sm:p-9"
                        >
                            <div className="flex items-start justify-between gap-4 mb-6">
                                <span className="px-3 py-1 text-xs font-semibold text-blue-700 rounded-full bg-blue-50 dark:bg-blue-950/50 dark:text-blue-300">
                                    {selectedPost.category}
                                </span>

                                <button
                                    ref={closeButtonRef}
                                    type="button"
                                    onClick={() => setSelectedPost(null)}
                                    aria-label="Close article"
                                    className="p-2 text-gray-500 transition-colors rounded-full hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:bg-gray-800 dark:hover:text-white"
                                >
                                    <X className="w-5 h-5" aria-hidden="true" />
                                </button>
                            </div>

                            <h2
                                id="blog-dialog-title"
                                className="mb-4 text-2xl font-bold leading-tight text-gray-900 dark:text-white sm:text-3xl"
                            >
                                {selectedPost.title}
                            </h2>

                            <p
                                id="blog-dialog-excerpt"
                                className="mb-5 text-base leading-7 text-gray-600 dark:text-gray-300"
                            >
                                {selectedPost.excerpt}
                            </p>

                            <div className="flex flex-wrap items-center pb-5 text-sm text-gray-500 border-b border-gray-200 mb-7 gap-x-5 gap-y-2 dark:border-gray-800 dark:text-gray-400">
                                <span className="inline-flex items-center gap-2">
                                    <CalendarDays className="w-4 h-4" aria-hidden="true" />
                                    {formatDate(selectedPost.date)}
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <Clock3 className="w-4 h-4" aria-hidden="true" />
                                    {selectedPost.readTime}
                                </span>
                            </div>

                            <div className="space-y-5 text-base leading-8 text-gray-700 dark:text-gray-300">
                                {selectedPost.content.map((paragraph, index) => (
                                    <p key={`${selectedPost.id}-${index}`}>{paragraph}</p>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 pt-6 mt-8 border-t border-gray-200 dark:border-gray-800">
                                {selectedPost.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.section>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Blog;
