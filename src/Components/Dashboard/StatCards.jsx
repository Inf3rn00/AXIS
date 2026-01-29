import React from 'react';

/**
 * StatCard component displaying a single statistic with trend.
 */
const StatCard = ({ title, value, trend, trendUp }) => (
    <div className="group bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all duration-300">
        <h3 className="text-xs font-semibold tracking-wider text-slate-500 mb-1">{title}</h3>
        <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold text-slate-900 dark:text-white font-serif">{value}</span>
            <span className={`flex items-center text-xs font-bold px-1.5 py-0.5 rounded ${trendUp ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20' : 'text-rose-600 bg-rose-50 dark:bg-rose-900/20'}`}>
                {trend}
            </span>
        </div>
    </div>
);

/**
 * StatCards component.
 * Displays a grid of key performance indicators (KPIs).
 * @returns {JSX.Element} The StatCards grid component.
 */
const StatCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <StatCard
                title="Total Revenue"
                value="$4,289,102"
                trend="+12.5%"
                trendUp={true}
            />
            <StatCard
                title="Active Users"
                value="1,204"
                trend="+5.2%"
                trendUp={true}
            />
            <StatCard
                title="System Health"
                value="99.8%"
                trend="-0.1%"
                trendUp={false}
            />
        </div>
    );
};

export default StatCards;
