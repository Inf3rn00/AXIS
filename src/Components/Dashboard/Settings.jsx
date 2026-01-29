import React, { useState } from 'react';
import { User, Bell, Lock, Globe, Moon, Monitor } from 'lucide-react';

const Settings = () => {
    const [theme, setTheme] = useState('system');
    const [emailNotifs, setEmailNotifs] = useState(true);

    return (
        <div className="max-w-4xl space-y-6">
            <div>
                <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white mb-2">Settings</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Manage your profile and workspace preferences.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Sidebar Navigation for Settings (Simulated) */}
                <div className="space-y-1">
                    <button className="w-full text-left px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg text-sm font-medium">General</button>
                    <button className="w-full text-left px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-sm font-medium transition-colors">Profile</button>
                    <button className="w-full text-left px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-sm font-medium transition-colors">Security</button>
                    <button className="w-full text-left px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-sm font-medium transition-colors">Notifications</button>
                </div>

                {/* Main Settings Form */}
                <div className="md:col-span-2 space-y-8">

                    {/* Workspace Profile */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <User className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Joshua Dodo</h3>
                                <p className="text-sm text-slate-500">Workspace Admin</p>
                            </div>
                            <button className="ml-auto px-4 py-2 text-sm border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                Edit
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">First Name</label>
                                    <input type="text" value="Joshua" readOnly className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-200" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Last Name</label>
                                    <input type="text" value="Dodo" readOnly className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-200" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Email Address</label>
                                <input type="email" value="joshua.dodo@axis-finance.com" readOnly className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-200" />
                            </div>
                        </div>
                    </div>

                    {/* Preferences */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Preferences</h3>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <Globe className="w-5 h-5 text-slate-400" />
                                    <div>
                                        <div className="text-sm font-medium text-slate-900 dark:text-white">Language</div>
                                        <div className="text-xs text-slate-500">English (US)</div>
                                    </div>
                                </div>
                                <span className="text-xs text-blue-600 font-medium cursor-pointer">Change</span>
                            </div>

                            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <Bell className="w-5 h-5 text-slate-400" />
                                    <div>
                                        <div className="text-sm font-medium text-slate-900 dark:text-white">Email Notifications</div>
                                        <div className="text-xs text-slate-500">Daily summaries and alerts</div>
                                    </div>
                                </div>
                                <div
                                    className={`w-10 h-6 rounded-full p-1 cursor-pointer transition-colors ${emailNotifs ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-700'}`}
                                    onClick={() => setEmailNotifs(!emailNotifs)}
                                >
                                    <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${emailNotifs ? 'translate-x-4' : 'translate-x-0'}`}></div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <Moon className="w-5 h-5 text-slate-400" />
                                    <div>
                                        <div className="text-sm font-medium text-slate-900 dark:text-white">Appearance</div>
                                        <div className="text-xs text-slate-500">System Default</div>
                                    </div>
                                </div>
                                <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                                    <button className="p-1 rounded bg-white dark:bg-slate-700 shadow-sm"><Monitor className="w-3 h-3" /></button>
                                    <button className="p-1 rounded text-slate-400"><Moon className="w-3 h-3" /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 relative">
                        <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">Cancel</button>
                        <button className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg shadow-blue-600/20">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
