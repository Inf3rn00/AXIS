import React from "react";
import {
  ArrowLeft,
  Clock,
  User,
  Activity,
  BarChart3,
  Star,
  Eye,
  Download,
} from "lucide-react";
import { useParams } from "react-router-dom";

const ActivityDetails = () => {
  const { id } = useParams();

  // Sample activity data
  const activities = [
    {
      id: 1,
      user: "Bamidele John",
      action: "Created new project",
      time: "2 hours ago",
      details: 'Created "E-commerce Platform" with React and Node.js backend',
      category: "Project",
      priority: "High",
    },
    {
      id: 2,
      user: "Maranatha James",
      action: "Updated dashboard",
      time: "4 hours ago",
      details: "Added new analytics widgets and performance metrics",
      category: "Dashboard",
      priority: "Medium",
    },
    {
      id: 3,
      user: "Kaleo Ejisun",
      action: "Completed task",
      time: "6 hours ago",
      details: "Finished implementing user authentication system",
      category: "Development",
      priority: "High",
    },
    {
      id: 4,
      user: "Sarah Wilson",
      action: "Added new user",
      time: "8 hours ago",
      details: "Onboarded new team member with admin privileges",
      category: "User Management",
      priority: "Low",
    },
    {
      id: 5,
      user: "Bukayo Saka",
      action: "Generated report",
      time: "1 day ago",
      details: "Created quarterly performance analysis report",
      category: "Reports",
      priority: "Medium",
    },
  ];

  const activity = activities.find((a) => a.id === parseInt(id));

  if (!activity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 flex items-center justify-center">
        <div className="relative text-center bg-white/70 backdrop-blur-sm p-12 rounded-3xl border border-white/20 shadow-xl">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            User Activity Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The requested activity could not be found.
          </p>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-2xl hover:shadow-lg hover:shadow-indigo-200 transition-all duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-gradient-to-r from-red-100 to-pink-100 text-red-700 border border-red-200";
      case "Medium":
        return "bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 border border-yellow-200";
      case "Low":
        return "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border border-green-200";
      default:
        return "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700 border border-gray-200";
    }
  };

  const getCategoryIcon = (category) => {
    const iconClass = "h-5 w-5 text-white";
    switch (category) {
      case "Project":
        return <Star className={iconClass} />;
      case "Dashboard":
        return <BarChart3 className={iconClass} />;
      case "Development":
        return <Activity className={iconClass} />;
      case "User Management":
        return <User className={iconClass} />;
      case "Reports":
        return <Eye className={iconClass} />;
      default:
        return <Activity className={iconClass} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center py-6">
            <button
              onClick={() => window.history.back()}
              className="flex items-center text-gray-600 hover:text-indigo-600 mr-6 px-4 py-2 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200 hover:bg-white/80 transition-all duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Dashboard
            </button>

            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Activity Details
                </h1>
                <p className="text-sm font-medium text-gray-600">
                  Comprehensive activity analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-6xl mx-auto px-6 lg:px-8 py-8">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl overflow-hidden">
          {/* Activity Header */}
          <div className="p-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
            <div className="relative">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
                    <span className="text-xl font-bold text-white">
                      {activity.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {activity.action}
                    </h2>
                    <p className="text-indigo-100 text-lg">
                      by {activity.user}
                    </p>
                  </div>
                </div>
                <span
                  className={`inline-flex items-center px-4 py-2 rounded-2xl text-sm font-semibold ${getPriorityColor(
                    activity.priority
                  )}`}
                >
                  {activity.priority} Priority
                </span>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center space-x-8 text-indigo-100">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{activity.time}</span>
                </div>
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  {getCategoryIcon(activity.category)}
                  <span className="text-sm">{activity.category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Details */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Time Card */}
              <div className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-3xl border border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100/50 hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg shadow-blue-200">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Timestamp
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {activity.time}
                    </p>
                  </div>
                </div>
              </div>

              {/* User Card */}
              <div className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-3xl border border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100/50 hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-200">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Performed By
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {activity.user}
                    </p>
                  </div>
                </div>
              </div>

              {/* Category Card */}
              <div className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-3xl border border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100/50 hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg shadow-purple-200">
                    {getCategoryIcon(activity.category)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Category
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {activity.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 mr-3">
                  <Eye className="h-5 w-5 text-white" />
                </div>
                Activity Description
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {activity.details}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-indigo-200 transition-all duration-200 hover:-translate-y-0.5">
                <Eye className="h-5 w-5 mr-2" />
                View Related Items
              </button>
              <button className="flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 text-gray-700 font-semibold rounded-2xl hover:bg-white/90 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
                <Download className="h-5 w-5 mr-2" />
                Export Details
              </button>
              <button className="flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-emerald-200 transition-all duration-200 hover:-translate-y-0.5">
                <Star className="h-5 w-5 mr-2" />
                Mark as Important
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ActivityDetails;
