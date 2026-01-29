import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, Key } from 'lucide-react';

const LoginPage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState('initial'); // initial, verifying, success

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStep('verifying');

        // Simulate auth delay
        setTimeout(() => {
            setStep('success');
            setTimeout(() => {
                navigate('/Dashboard');
            }, 800);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-axis-light-bg dark:bg-axis-dark-bg text-axis-light-text dark:text-axis-dark-text flex flex-col font-sans transition-colors duration-300 relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-slate-200/50 dark:bg-slate-800/20 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Header */}
            <header className="px-8 py-6 flex justify-between items-center z-10">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-sm text-axis-light-secondary hover:text-axis-light-text transition-colors font-medium"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Cover
                </button>
                <div className="font-serif font-bold text-xl tracking-tight">AXIS</div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center p-6 z-10">
                <div className="w-full max-w-md bg-white dark:bg-axis-dark-surface p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 relative">

                    {step === 'success' ? (
                        <div className="text-center animate-in fade-in zoom-in duration-300 py-8">
                            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mx-auto flex items-center justify-center rounded-full mb-6 relative">
                                <ShieldCheck className="w-10 h-10" />
                                <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping"></div>
                            </div>
                            <h2 className="font-serif text-3xl font-bold mb-4">Identity Verified</h2>
                            <p className="text-axis-light-secondary dark:text-axis-dark-secondary mb-4">Granting access to the ledger...</p>
                        </div>
                    ) : (
                        <form onSubmit={handleLogin} className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                            <div className="text-center mb-8">
                                <h1 className="font-serif text-3xl font-bold mb-3">Welcome Back</h1>
                                <p className="text-sm text-axis-light-secondary dark:text-axis-dark-secondary">
                                    Please enter your credentials to access the terminal.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-axis-light-text dark:text-axis-dark-text">Email Address</label>
                                    <input
                                        type="email"
                                        defaultValue="joshua.doo@axis-finance.com"
                                        className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-axis-light-accent focus:border-transparent transition-all"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-axis-light-text dark:text-axis-dark-text">Access Key</label>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            defaultValue="password123"
                                            className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-axis-light-accent focus:border-transparent transition-all"
                                        />
                                        <Key className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-axis-light-accent dark:bg-axis-dark-accent text-white py-4 flex items-center justify-center gap-2 rounded-xl font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:hover:translate-y-0"
                            >
                                {isLoading ? (
                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                ) : (
                                    <>
                                        Authenticate <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>

                            <div className="text-center pt-2">
                                <span className="text-sm text-axis-light-secondary dark:text-axis-dark-secondary">Don't have access? </span>
                                <button
                                    type="button"
                                    onClick={() => navigate('/signup')}
                                    className="text-sm font-semibold text-axis-light-accent dark:text-axis-dark-accent hover:underline"
                                >
                                    Request Access
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </main>
        </div>
    );
};

// Fix for strict mode double render
const state = 'initial';

export default LoginPage;
