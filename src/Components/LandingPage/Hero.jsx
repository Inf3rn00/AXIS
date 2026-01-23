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
        <header className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[90vh]">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
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

                <div className="relative z-10 bg-white dark:bg-axis-dark-surface p-6 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {/* Main Chart: Unified Index */}
                        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg w-full border border-gray-100 dark:border-gray-800">
                            <div className="flex justify-between items-end mb-4">
                                <div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Unified Data Index</div>
                                    <div className="text-2xl font-serif font-bold text-slate-900 dark:text-white">42,891,024</div>
                                </div>
                                <div className="text-emerald-500 text-xs font-bold bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">Live Sync</div>
                            </div>
                            {/* Simple SVG Line Chart */}
                            <div className="h-16 w-full overflow-hidden relative">
                                <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="fillGradient" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                                            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0 35 C 20 35, 30 15, 50 20 S 70 5, 100 0" fill="none" stroke="#10b981" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                                    <path d="M0 35 C 20 35, 30 15, 50 20 S 70 5, 100 0 V 40 H 0 Z" fill="url(#fillGradient)" stroke="none" />
                                </svg>
                            </div>
                        </div>

                        {/* Secondary Metrics */}
                        <div className="flex gap-4">
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg w-1/2 border border-blue-100 dark:border-blue-900/20">
                                <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-2">Ingestion</div>
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="h-1.5 flex-1 bg-blue-200 dark:bg-blue-800/50 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500 w-3/4 rounded-full"></div>
                                    </div>
                                    <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold">Active</span>
                                </div>
                                <div className="text-[10px] text-slate-500">Transforming scattered data.</div>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg w-1/2 border border-gray-100 dark:border-gray-800">
                                <div className="text-xs text-slate-500 font-semibold mb-1">Truth Score</div>
                                <div className="text-lg font-bold text-slate-800 dark:text-slate-200">100%</div>
                                <div className="text-[10px] text-emerald-500 font-medium flex items-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></div>
                                    Authoritative
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
