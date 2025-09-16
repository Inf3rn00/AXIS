import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


 


  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`,
        }}
      />

      <div />

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90">
            <span className="animate-pulse w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Business Analytics Platform
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400">
            Central Hub
          </h1>

          {/* Clear Value Proposition */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-gray-200 font-light leading-relaxed max-w-4xl mx-auto">
            Your comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
              {" "}
              business intelligence platform{" "}
            </span>
            for data-driven decisions
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Track sales, monitor performance, analyze revenue, and manage your
            business operations from one unified dashboard.
          </p>

          {/* Key Features Preview */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
            {[
              " Real-time Analytics",
              " Revenue Tracking",
              " Sales Monitoring",
              " User Management",
              " Activity Logs",
              " Performance Metrics",
            ].map((feature, index) => (
              <span
                key={feature}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white/80 hover:bg-white/10 transition-colors cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/dashboard">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-xl hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 border border-purple-500/30">
                <span className="relative z-10 flex items-center">
                  Launch Dashboard
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
};

export default Hero;
