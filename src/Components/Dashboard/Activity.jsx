import React from 'react';
import { Activity as ActivityIcon, CheckCircle, AlertTriangle, FileText, User, Server } from 'lucide-react';

const Activity = () => {
    const logs = [
        { id: 1, user: 'Joshua Dodo', action: 'System Audit Completed', target: 'Security Protocol v2.4', time: '10 minutes ago', type: 'success', icon: CheckCircle },
        { id: 2, user: 'System', action: 'High Latency Detected', target: 'US-East Node', time: '42 minutes ago', type: 'warning', icon: AlertTriangle },
        { id: 3, user: 'Sarah Wilson', action: 'Report Generated', target: 'Q3 Financial Summary', time: '1 hour ago', type: 'info', icon: FileText },
        { id: 4, user: 'James Rodriguez', action: 'Deployment Success', target: 'Frontend Patch v1.0.4', time: '2 hours ago', type: 'success', icon: Server },
        { id: 5, user: 'Joshua Dodo', action: 'User Permissions Updated', target: 'Mike Chen (Read -> Write)', time: '4 hours ago', type: 'info', icon: User },
        { id: 6, user: 'Emily Davis', action: 'Legal Document Uploaded', target: 'Service Agreement 2024', time: '5 hours ago', type: 'info', icon: FileText },
        { id: 7, user: 'System', action: 'Scheduled Backup', target: 'Database Snapshot', time: '12 hours ago', type: 'success', icon: Server },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white mb-2">Activity Log</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Real-time system events and user actions.</p>
            </div>

            <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 space-y-8 pb-8">
                {logs.map((log) => (
                    <div key={log.id} className="relative pl-8 group">
                        <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 ${log.type === 'success' ? 'bg-emerald-500' :
                            log.type === 'warning' ? 'bg-amber-500' :
                                'bg-blue-500'
                            }`}></div>

                        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-slate-900 dark:text-white text-sm">{log.user}</span>
                                    <span className="text-slate-400 text-xs">•</span>
                                    <span className="text-slate-500 text-xs">{log.action}</span>
                                </div>
                                <span className="text-xs text-slate-400 font-mono">{log.time}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${log.type === 'success' ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400' :
                                    log.type === 'warning' ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400' :
                                        'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                    }`}>
                                    <log.icon className="w-4 h-4" />
                                </div>
                                <div className="text-sm font-medium text-slate-700 dark:text-slate-200">
                                    {log.target}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Activity;
