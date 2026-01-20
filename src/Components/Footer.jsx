const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 pt-20 pb-10 font-sans border-t border-zinc-200">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-zinc-800 pb-16 mb-12">

          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-zinc-100 text-zinc-900 flex items-center justify-center">
                <span className="font-bold text-xs">CH</span>
              </div>
              <h3 className="font-bold uppercase tracking-widest text-sm text-white">Central_Hub</h3>
            </div>
            <p className="text-xs text-zinc-500 font-mono-data leading-relaxed max-w-xs mb-6">
              Enterprise business intelligence platform for data-driven organizations.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-800 rounded">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-[10px] uppercase font-bold text-zinc-400">System Optimal</span>
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] uppercase font-bold text-zinc-600 mb-6 tracking-widest font-mono-data">Platform</h4>
              <ul className="space-y-4 text-xs font-medium">
                <li><a href="#" className="hover:text-white transition-colors block">Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors block">Analytics Engine</a></li>
                <li><a href="#" className="hover:text-white transition-colors block">Task Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors block">API Access</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase font-bold text-zinc-600 mb-6 tracking-widest font-mono-data">Resources</h4>
              <ul className="space-y-4 text-xs font-medium">
                <li><a href="#" className="hover:text-white transition-colors block">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors block">Security Protocol</a></li>
                <li><a href="#" className="hover:text-white transition-colors block">System Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors block">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase font-bold text-zinc-600 mb-6 tracking-widest font-mono-data">Company</h4>
              <ul className="space-y-4 text-xs font-medium">
                <li><a href="#" className="hover:text-white transition-colors block">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors block">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors block">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors block">Legal</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-mono-data text-zinc-600">
          <p>© 2025 Central Hub Inc. All Data Secured.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>San Francisco, CA</span>
            <span className="text-zinc-500">UTC-8</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
