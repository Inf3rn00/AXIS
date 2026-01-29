import React from 'react';
import { BarChart3, Layers, Globe } from 'lucide-react';

/**
 * Features component for the Landing Page.
 * Showcases the core capabilities of the platform (The Index).
 * @returns {JSX.Element} The Features section component.
 */
const Features = () => {
    return (
        <section id="capabilities" className="relative py-24 px-6 md:px-16 bg-gray-50/50 dark:bg-gray-900/20">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="font-serif text-4xl font-bold text-axis-light-text dark:text-axis-dark-text mb-4">The Index</h2>
                        <p className="text-axis-light-secondary dark:text-axis-dark-secondary max-w-lg">Core capabilities designed for the modern enterprise.</p>
                    </div>

                    <p className="font-mono text-xs tracking-widest text-axis-light-secondary dark:text-axis-dark-secondary pb-1 border-b border-gray-200 dark:border-gray-700">Capabilities & Features</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="p-8 bg-white dark:bg-axis-dark-surface rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-gray-100 dark:border-gray-800">
                        <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                            <BarChart3 className="w-7 h-7" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3 text-axis-light-text dark:text-axis-dark-text">Live Analytics</h3>
                        <p className="text-sm text-axis-light-secondary dark:text-axis-dark-secondary leading-relaxed font-light">Real-time data visualization that feels less like a spreadsheet and more like a dashboard of the future.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-8 bg-white dark:bg-axis-dark-surface rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-gray-100 dark:border-gray-800">
                        <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                            <Layers className="w-7 h-7" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3 text-axis-light-text dark:text-axis-dark-text">Deep Integration</h3>
                        <p className="text-sm text-axis-light-secondary dark:text-axis-dark-secondary leading-relaxed font-light">Seamlessly connects with your existing workflows. A unified layer for all your business logic.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-8 bg-white dark:bg-axis-dark-surface rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-gray-100 dark:border-gray-800">
                        <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                            <Globe className="w-7 h-7" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3 text-axis-light-text dark:text-axis-dark-text">Global Access</h3>
                        <p className="text-sm text-axis-light-secondary dark:text-axis-dark-secondary leading-relaxed font-light">Access your ledger from anywhere in the world. Secure, fast, and reliably consistent.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
