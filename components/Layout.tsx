import React from 'react';
import SkipLink from './SkipLink';
import ThemeToggle from './ThemeToggle';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <SkipLink />
            <ThemeToggle />
            <div className="min-h-screen bg-background text-text-primary relative overflow-hidden transition-colors duration-300 font-sans">
                {/* Background shapes - only visible in dark mode */}
                <div className="dark:block hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>

                {/* Light mode background */}
                <div className="light:block hidden absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60"></div>

                <main id="main-content" className="relative z-10 container mx-auto px-4 py-8">
                    {children}
                </main>
            </div>
        </>
    );
};

export default Layout;
