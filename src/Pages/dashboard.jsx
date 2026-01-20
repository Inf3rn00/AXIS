import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
  Users,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Search,
  Bell,
  Settings,
  Menu,
  ArrowUpRight,
  Monitor,
  Database,
  Box,
  Layout,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Sample data
  const salesData = [
    { name: "JAN", sales: 4000 },
    { name: "FEB", sales: 3000 },
    { name: "MAR", sales: 2000 },
    { name: "APR", sales: 2780 },
    { name: "MAY", sales: 1890 },
    { name: "JUN", sales: 2390 },
  ];

  const revenueData = [
    { name: "JAN", revenue: 2400 },
    { name: "FEB", revenue: 1398 },
    { name: "MAR", revenue: 9800 },
    { name: "APR", revenue: 3908 },
    { name: "MAY", revenue: 4800 },
    { name: "JUN", revenue: 3800 },
  ];

  const StatBox = ({ title, value, icon: Icon, change, isLast }) => (
    <div className={`bg-white p-6 border border-zinc-200 flex flex-col justify-between h-32 hover:border-blue-300 transition-colors shadow-sm`}>
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs uppercase font-bold text-zinc-500 tracking-wider">
          {title}
        </span>
        <div className="p-2 bg-zinc-50">
          <Icon className="w-4 h-4 text-zinc-400" />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-3xl font-mono-data font-light text-zinc-900">
          {value}
        </span>
        <div className={`flex items-center text-xs font-mono-data py-1 px-2 ${change >= 0 ? 'bg-blue-50 text-blue-700' : 'bg-red-50 text-red-700'}`}>
          {change > 0 ? '+' : ''}{change}%
          {change > 0 && <ArrowUpRight className="w-3 h-3 ml-1" />}
        </div>
      </div>
    </div>
  );

  const SectionHeader = ({ title, action }) => (
    <div className="flex items-center justify-between py-4 mb-2">
      <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-800 flex items-center gap-2">
        <span className="w-1 h-4 bg-blue-500 inline-block"></span>
        {title}
      </h2>
      {action && (
        <button className="text-xs text-zinc-500 hover:text-blue-600 transition-colors uppercase font-medium">
          {action}
        </button>
      )}
    </div>
  );

  const SidebarItem = ({ icon: Icon, label, active }) => (
    <button className={`w-full text-left flex items-center gap-3 px-4 py-3 mb-1 transition-colors group ${active ? 'bg-zinc-100 text-blue-700 border-l-2 border-blue-600' : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 border-l-2 border-transparent'}`}>
      <Icon className={`w-4 h-4 ${active ? 'text-blue-600' : 'text-zinc-400 group-hover:text-zinc-600'}`} />
      <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      {/* Top Navigation Bar - Softer, floating feel */}
      <header className="h-16 bg-white/80 backdrop-blur-md border-b border-zinc-200 flex sticky top-0 z-50 px-6 items-center justify-between shadow-sm">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center">
              <span className="font-bold text-xs">CH</span>
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight text-zinc-900 uppercase">CENTRAL_HUB</h1>
              <p className="text-[10px] text-zinc-500 font-mono-data">v2.1.0 // ENTERPRISE</p>
            </div>
          </div>

          <div className="hidden md:flex items-center bg-zinc-50 border border-zinc-200 px-3 py-2 w-96">
            <Search className="w-4 h-4 text-zinc-400 mr-3" />
            <input
              type="text"
              placeholder="Search modules..."
              className="bg-transparent border-none outline-none text-sm w-full placeholder-zinc-400 text-zinc-700"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          <Link to="/tasks" className="p-2 text-zinc-500 hover:text-blue-600 hover:bg-blue-50 transition-colors" title="Task Manager">
            <Settings className="w-5 h-5" />
          </Link>
          <div className="h-8 w-[1px] bg-zinc-200 mx-2"></div>
          <div className="flex items-center gap-3 pl-2">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-zinc-900 uppercase">J. Dodo</p>
              <p className="text-[10px] text-zinc-500 font-mono-data">ADMIN</p>
            </div>
            <div className="w-8 h-8 bg-zinc-200 flex items-center justify-center text-zinc-600 text-xs font-bold ring-2 ring-white shadow-sm">
              JD
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-[1600px] w-full mx-auto">
        {/* Sidebar - Softer, detached look */}
        <aside className="w-64 hidden md:flex flex-col py-8 pr-6 pl-6 h-[calc(100vh-4rem)] sticky top-16">
          <div className="flex-1 space-y-8">
            <div>
              <span className="text-[10px] font-mono-data text-zinc-400 uppercase tracking-widest px-4 mb-2 block">Modules</span>
              <SidebarItem icon={Monitor} label="Dashboard" active />
              <SidebarItem icon={Database} label="Data Sources" />
              <SidebarItem icon={Users} label="Personnel" />
              <SidebarItem icon={ShoppingCart} label="Commerce" />
            </div>

            <div>
              <span className="text-[10px] font-mono-data text-zinc-400 uppercase tracking-widest px-4 mb-2 block">System</span>
              <SidebarItem icon={Box} label="Inventory" />
              <SidebarItem icon={FileText} label="Logs" />
              <SidebarItem icon={Settings} label="Configuration" />
            </div>
          </div>

          <div className="mt-auto">
            <div className="border border-zinc-200 p-4 bg-white shadow-sm">
              <p className="text-[10px] uppercase font-bold text-zinc-500 mb-2">System Health</p>
              <div className="w-full bg-zinc-100 h-1 mb-2">
                <div className="w-3/4 bg-blue-500 h-1"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono-data text-zinc-400">CPU: 74%</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold text-zinc-600">ONLINE</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area - More padding, card-based layout with gaps */}
        <main className="flex-1 overflow-y-auto p-8">

          {/* Stats Row - Cards with gaps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatBox title="Active Users" value="10,234" icon={Users} change={12.5} />
            <StatBox title="Total Revenue" value="$24,500" icon={DollarSign} change={8.2} />
            <StatBox title="Orders Pending" value="1,429" icon={ShoppingCart} change={-2.1} />
            <StatBox title="System Load" value="23.4%" icon={Database} change={15.3} isLast />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Charts Section - Taking up 2/3 */}
            <div className="xl:col-span-2 space-y-8">

              {/* Charts Container */}
              <div className="bg-white border border-zinc-200 p-6 shadow-sm">
                <SectionHeader title="Performance Metrics" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  {/* Chart 1 */}
                  <div className="h-72">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xs font-mono-data text-zinc-500">SALES_VOL_MTD</h3>
                      <div className="text-xs font-bold text-zinc-900 bg-zinc-100 px-2 py-1">YEAR_2024</div>
                    </div>
                    <ResponsiveContainer width="100%" height="85%">
                      <BarChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
                        <XAxis dataKey="name" stroke="#a1a1aa" fontSize={10} fontFamily="JetBrains Mono" tickLine={false} axisLine={false} dy={10} />
                        <YAxis stroke="#a1a1aa" fontSize={10} fontFamily="JetBrains Mono" tickLine={false} axisLine={false} dx={-10} />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#18181b', border: 'none', color: '#fff', fontSize: '12px', fontFamily: 'JetBrains Mono', padding: '8px 12px' }}
                          itemStyle={{ color: '#fff' }}
                          cursor={{ fill: '#f4f4f5' }}
                        />
                        <Bar dataKey="sales" fill="#3b82f6" barSize={32} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Chart 2 */}
                  <div className="h-72">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xs font-mono-data text-zinc-500">REVENUE_TREND</h3>
                      <div className="text-xs font-bold text-green-700 bg-green-50 px-2 py-1">+14.2%</div>
                    </div>
                    <ResponsiveContainer width="100%" height="85%">
                      <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4f4f5" />
                        <XAxis dataKey="name" stroke="#a1a1aa" fontSize={10} fontFamily="JetBrains Mono" tickLine={false} axisLine={false} dy={10} />
                        <YAxis stroke="#a1a1aa" fontSize={10} fontFamily="JetBrains Mono" tickLine={false} axisLine={false} dx={-10} />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#18181b', border: 'none', color: '#fff', fontSize: '12px', fontFamily: 'JetBrains Mono', padding: '8px 12px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={2} dot={{ fill: '#fff', stroke: '#2563eb', strokeWidth: 2, r: 4 }} activeDot={{ r: 6, fill: '#2563eb' }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Data Table */}
              <div className="bg-white border border-zinc-200 shadow-sm">
                <div className="px-6 pt-6 pb-2">
                  <SectionHeader title="Recent Transactions" action="View All" />
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-zinc-50 border-b border-zinc-200">
                        <th className="px-6 py-4 text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-sans">ID</th>
                        <th className="px-6 py-4 text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-sans">User</th>
                        <th className="px-6 py-4 text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-sans">Action</th>
                        <th className="px-6 py-4 text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-sans">Date/Time</th>
                        <th className="px-6 py-4 text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-sans text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 text-sm">
                      {[
                        { id: "TX_8821", user: "Bamidele John", action: "Project Initialization", time: "2024-03-10 14:30", status: "COMPLETE" },
                        { id: "TX_8822", user: "Maranatha James", action: "Dashboard Update", time: "2024-03-10 12:15", status: "PROCESSING" },
                        { id: "TX_8823", user: "Kaleo Ejisun", action: "User Auth", time: "2024-03-10 09:45", status: "COMPLETE" },
                        { id: "TX_8824", user: "Sarah Wilson", action: "Admin Onboarding", time: "2024-03-09 16:20", status: "PENDING" },
                        { id: "TX_8825", user: "Bukayo Saka", action: "Report Gen", time: "2024-03-09 11:00", status: "COMPLETE" },
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-blue-50/50 transition-colors group">
                          <td className="px-6 py-4 font-mono-data text-xs text-blue-600 font-medium">{row.id}</td>
                          <td className="px-6 py-4 font-medium text-zinc-900">
                            <Link to={`/activity/${idx + 1}`} className="group-hover:text-blue-700 hover:underline decoration-blue-300 underline-offset-4 transition-all">
                              {row.user}
                            </Link>
                          </td>
                          <td className="px-6 py-4 text-zinc-600">{row.action}</td>
                          <td className="px-6 py-4 font-mono-data text-xs text-zinc-400">{row.time}</td>
                          <td className="px-6 py-4 text-right">
                            <span className={`inline-block px-2 py-1 text-[10px] font-bold font-mono-data border ${row.status === 'COMPLETE' ? 'bg-zinc-100 text-zinc-700 border-zinc-200' :
                              row.status === 'PROCESSING' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                'bg-yellow-50 text-yellow-700 border-yellow-200'
                              }`}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column - Secondary Info */}
            <div className="space-y-6">
              <div className="bg-white border border-zinc-200 shadow-sm">
                <div className="px-6 pt-6 pb-2">
                  <SectionHeader title="System Log" />
                </div>
                <div className="px-4 pb-4">
                  {[
                    { id: "99281", msg: "Database migration completed.", time: "10m", status: "success" },
                    { id: "99282", msg: "User registration email sent.", time: "32m", status: "info" },
                    { id: "99283", msg: "Failed login from 192.168.1.1", time: "1h", status: "error" },
                    { id: "99284", msg: "Backup routine initiated.", time: "2h", status: "info" },
                  ].map((log, i) => (
                    <div key={i} className="py-3 border-b border-zinc-100 last:border-0 flex gap-3">
                      <div className={`w-1 h-full min-h-[20px] ${log.status === 'error' ? 'bg-red-500' : log.status === 'success' ? 'bg-green-500' : 'bg-blue-400'}`}></div>
                      <div>
                        <div className="flex justify-between w-full gap-4">
                          <span className="text-[10px] font-mono-data text-zinc-400">#{log.id}</span>
                          <span className="text-[10px] font-mono-data text-zinc-400">{log.time}</span>
                        </div>
                        <p className="text-xs text-zinc-700 mt-0.5 leading-snug">{log.msg}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-900 text-white p-6 shadow-sm">
                <h3 className="text-xs font-bold uppercase mb-4 text-zinc-400">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 px-4 py-3 text-xs font-bold uppercase transition-all text-left flex justify-between items-center group">
                    Generate Report
                    <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white transition-colors" />
                  </button>
                  <button className="w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 px-4 py-3 text-xs font-bold uppercase transition-all text-left flex justify-between items-center group">
                    Manage Users
                    <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white transition-colors" />
                  </button>
                  <button className="w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 px-4 py-3 text-xs font-bold uppercase transition-all text-left flex justify-between items-center group">
                    View Audit Logs
                    <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
