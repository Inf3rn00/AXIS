import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  Bell, 
  Search, 
  User, 
  Moon, 
  Sun,
  Menu,
  X
} from 'lucide-react';

const Dashboard = () => {
  const [theme, setTheme] = useState('light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle theme handler
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Set initial theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div 
      className="min-h-screen w-full font-sans transition-colors duration-300 ease-in-out"
      style={{
        backgroundColor: 'var(--bg-page)',
        color: 'var(--text-main)'
      }}
    >
      {/* 
        Injecting fonts and variables locally to keep this single-file 
        as requested. In a full app, these would go in global CSS.
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

        :root {
          --bg-page: #edf3f0;
          --text-main: #131b17;
          --primary: #384d42;
          --secondary: #a6a3bd;
          --accent: #846a95;
          
          /* Derived for subtle variations if needed, sticking strict to palette otherwise */
          --border-color: #a6a3bd; 
        }

        [data-theme='dark'] {
          --bg-page: #0c120f;
          --text-main: #e4ece8;
          --primary: #b2c7bc;
          --secondary: #45425c;
          --accent: #846a95;
          --border-color: #45425c;
        }

        .font-serif-display {
          font-family: 'Playfair Display', serif;
        }
        
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        /* Editorial Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
         ::-webkit-scrollbar-thumb {
          background-color: var(--secondary);
          border-radius: 4px;
        }
      `}</style>

      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-md border border-[var(--secondary)] text-[var(--text-main)] bg-[var(--bg-page)]"
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside 
          className={`
            fixed md:relative z-40 h-full w-64 
            border-r border-[var(--secondary)] bg-[var(--bg-page)]
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            flex flex-col
          `}
        >
          {/* Logo / Brand */}
          <div className="p-8 border-b border-[var(--secondary)]">
            <h1 className="font-serif-display text-2xl tracking-wide italic font-semibold text-[var(--primary)]">
              The Chronicle
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            <NavItem icon={<LayoutDashboard size={18} />} label="Overview" active />
            <NavItem icon={<FileText size={18} />} label="Articles" />
            <NavItem icon={<User size={18} />} label="Authors" />
            <NavItem icon={<Bell size={18} />} label="Notifications" badge="3" />
            <NavItem icon={<Settings size={18} />} label="Settings" />
          </nav>

          {/* User Profile Snippet */}
          <div className="p-6 border-t border-[var(--secondary)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[var(--secondary)] flex items-center justify-center bg-[var(--primary)] text-[var(--bg-page)] font-serif-display text-lg">
                JD
              </div>
              <div>
                <p className="text-sm font-medium">Jane Doe</p>
                <p className="text-xs opacity-70">Editor in Chief</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto h-full relative">
          
          {/* Header */}
          <header className="sticky top-0 z-30 px-8 py-6 bg-[var(--bg-page)]/90 backdrop-blur-sm border-b border-[var(--secondary)] flex justify-between items-center bg-[var(--bg-page)]">
            <div>
              <h2 className="font-serif-display text-3xl text-[var(--primary)]">Dashboard</h2>
              <p className="text-sm mt-1 opacity-70">Monday, October 24th, 2026</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50 w-4 h-4 text-[var(--text-main)]" />
                <input 
                  type="text" 
                  placeholder="Search archives..." 
                  className="pl-10 pr-4 py-2 text-sm bg-transparent border border-[var(--secondary)] rounded-md outline-none focus:border-[var(--primary)] w-64 transition-all placeholder-[var(--text-main)]/50 text-[var(--text-main)]"
                />
              </div>

              <button 
                onClick={toggleTheme}
                className="p-2 rounded-md border border-[var(--secondary)] hover:border-[var(--primary)] transition-colors text-[var(--text-main)]"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
          </header>

          {/* Content Area */}
          <div className="p-8 max-w-7xl mx-auto space-y-8">
            
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <EditorialCard title="Total Subscribers" value="24,592" trend="+12% from last month" />
              <EditorialCard title="Avg. Read Time" value="4m 12s" trend="+5% from last week" />
              <EditorialCard title="Active Authors" value="128" trend="Steady" />
            </div>

            {/* Main Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Recent Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-between items-baseline border-b border-[var(--secondary)] pb-2 mb-4">
                  <h3 className="font-serif-display text-xl text-[var(--primary)]">Recent Publications</h3>
                  <a href="#" className="text-sm underline decoration-[var(--secondary)] hover:decoration-[var(--primary)] underline-offset-4">View all</a>
                </div>

                <ArticleRow 
                  title="The Future of Digital Minimalism" 
                  category="Technology" 
                  date="Oct 24, 2026" 
                  status="Published"
                />
                <ArticleRow 
                  title="Architectural Marvels of the 21st Century" 
                  category="Design" 
                  date="Oct 23, 2026" 
                  status="Review"
                />
                <ArticleRow 
                  title="Sustainable Living: A Practical Guide" 
                  category="Lifestyle" 
                  date="Oct 22, 2026" 
                  status="Draft"
                />
                 <ArticleRow 
                  title="Modern Typography Trends" 
                  category="Design" 
                  date="Oct 21, 2026" 
                  status="Published"
                />
              </div>

              {/* Sidebar / Quick Actions */}
              <div className="space-y-6">
                <div className="border border-[var(--secondary)] p-6 rounded-md bg-[var(--bg-page)] relative overflow-hidden">
                   {/* Decorative top border element */}
                   <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent)] opacity-50"></div>
                   
                   <h3 className="font-serif-display text-lg mb-4 text-[var(--primary)]">Editorial Notes</h3>
                   <p className="text-sm leading-relaxed mb-4 opacity-80">
                     Remember to review the style guide for the upcoming Autumn issue. Focus on muted tones and serif pairings.
                   </p>
                   <button className="w-full py-2 text-sm border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--bg-page)] transition-colors rounded-sm uppercase tracking-wider font-medium">
                     Open Notepad
                   </button>
                </div>

                <div className="border border-[var(--secondary)] p-6 rounded-md">
                  <h3 className="font-serif-display text-lg mb-4 text-[var(--primary)]">Performance</h3>
                  <div className="space-y-4">
                    <ProgressBar label="Engagement Rate" value={78} />
                    <ProgressBar label="Bounce Rate" value={24} />
                    <ProgressBar label="Conversion" value={45} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// --- Sub Components ---

