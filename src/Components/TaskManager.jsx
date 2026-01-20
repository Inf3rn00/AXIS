import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, X, Trash2, CheckCircle2 } from 'lucide-react';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [description, setDescription] = useState('');
    const API_URL = '/api/tasks';

    const getTasks = async () => {
        try {
            const response = await fetch(API_URL);
            const jsonData = await response.json();
            setTasks(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTasks();
    }, []);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            if (response.ok) {
                setDescription('');
                getTasks();
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    const deleteTask = async (id) => {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            setTasks(tasks.filter(task => task.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className="min-h-screen bg-[#fafafa] text-zinc-900 font-sans flex flex-col items-center py-16">
            {/* Header Area */}
            <div className="w-full max-w-3xl px-6 mb-10">
                <Link to="/dashboard" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-blue-600 mb-8 transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Dashboard
                </Link>
                <div className="flex items-center justify-between border-b border-zinc-300 pb-6">
                    <div className="flex items-baseline gap-4">
                        <h1 className="text-3xl font-black uppercase tracking-tight text-zinc-900">Task_Manager</h1>
                        <span className="text-xs font-mono-data text-zinc-400">SYS_V.1.0</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white border border-zinc-200">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-bold uppercase text-zinc-500">Sync Active</span>
                    </div>
                </div>
            </div>

            {/* Input Form */}
            <div className="w-full max-w-3xl px-6 mb-12">
                <form className="flex gap-0 shadow-sm" onSubmit={onSubmitForm}>
                    <input
                        type="text"
                        className="flex-1 p-4 bg-white border border-zinc-300 border-r-0 outline-none font-mono-data text-sm focus:border-blue-500 focus:ring-0 transition-colors placeholder-zinc-400 text-zinc-900"
                        placeholder="ENTER_NEW_TASK_PROCESS..."
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button className="bg-zinc-900 text-white px-8 font-bold uppercase text-xs hover:bg-blue-600 transition-colors flex items-center gap-2 shadow-md">
                        <Plus className="w-4 h-4" />
                        Add Task
                    </button>
                </form>
            </div>

            {/* Task List */}
            <div className="w-full max-w-3xl px-6">
                <div className="bg-white border border-zinc-200 shadow-sm">
                    <div className="px-6 py-4 border-b border-zinc-100 bg-zinc-50 flex justify-between items-center">
                        <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Active Process Queue</span>
                        <span className="text-[10px] font-mono-data text-zinc-400">{tasks.length} TASKS PENDING</span>
                    </div>
                    <div>
                        {tasks.map((task, index) => (
                            <div key={task.id} className="flex justify-between items-center p-6 border-b border-zinc-100 last:border-0 hover:bg-blue-50/30 transition-colors group">
                                <div className="flex items-start gap-5">
                                    <span className="text-xs font-mono-data text-zinc-300 pt-1">{(index + 1).toString().padStart(2, '0')}</span>
                                    <div className="flex items-center gap-3">
                                        <div className="p-1 rounded-sm border border-zinc-200 text-transparent group-hover:border-blue-400 group-hover:text-blue-400 transition-all cursor-pointer">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors">{task.description}</span>
                                    </div>
                                </div>
                                <button
                                    className="text-zinc-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 p-2 hover:bg-red-50"
                                    onClick={() => deleteTask(task.id)}
                                    title="DELETE_TASK"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                        {tasks.length === 0 && (
                            <div className="p-12 text-center">
                                <p className="text-zinc-400 font-mono-data text-xs uppercase mb-2">No active tasks found in register.</p>
                                <p className="text-zinc-300 text-[10px]">Use the input above to initialize a new process.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-12 border-t border-zinc-200 pt-6 w-full max-w-3xl px-6 flex justify-between text-[10px] font-mono-data text-zinc-400 uppercase">
                <span>System Ready</span>
                <span>Waiting for input...</span>
            </div>
        </div>
    );
};

export default TaskManager;
