import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#fafafa] text-zinc-900 overflow-hidden font-sans border-b border-zinc-200">
      {/* Grid Background - Softer */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#e4e4e7 1px, transparent 1px), linear-gradient(90deg, #e4e4e7 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        opacity: 0.5
      }}></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>

          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-zinc-200 shadow-sm mb-8">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-mono-data font-bold uppercase tracking-widest text-zinc-600">
              System Online // v2.1.0
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter uppercase leading-[0.9] text-zinc-900">
            Central
            <br />
            <span className="text-zinc-400">Hub</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-2xl font-light leading-relaxed text-zinc-600">
            Enterprise-grade business intelligence.
            <br />
            Designed for clarity, precision, and performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-fit">
            <Link to="/dashboard">
              <button className="px-10 py-5 bg-zinc-900 text-white font-bold text-sm uppercase hover:bg-blue-600 transition-colors shadow-lg font-mono-data tracking-wider">
                Launch_Terminal
              </button>
            </Link>
            <button className="px-10 py-5 bg-white text-zinc-900 border border-zinc-200 font-bold text-sm uppercase hover:bg-zinc-50 hover:border-zinc-300 transition-all font-mono-data tracking-wider shadow-sm">
              Documentation
            </button>
          </div>

          <div className="mt-20 flex gap-12 font-mono-data text-[10px] text-zinc-400 uppercase tracking-widest border-t border-zinc-200 pt-8 w-full max-w-md">
            <div>
              <p className="font-bold text-zinc-900 mb-1">Architecture</p>
              <p>React 18 / Node.js</p>
            </div>
            <div>
              <p className="font-bold text-zinc-900 mb-1">Status</p>
              <p className="text-green-600">● 99.9% Uptime</p>
            </div>
            <div>
              <p className="font-bold text-zinc-900 mb-1">Latency</p>
              <p>&lt; 24ms (Global)</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
