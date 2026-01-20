import { useState, useEffect } from "react";
import { BarChart3, Wallet, TrendingUp, Users, FileText, Target } from "lucide-react";

const Features = () => {

  // Aligned with Hero section features
  const features = [
    {
      title: "Real-time Analytics",
      description: "Direct feed. 24ms Latency. Live data processing.",
      icon: BarChart3,
      id: "MX-001"
    },
    {
      title: "Revenue Tracking",
      description: "Financial stream analysis with step-line projection.",
      icon: Wallet,
      id: "MX-002"
    },
    {
      title: "Sales Monitoring",
      description: "Conversion metrics. Cohort analysis. Retention grids.",
      icon: TrendingUp,
      id: "MX-003"
    },
    {
      title: "User Management",
      description: "Role-based access control (RBAC). Audit logging.",
      icon: Users,
      id: "MX-004"
    },
    {
      title: "Activity Logs",
      description: "Immutable system logs. Security tracking. IP resolution.",
      icon: FileText,
      id: "MX-005"
    },
    {
      title: "Performance Metrics",
      description: "KPI benchmarks. Server loads. Throughput analysis.",
      icon: Target,
      id: "MX-006"
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-zinc-200 text-zinc-900">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-zinc-200 pb-8">
          <div>
            <span className="font-mono-data text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 mb-4 inline-block">
              System Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 text-zinc-900 tracking-tight">
              CORE MODULES
            </h2>
          </div>
          <p className="max-w-md text-zinc-500 text-sm leading-relaxed mb-1">
            A comprehensive suite of tools designed to provide granular control over your business operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-10 hover:bg-zinc-50 transition-all group h-72 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-zinc-100 group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="w-6 h-6 text-zinc-900 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <span className="font-mono-data text-[10px] text-zinc-400 group-hover:text-zinc-500">{feature.id}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold uppercase tracking-wide mb-3 text-zinc-900">{feature.title}</h3>
                <p className="text-xs font-mono-data text-zinc-500 leading-relaxed border-l-2 border-zinc-100 pl-4 group-hover:border-blue-600 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
