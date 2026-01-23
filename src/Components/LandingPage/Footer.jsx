import React from 'react';

/**
 * Footer component for the Landing Page.
 * Displays various links grouped by category (Platform, Company) and copyright info.
 * @returns {JSX.Element} The Footer section component.
 */
const Footer = () => {
    return (
        <footer className="relative py-20 px-8 bg-white dark:bg-axis-dark-surface border-t border-slate-100 dark:border-slate-800">
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-axis-light-secondary dark:text-axis-dark-secondary">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="font-serif text-2xl font-bold mb-6 text-axis-light-primary dark:text-axis-dark-primary">AXIS</h3>
                    <p className="max-w-sm mb-6 font-light text-sm leading-relaxed">
                        The definitive operating system for modern business. Structured to scale, secured by design, and built for clarity.
                    </p>
                    <div className="text-sm opacity-60">
                        &copy; {new Date().getFullYear()} Axis Inc. All rights reserved.
                    </div>
                </div>

                <div>
                    <h4 className="font-sans text-xs uppercase tracking-widest mb-6 font-semibold text-axis-light-text dark:text-axis-dark-text">Platform</h4>
                    <ul className="space-y-4 text-sm">
                        <li><a href="#" className="hover:text-axis-light-primary transition-colors">Capabilities</a></li>
                        <li><a href="#" className="hover:text-axis-light-primary transition-colors">Integrations</a></li>
                        <li><a href="#" className="hover:text-axis-light-primary transition-colors">Security</a></li>
                        <li><a href="#" className="hover:text-axis-light-primary transition-colors">Roadmap</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-sans text-xs uppercase tracking-widest mb-6 font-semibold text-axis-light-text dark:text-axis-dark-text">Company</h4>
                    <ul className="space-y-4 text-sm">
                        <li><a href="#" className="hover:text-axis-light-primary transition-colors">Manifesto</a></li>
                        <li><a href="#" className="hover:text-axis-light-primary transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-axis-light-primary transition-colors">Contact</a></li>
                        <li><a href="#" className="hover:text-axis-light-primary transition-colors">Legal</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
