import { useState, useEffect } from "react";

const Features = () => {
  const [isInView, setIsInView] = useState(false);

  // Aligned with Hero section features
  const features = [
    { 
      title: "Real-time Analytics", 
      description: "Monitor your business performance with live data updates and comprehensive insights that help you make informed decisions.", 
      icon: "📊",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      title: "Revenue Tracking", 
      description: "Track your revenue streams, analyze financial trends, and optimize your income with detailed reporting and forecasting.", 
      icon: "💰",
      color: "from-green-500 to-emerald-500"
    },
    { 
      title: "Sales Monitoring", 
      description: "Keep track of your sales performance, conversion rates, and customer behavior to boost your business growth.", 
      icon: "📈",
      color: "from-purple-500 to-pink-500"
    },
    { 
      title: "User Management", 
      description: "Manage your users, track engagement metrics, and understand your audience with comprehensive user analytics.", 
      icon: "👥",
      color: "from-orange-500 to-red-500"
    },
    { 
      title: "Activity Logs", 
      description: "Monitor all system activities, track changes, and maintain detailed audit trails for security and compliance.", 
      icon: "📋",
      color: "from-indigo-500 to-purple-500"
    },
    { 
      title: "Performance Metrics", 
      description: "Analyze key performance indicators, benchmark your progress, and identify areas for improvement and growth.", 
      icon: "🎯",
      color: "from-teal-500 to-blue-500"
    },
  ];

  useEffect(() => {
    setIsInView(true);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-purple-100 border border-purple-200 rounded-full text-sm font-medium text-purple-700">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            Platform Features
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Everything You Need
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive business intelligence platform provides all the tools you need to 
            <span className="text-purple-600 font-semibold"> monitor, analyze, and grow </span>
            your business effectively
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                {/* Simple Learn More Link */}
                <button className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}>
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg transition-colors duration-200">
              Start Your Free Trial
            </button>
            <button className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-xl border border-gray-300 shadow-lg transition-colors duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
