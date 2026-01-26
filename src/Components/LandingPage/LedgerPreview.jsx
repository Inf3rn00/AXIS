import React from 'react';
import { Search, BarChart3, Layers, Globe, MoreHorizontal } from 'lucide-react';

/**
 * StatusBadge component (Static for Preview).
 */
const StatusBadge = ({ status }) => {
    const styles = {
        'Completed': 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800',
        'In Progress': 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-800',
        'Pending': 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-800'
    };

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status] || 'bg-gray-50 text-gray-700'}`}>
            <span className={`w-1.5 h-1.5 rounded-full mr-2 ${status === 'Completed' ? 'bg-emerald-500' : status === 'In Progress' ? 'bg-blue-500' : 'bg-amber-500'}`}></span>
            {status}
        </span>
    );
};

/**
 * TableRow component for a single transaction row (Static for Preview).
 */
const TableRow = ({ title, status, date, amount }) => (
    <tr className="border-b border-slate-50 dark:border-slate-800/50 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
        <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-200">{title}</td>
        <td className="px-6 py-4">
            <StatusBadge status={status} />
        </td>
        <td className="px-6 py-4 text-slate-500 text-xs">{date}</td>
        <td className="px-6 py-4 text-right font-medium text-slate-900 dark:text-white font-mono tracking-tight">{amount}</td>
    </tr>
);

/**
 * LedgerPreview component for the Landing Page.
 * Displays a mock interface of the dashboard to give users a glimpse of the product.
 * @returns {JSX.Element} The Ledger Preview section component.
 */
const LedgerPreview = () => {
    return (
        <section id="ledger" className="py-24 px-6 relative overflow-hidden ">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-axis-light-text dark:text-axis-dark-text">Global Operations Ledger</h2>
                <p className="max-w-2xl mx-auto text-lg text-axis-light-secondary dark:text-axis-dark-secondary font-light">A glimpse into the machinery. Designed for clarity, speed, and precision.</p>
            </div>

            {/* Interface Mockup - Floating & Shadowed, mirroring Dashboard */}
            <div className="max-w-6xl mx-auto rounded-xl overflow-hidden relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-200 dark:border-slate-800 bg-white dark:bg-black z-10 transform hover:scale-[1.01] transition-transform duration-700 pointer-events-none select-none">

                {/* Header Bar of Mockup */}
                <div className="h-14 border-b border-slate-100 dark:border-slate-800 flex items-center px-6 gap-3 bg-white dark:bg-black">
                    <div className="w-8 h-8 bg-slate-900 dark:bg-white rounded-md flex items-center justify-center text-white dark:text-black shadow-sm">
                        <span className="font-serif font-bold text-lg">A</span>
                    </div>
                    <div className="h-5 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 rounded flex items-center px-3 py-1.5 text-xs text-slate-500 font-medium w-64">
                        <Search className="w-3.5 h-3.5 mr-2 opacity-50" />
                        Search ledger...
                    </div>
                </div>

                {/* Main Content of Mockup */}
                <div className="flex h-[600px] overflow-hidden bg-slate-50/50 dark:bg-slate-900/20">
                    {/* Sidebar Mockup */}
                    <div className="w-64 bg-white dark:bg-black border-r border-slate-100 dark:border-slate-800 p-4 flex flex-col gap-1 hidden md:flex">
                        <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-md text-sm font-medium transition-colors">
                            <BarChart3 className="w-4 h-4" /> Executive Summary
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-md text-sm font-medium">
                            <Layers className="w-4 h-4" /> Ledger
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-md text-sm font-medium transition-colors">
                            <Globe className="w-4 h-4" /> Network
                        </div>
                        <div className="mt-auto flex items-center gap-3 px-3 py-2 border-t border-slate-100 dark:border-slate-800 pt-4">
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-xs font-bold">JD</div>
                            <div className="text-xs font-medium text-slate-700 dark:text-slate-300">Jane Doe</div>
                        </div>
                    </div>

                    {/* Dashboard Content Mockup */}
                    <div className="flex-1 p-8 flex flex-col gap-8 overflow-hidden">
                        <div className="flex justify-between items-center">
                            <div>
                                <div className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-1">Ledger</div>
                                <div className="text-sm text-slate-500">Real-time transaction monitoring.</div>
                            </div>
                            <div className="flex gap-3">
                                <div className="h-9 w-24 bg-white border border-slate-200 rounded-lg shadow-sm"></div>
                                <div className="h-9 w-24 bg-slate-900 rounded-lg shadow-sm"></div>
                            </div>
                        </div>

                        {/* Recent Activity Table - Visual Only */}
                        <div className="flex-1 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
                            <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
                                <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wide">Recent Transactions</h3>
                                <div className="p-1 rounded text-slate-400">
                                    <MoreHorizontal className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-white dark:bg-slate-900 text-slate-500 font-medium border-b border-slate-100 dark:border-slate-800">
                                        <tr>
                                            <th className="px-6 py-3 font-medium text-xs uppercase tracking-wider">Description</th>
                                            <th className="px-6 py-3 font-medium text-xs uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 font-medium text-xs uppercase tracking-wider">Date</th>
                                            <th className="px-6 py-3 text-right font-medium text-xs uppercase tracking-wider">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                        <TableRow title="Q3 Financial Consolidation" status="Completed" date="Oct 24, 2024" amount="$125,000.00" />
                                        <TableRow title="Global Supply Chain Audit" status="In Progress" date="Oct 22, 2024" amount="$54,200.00" />
                                        <TableRow title="Server Infrastructure Upgrade" status="Pending" date="Oct 20, 2024" amount="$12,500.00" />
                                        <TableRow title="Marketing Campaign Q4" status="Completed" date="Oct 18, 2024" amount="$89,100.00" />
                                        <TableRow title="Legal Consultation Fees" status="Completed" date="Oct 15, 2024" amount="$5,000.00" />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LedgerPreview;
