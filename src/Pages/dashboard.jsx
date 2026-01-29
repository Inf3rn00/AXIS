import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Dashboard/Sidebar';
import Header from '../Components/Dashboard/Header';
import StatCards from '../Components/Dashboard/StatCards';
import RecentActivityTable from '../Components/Dashboard/RecentActivityTable';

/**
 * Dashboard component.
 * The main protected area for authenticated users.
 * Features a sidebar navigation, header, KPI stats, and activity table.
 */
const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] text-slate-800 dark:text-slate-100 font-sans flex overflow-hidden transition-colors duration-300">

      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative bg-slate-50/50 dark:bg-[#0f172a]">

        {/* Top Header */}
        <Header />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 pb-12 scroll-smooth">
          <div className="max-w-6xl mx-auto pt-8">
            <div className="mb-10 flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-bold font-serif text-slate-900 dark:text-white mb-2">Executive Summary</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Overview of capital allocation and system health.</p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm hover:border-blue-200 dark:hover:border-blue-900">Export Report</button>
                <button className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 flex items-center gap-2">
                  <ArrowUpRight className="w-4 h-4" />
                  New Entry
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <StatCards />

            {/* Recent Activity Table */}
            <RecentActivityTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
