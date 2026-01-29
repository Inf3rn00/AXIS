import React from 'react';
import { Mail, Phone, MapPin, MoreHorizontal } from 'lucide-react';

const Team = () => {
    const members = [
        {
            name: 'Joshua Dodo',
            role: 'Workspace Admin',
            email: 'joshua.doo@axis-finance.com',
            location: 'New York, USA',
            status: 'Active',
            department: 'Executive',
            initials: 'JD',
            color: 'bg-white/10'
        },
        {
            name: 'Sarah Wilson',
            role: 'Senior Financial Analyst',
            email: 'sarah.w@axis-finance.com',
            location: 'London, UK',
            status: 'Active',
            department: 'Finance',
            initials: 'SW',
            color: 'bg-white/10'
        },
        {
            name: 'Michael Chen',
            role: 'Operations Manager',
            email: 'm.chen@axis-finance.com',
            location: 'Singapore',
            status: 'Away',
            department: 'Operations',
            initials: 'MC',
            color: 'bg-white/10'
        },
        {
            name: 'Emily Davis',
            role: 'Legal Counsel',
            email: 'emily.d@axis-finance.com',
            location: 'New York, USA',
            status: 'Active',
            department: 'Legal',
            initials: 'ED',
            color: 'bg-white/10'
        },
        {
            name: 'James Rodriguez',
            role: 'Systems Architect',
            email: 'j.rodriguez@axis-finance.com',
            location: 'Austin, USA',
            status: 'Offline',
            department: 'Technology',
            initials: 'JR',
            color: 'bg-white/10'
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white mb-2">Team Members</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Manage access and view active personnel.</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30">
                    Invite Member
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member, index) => (
                    <div key={index} className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`w-12 h-12 rounded-full ${member.color} flex items-center justify-center text-white font-bold text-lg`}>
                                {member.initials}
                            </div>
                            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                                <MoreHorizontal className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{member.role}</p>
                        </div>

                        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-6">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-slate-400" />
                                <span className="truncate">{member.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-slate-400" />
                                <span>{member.location}</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                            <span className="inline-flex items-center px-2 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 rounded">
                                {member.department}
                            </span>
                            <div className="flex items-center gap-2 text-xs font-medium">
                                <span className={`w-2 h-2 rounded-full ${member.status === 'Active' ? 'bg-emerald-500' :
                                        member.status === 'Away' ? 'bg-amber-500' : 'bg-slate-300'
                                    }`}></span>
                                <span className={
                                    member.status === 'Active' ? 'text-emerald-600 dark:text-emerald-400' :
                                        member.status === 'Away' ? 'text-amber-600 dark:text-amber-400' : 'text-slate-400'
                                }>{member.status}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
