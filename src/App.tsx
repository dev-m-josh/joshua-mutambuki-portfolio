import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

function App() {
    return (
        <ThemeProvider>
            <div className="min-w-full min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
                <Navbar />
                <main>
                    <Hero />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