const NavItem = ({ icon, label, active = false, badge }) => {
  return (
    <div 
      className={`
        flex items-center justify-between px-3 py-2 rounded-sm cursor-pointer group transition-all duration-200
        ${active 
          ? 'bg-[var(--primary)] text-[var(--bg-page)] shadow-sm' 
          : 'text-[var(--text-main)] hover:bg-[var(--secondary)]/10'
        }
      `}
    >
      <div className="flex items-center gap-3">
        {React.cloneElement(icon, { size: 18 })}
        <span className="text-sm tracking-wide">{label}</span>
      </div>
      {badge && (
        <span className={`
          text-[10px] px-1.5 py-0.5 rounded-full border 
          ${active 
            ? 'border-[var(--bg-page)] text-[var(--bg-page)]' 
            : 'border-[var(--secondary)] text-[var(--text-main)]'
          }
        `}>
          {badge}
        </span>
      )}
    </div>
  );
};

const EditorialCard = ({ title, value, trend }) => {
  return (
    <div className="p-6 border border-[var(--secondary)] rounded-md bg-[var(--bg-page)] hover:shadow-sm transition-shadow">
      <h4 className="text-xs uppercase tracking-widest text-[var(--secondary)] font-semibold mb-2">{title}</h4>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="font-serif-display text-3xl text-[var(--primary)]">{value}</span>
      </div>
      <p className="text-xs text-[var(--text-main)] opacity-70 italic">{trend}</p>
    </div>
  );
};

const ArticleRow = ({ title, category, date, status }) => {
  return (
    <div className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-[var(--secondary)] rounded-sm hover:border-[var(--primary)] transition-colors cursor-pointer bg-[var(--bg-page)]">
      <div className="mb-2 sm:mb-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)]">
            {category}
          </span>
        </div>
        <h4 className="font-serif-display text-lg text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors">
          {title}
        </h4>
      </div>
      <div className="flex items-center gap-4 text-xs opacity-70">
        <span>{date}</span>
        <span className={`
          px-2 py-1 rounded-sm border 
          ${status === 'Published' ? 'border-[var(--primary)] text-[var(--primary)]' : 
            status === 'Review' ? 'border-[var(--accent)] text-[var(--accent)]' : 
            'border-[var(--secondary)]'
          }
        `}>
          {status}
        </span>
      </div>
    </div>
  );
};

const ProgressBar = ({ label, value }) => {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-1 w-full bg-[var(--secondary)]/20 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[var(--primary)]" 
          style={{ width: `${value}%` }} 
        />
      </div>
    </div>
  );
};

export default Dashboard;
