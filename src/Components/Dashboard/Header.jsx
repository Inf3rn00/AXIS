import React from 'react';
import { Search, Bell } from 'lucide-react';

/**
 * Header component for the Dashboard.
 * Contains the search bar and notification bell.
 * @returns {JSX.Element} The Header component.
 */
const Header = () => {
    return (
        <header className="h-16 flex items-center justify-between px-8 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md z-10 sticky top-0 border-b border-slate-200/50 dark:border-slate-800/50">
            <div className="flex items-center gap-4 text-slate-400">
                <div className="relative group">
                    <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-0 text-slate-400 group-hover:text-blue-500 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search ledger..."
                        className="bg-transparent border-none outline-none text-sm w-64 pl-8 text-slate-600 dark:text-slate-300 placeholder-slate-400 focus:placeholder-slate-300 transition-all"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
                <button className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative">
                    <Bell className="w-4 h-4" />
                    <span className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white dark:border-slate-900"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
