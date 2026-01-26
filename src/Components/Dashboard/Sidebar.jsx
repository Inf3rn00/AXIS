import React from 'react';
import {
    LineChart,
    Users,
    Activity,
    FileText,
    Settings,
    ChevronDown,
} from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * SidebarItem component for individual navigation links in the sidebar.
 */
const SidebarItem = ({ icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${active
            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 shadow-sm'
            : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
    >
        <span className={`${active ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 group-hover:text-slate-600'}`}>
            {icon}
        </span>
        {label}
    </button>
);

/**
 * Sidebar component for the Dashboard.
 * Handles navigation between different dashboard views.
 * @param {Object} props - Component props
 * @param {string} props.activeTab - Currently selected tab ID
 * @param {Function} props.setActiveTab - Function to update the active tab
 * @returns {JSX.Element} The Sidebar component.
 */
const Sidebar = ({ activeTab, setActiveTab }) => {
    return (
        <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col z-20 transition-colors duration-300">
            <Link to="/">
                <div className="px-6 h-16 flex items-center gap-3">
                    <div className="w-7 h-7 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center text-white shadow-sm shadow-blue-200 dark:shadow-none">
                        <span className="font-serif font-bold text-lg leading-none pt-0.5">A</span>
                    </div> 
                    <span className="font-serif font-bold text-lg tracking-tight text-slate-800 dark:text-white">AXIS</span>
                </div>
            </Link>
            <nav className="flex-1 px-3 py-6 space-y-0.5">
                <div className="px-3 mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 font-sans">Main</div>
                <SidebarItem
                    icon={<LineChart className="w-4 h-4" />}
                    label="Overview"
                    active={activeTab === 'overview'}
                    onClick={() => setActiveTab('overview')}
                />
                <SidebarItem
                    icon={<FileText className="w-4 h-4" />}
                    label="Ledger"
                    active={activeTab === 'articles'}
                    onClick={() => setActiveTab('articles')}
                />
                <SidebarItem
                    icon={<Users className="w-4 h-4" />}
                    label="Team"
                    active={activeTab === 'authors'}
                    onClick={() => setActiveTab('authors')}
                />

                <div className="px-3 mb-2 mt-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 font-sans">System</div>
                <SidebarItem
                    icon={<Activity className="w-4 h-4" />}
                    label="Activity"
                    active={activeTab === 'notifications'}
                    onClick={() => setActiveTab('notifications')}
                />
                <SidebarItem
                    icon={<Settings className="w-4 h-4" />}
                    label="Settings"
                    active={activeTab === 'settings'}
                    onClick={() => setActiveTab('settings')}
                />
            </nav>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800/50">
                <button className="flex items-center gap-3 w-full p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors text-left group">
                    <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-slate-700 transition-all">
                        JD
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate text-slate-700 dark:text-slate-200">Jane Doe</div>
                        <div className="text-[10px] text-slate-400 truncate">Workspace Admin</div>
                    </div>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>
            </div>
        </aside >
    );
};

export default Sidebar;
