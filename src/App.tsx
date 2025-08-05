import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Blog } from "./components/Blog";

function App() {
    return (
        <ThemeProvider>
            <div className="min-w-full min-h-screen text-gray-900 transition-colors duration-300 bg-white dark:bg-gray-900 dark:text-white">
                <Navbar />
                <main>
                    <Hero />
                    <Blog />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
