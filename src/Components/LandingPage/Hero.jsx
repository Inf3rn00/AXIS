import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/**
 * Hero component for the Landing Page.
 * Displays the main headline, value proposition, calls to action, and the visual abstract card.
 * @returns {JSX.Element} The Hero section component.
 */
const Hero = () => {
    const navigate = useNavigate();

    return (
        <header className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[90vh]">
            <div className="lg:col-span-7 flex flex-col justify-center mt-10">
                <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-[1.1] text-axis-light-text dark:text-axis-dark-text">
                    The Operating System <br />
                    <span className="text-axis-light-secondary dark:text-axis-dark-secondary italic font-light">for Modern Business.</span>
                </h1>

                <p className="text-lg md:text-xl font-light text-axis-light-secondary dark:text-axis-dark-secondary max-w-xl leading-relaxed mb-10">
                    Bring order to chaos. Axis transforms scattered data into a single, authoritative source of truth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={() => navigate('/signup')}
                        className="px-8 py-4 bg-axis-light-accent dark:bg-axis-dark-accent text-white text-lg font-medium rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3"
                    >
                        Request Access
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <button className="px-8 py-4 bg-white dark:bg-axis-dark-surface border border-gray-200 dark:border-gray-700 text-axis-light-text dark:text-axis-dark-text rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all text-lg font-medium shadow-sm hover:shadow-md">
                        Read the documentation
                    </button>
                </div>
            </div>

            {/* Right: Visual Abstract - Floating Card */}
            <div className="lg:col-span-5 relative">
                <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="relative z-10 p-6 rounded-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <img src="./Business solution-pana.png"  className="bg-transparent" alt="" />
                </div>
            </div>
        </header>
    );
};

export default Hero;
