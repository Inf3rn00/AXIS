import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Filter, Download } from 'lucide-react';

const Ledger = () => {
    const transactions = [
        { id: 'TX-1049', date: 'Oct 24, 2024', description: 'Q3 Financial Consolidation', category: 'Finance', amount: '$125,000.00', status: 'Completed', type: 'inflow' },
        { id: 'TX-1048', date: 'Oct 22, 2024', description: 'Global Supply Chain Audit', category: 'Operations', amount: '$54,200.00', status: 'In Progress', type: 'outflow' },
        { id: 'TX-1047', date: 'Oct 20, 2024', description: 'Server Infrastructure Upgrade', category: 'Technology', amount: '$12,500.00', status: 'Pending', type: 'outflow' },
        { id: 'TX-1046', date: 'Oct 18, 2024', description: 'Marketing Campaign Q4', category: 'Marketing', amount: '$89,100.00', status: 'Completed', type: 'outflow' },
        { id: 'TX-1045', date: 'Oct 15, 2024', description: 'Legal Consultation Fees', category: 'Legal', amount: '$5,000.00', status: 'Completed', type: 'outflow' },
        { id: 'TX-1044', date: 'Oct 12, 2024', description: 'Client Retainer Payment', category: 'Finance', amount: '$45,000.00', status: 'Completed', type: 'inflow' },
        { id: 'TX-1043', date: 'Oct 10, 2024', description: 'Office Expansion Project', category: 'Operations', amount: '$120,000.00', status: 'Pending', type: 'outflow' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white mb-2">General Ledger</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">All financial transactions and operational logs.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2">
                        <Filter className="w-4 h-4" /> Filter
                    </button>
                    <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2">
                        <Download className="w-4 h-4" /> Export
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 font-medium border-b border-slate-200 dark:border-slate-800">
                        <tr>
                            <th className="px-6 py-4 font-medium text-xs tracking-wider">Transaction ID</th>
                            <th className="px-6 py-4 font-medium text-xs tracking-wider">Description</th>
                            <th className="px-6 py-4 font-medium text-xs tracking-wider">Category</th>
                            <th className="px-6 py-4 font-medium text-xs tracking-wider">Date</th>
                            <th className="px-6 py-4 font-medium text-xs tracking-wider">Status</th>
                            <th className="px-6 py-4 text-right font-medium text-xs tracking-wider">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {transactions.map((tx) => (
                            <tr key={tx.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-xs text-slate-400">{tx.id}</td>
                                <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-200">{tx.description}</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                        {tx.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-slate-500 text-xs">{tx.date}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${tx.status === 'Completed' ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800' :
                                            tx.status === 'In Progress' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-800' :
                                                'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-800'
                                        }`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${tx.status === 'Completed' ? 'bg-emerald-500' :
                                                tx.status === 'In Progress' ? 'bg-blue-500' :
                                                    'bg-amber-500'
                                            }`}></span>
                                        {tx.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right font-medium font-mono">
                                    <div className="flex items-center justify-end gap-2">
                                        <span className={tx.type === 'inflow' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-900 dark:text-white'}>
                                            {tx.type === 'inflow' ? '+' : '-'}{tx.amount}
                                        </span>
                                        {tx.type === 'inflow' ?
                                            <ArrowDownLeft className="w-3 h-3 text-emerald-500" /> :
                                            <ArrowUpRight className="w-3 h-3 text-slate-400" />
                                        }
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Ledger;
