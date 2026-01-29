import React from 'react';
import { MoreHorizontal } from 'lucide-react';

/**
 * StatusBadge component.
 * Renders a color-coded status badge.
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
 * TableRow component for a single transaction row.
 */
const TableRow = ({ title, status, date, amount }) => (
    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group cursor-default">
        <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-200">{title}</td>
        <td className="px-6 py-4">
            <StatusBadge status={status} />
        </td>
        <td className="px-6 py-4 text-slate-500 text-xs">{date}</td>
        <td className="px-6 py-4 text-right font-medium text-slate-900 dark:text-white font-mono tracking-tight">{amount}</td>
    </tr>
);

/**
 * RecentActivityTable component.
 * Displays a table of recent transactions/activities.
 * @returns {JSX.Element} The Recent Activity Table component.
 */
const RecentActivityTable = () => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm tracking-wide">Recent Transactions</h3>
                <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-400 transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                </button>
            </div>
            <table className="w-full text-sm text-left">
                <thead className="bg-white dark:bg-slate-900 text-slate-500 font-medium border-b border-slate-100 dark:border-slate-800">
                    <tr>
                        <th className="px-6 py-3 font-medium text-xs tracking-wider">Description</th>
                        <th className="px-6 py-3 font-medium text-xs tracking-wider">Status</th>
                        <th className="px-6 py-3 font-medium text-xs tracking-wider">Date</th>
                        <th className="px-6 py-3 text-right font-medium text-xs tracking-wider">Amount</th>
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
    );
};

export default RecentActivityTable;
