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
  Terminal,
  FileCode,
  Shield,
  Database
} from "lucide-react";
import { useParams, Link } from "react-router-dom";

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

  // Consistent icons for category
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Project": return <Terminal className="w-4 h-4" />;
      case "Dashboard": return <BarChart3 className="w-4 h-4" />;
      case "Development": return <FileCode className="w-4 h-4" />;
      case "User Management": return <User className="w-4 h-4" />;
      case "Reports": return <Database className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  if (!activity) {
    return (
      <div className="min-h-screen bg-white text-zinc-900 font-sans flex items-center justify-center">
        <div className="text-center p-12 border border-zinc-200 shadow-lg bg-[#fafafa]">
          <h2 className="text-2xl font-bold mb-4 tracking-widest text-zinc-800">
            Error 404: Data Not Found
          </h2>
          <p className="text-zinc-500 font-mono-data mb-8 text-sm">
            Activity ID {id} could not be resolved in the system registry.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white font-mono-data text-xs hover:bg-blue-600 transition-colors shadow-md"
          >
            <ArrowLeft className="h-4 w-4" />
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 font-sans flex flex-col">
      {/* Header */}
      <header className="h-16 border-b border-zinc-200 flex items-center justify-between px-6 bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="w-8 h-8 flex items-center justify-center border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="h-8 w-[1px] bg-zinc-200"></div>
          <h1 className="text-sm font-bold tracking-widest text-zinc-800">
            Activity Log Viewer
            <span className="text-zinc-400 ml-2 font-mono-data font-normal">ID: {String(activity.id).padStart(4, '0')}</span>
          </h1>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <span className={`px-2 py-1 text-[10px] font-bold font-mono-data border ${activity.priority === "High" ? "bg-red-50 text-red-600 border-red-100" :
            activity.priority === "Medium" ? "bg-orange-50 text-orange-600 border-orange-100" :
              "bg-green-50 text-green-600 border-green-100"
            }`}>
            Priority: {activity.priority}
          </span>
          <span className="px-2 py-1 text-[10px] font-bold font-mono-data bg-zinc-100 text-zinc-500 border border-zinc-200">
            Status: Archived
          </span>
        </div>
      </header>

      {/* Main Layout */}
      <main className="flex-1 container mx-auto p-6 md:p-12 max-w-5xl">

        <div className="border border-zinc-200 bg-white shadow-sm">
          {/* Top Info Strip */}
          <div className="flex flex-col md:flex-row border-b border-zinc-200">
            <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-zinc-200">
              <span className="text-[10px] text-zinc-400 font-bold tracking-widest mb-3 block">User Identity</span>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-900 text-white flex items-center justify-center font-mono-data font-bold text-lg shadow-md">
                  {activity.user.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-bold text-lg text-zinc-900 leading-tight">{activity.user}</p>
                  <p className="text-xs font-mono-data text-zinc-500 mt-1">Auth Level: Admin</p>
                </div>
              </div>
            </div>

            <div className="flex-1 p-8 flex flex-col justify-center">
              <span className="text-[10px] text-zinc-400 font-bold tracking-widest mb-3 block">Timestamp</span>
              <div className="flex items-center gap-2 text-zinc-800">
                <Clock className="w-5 h-5 text-zinc-400" />
                <p className="font-mono-data text-lg font-medium">{activity.time}</p>
              </div>
            </div>
          </div>

          {/* Main Content Body */}
          <div className="p-10 md:p-14 bg-zinc-50/50">
            <div className="mb-10">
              <span className="text-[10px] text-zinc-400 font-bold tracking-widest mb-3 block">Action Executed</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[0.9] text-zinc-900 mb-6">
                {activity.action}
              </h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 shadow-sm">
                <div className="text-zinc-500">{getCategoryIcon(activity.category)}</div>
                <span className="text-xs font-bold text-zinc-700">{activity.category}</span>
              </div>
            </div>

            <div className="border border-zinc-200 bg-white p-8 relative shadow-sm hover:border-blue-200 transition-colors">
              <span className="absolute -top-3 left-6 bg-white px-2 text-[10px] font-bold text-zinc-400 tracking-widest border border-zinc-100 shadow-sm">
                System Payload
              </span>
              <p className="font-mono-data text-sm text-zinc-600 leading-relaxed">
                {activity.details}
              </p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="bg-zinc-50 border-t border-zinc-200 p-6 flex flex-wrap gap-4">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white text-xs font-bold hover:bg-blue-600 transition-colors shadow-md">
              <Download className="w-4 h-4" />
              Export Json
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-zinc-300 bg-white text-zinc-900 text-xs font-bold hover:bg-zinc-100 transition-colors shadow-sm">
              <Shield className="w-4 h-4 text-zinc-500" />
              Verify Signature
            </button>
          </div>

        </div>

      </main>

    </div>
  );
};

export default ActivityDetails;
