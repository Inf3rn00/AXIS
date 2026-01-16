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
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Sample data
  const salesData = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 2000 },
    { name: "Apr", sales: 2780 },
    { name: "May", sales: 1890 },
    { name: "Jun", sales: 2390 },
  ];

  const revenueData = [
    { name: "Jan", revenue: 2400 },
    { name: "Feb", revenue: 1398 },
    { name: "Mar", revenue: 9800 },
    { name: "Apr", revenue: 3908 },
    { name: "May", revenue: 4800 },
    { name: "Jun", revenue: 3800 },
  ];

 

  const StatCard = ({ title, value, Icon, change }) => (
    <div className="group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-3xl border border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100/50 hover:-translate-y-1 ">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-200">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              change >= 0
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {change >= 0 ? "+" : ""}
            {change}%
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {value}
          </p>
          <p className="text-xs text-gray-500 mt-1">vs last month</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Header */}
      <header className="relative backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg">
                <Link to={`/`}>
                  <BarChart3 className="h-8 w-8 text-white" />
                </Link>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Central Hub
                </h1>
                <p className="text-sm font-medium text-gray-600">
                  Your comprehensive business intelligence platform
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search insights..."
                    className="pl-10 pr-4 py-2 w-64 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300 transition-all duration-200"
                  />
                </div>
                <button className="p-2 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 hover:bg-white/80 transition-all duration-200">
                  <Bell className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 hover:bg-white/80 transition-all duration-200">
                  <Settings className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-semibold text-gray-900">
                    Joshua Dodo
                  </p>
                  <p className="text-xs text-gray-500">Data Analyst</p>
                </div>
                <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">JD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Welcome Section */}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Users"
            value="10,234"
            Icon={Users}
            change={12.5}
          />
          <StatCard
            title="Revenue"
            value="#24,500"
            Icon={DollarSign}
            change={8.2}
          />
          <StatCard
            title="Orders"
            value="1,429"
            Icon={ShoppingCart}
            change={-2.1}
          />
          <StatCard
            title="Growth"
            value="23.4%"
            Icon={TrendingUp}
            change={15.3}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Sales Chart */}
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Monthly Sales</h3>
              <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Trending Up
              </div>
            </div>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={salesData}>
                <defs>
                  <linearGradient
                    id="salesGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.6} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                />
                <Bar
                  dataKey="sales"
                  fill="url(#salesGradient)"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue Chart */}
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Revenue Trend</h3>
              <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                +8.2%
              </div>
            </div>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={revenueData}>
                <defs>
                  <linearGradient
                    id="revenueGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop
                      offset="100%"
                      stopColor="#10b981"
                      stopOpacity={0.05}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: "#10b981", strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, fill: "#10b981" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Recent Activity
            </h3>
            <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl font-medium hover:shadow-lg hover:shadow-indigo-200 transition-all duration-200">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {[
              {
                id: 1,
                user: "Bamidele John",
                action: "Created new project",
                time: "2 hours ago",
                details:
                  'Created "E-commerce Platform" with React and Node.js backend',
              },
              {
                id: 2,
                user: "Maranatha James",
                action: "Updated dashboard",
                time: "4 hours ago",
                details: "Added new analytics widgets and performance metrics",
              },
              {
                id: 3,
                user: "Kaleo Ejisun",
                action: "Completed task",
                time: "6 hours ago",
                details: "Finished implementing user authentication system",
              },
              {
                id: 4,
                user: "Sarah Wilson",
                action: "Added new user",
                time: "8 hours ago",
                details: "Onboarded new team member with admin privileges",
              },
              {
                id: 5,
                user: "Bukayo Saka",
                action: "Generated report",
                time: "1 day ago",
                details: "Created quarterly performance analysis report",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="group flex items-center space-x-4 p-4 hover:bg-white/50 rounded-2xl transition-all duration-200 hover:shadow-md"
              >
                <div className="h-12 w-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-purple-100 transition-all duration-200">
                  <span className="text-sm font-bold text-gray-700 group-hover:text-indigo-700">
                    {activity.user
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-semibold text-gray-900 mb-1">
                    <span className="hover:text-indigo-600 transition-colors cursor-pointer">
                      <Link key={activity.id} to={`/activity/${activity.id}`}>
                        {activity.user}
                      </Link>
                    </span>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.details}</p>
                </div>
                <div className="text-sm font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
