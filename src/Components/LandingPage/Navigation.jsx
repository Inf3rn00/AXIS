import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Navigation component for the Landing Page.
 * Displays the logo, navigation links, and action buttons (Sign In, Get Started).
 * @returns {JSX.Element} The Navigation bar component.
 */
const Navigation = () => {
    const navigate = useNavigate();

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-axis-dark-bg/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="font-serif font-bold text-2xl tracking-tighter text-axis-light-text dark:text-axis-dark-text">AXIS</div>
                </div>
                <div className="hidden md:flex gap-8 items-center text-sm font-medium text-axis-light-secondary dark:text-axis-dark-secondary">
                    <a href="#capabilities" className="hover:text-axis-light-primary dark:hover:text-axis-dark-primary transition-colors">The Index</a>
                    <a href="#ledger" className="hover:text-axis-light-primary dark:hover:text-axis-dark-primary transition-colors">Ledger</a>
                    <a href="#manifesto" className="hover:text-axis-light-primary dark:hover:text-axis-dark-primary transition-colors">Manifesto</a>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/login')}
                        className="text-sm font-semibold hover:text-axis-light-primary dark:hover:text-axis-dark-primary transition-colors"
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => navigate('/signup')}
                        className="px-5 py-2.5 bg-axis-light-accent dark:bg-axis-dark-accent text-white dark:text-white text-sm font-medium rounded-lg hover:shadow-lg hover:bg-opacity-90 transition-all ml-4"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
