import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Smartphone } from 'lucide-react';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState('initial'); // initial, success

    const handleSignUp = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setStep('success');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-axis-light-bg dark:bg-axis-dark-bg text-axis-light-text dark:text-axis-dark-text flex flex-col font-sans transition-colors duration-300 relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-slate-200/50 dark:bg-slate-800/20 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Header */}
            <header className="px-8 py-6 flex justify-between items-center z-10">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-sm text-axis-light-secondary hover:text-axis-light-text transition-colors font-medium"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </button>
                <div className="font-serif font-bold text-xl tracking-tight">AXIS</div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center p-6 z-10">
                <div className="w-full max-w-md bg-white dark:bg-axis-dark-surface p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 relative">

                    {step === 'success' ? (
                        <div className="text-center animate-in fade-in zoom-in duration-300 py-8">
                            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mx-auto flex items-center justify-center rounded-full mb-6 relative">
                                <CheckCircle className="w-10 h-10" />
                                <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping"></div>
                            </div>
                            <h2 className="font-serif text-3xl font-bold mb-4">Request Received</h2>
                            <p className="text-axis-light-secondary dark:text-axis-dark-secondary mb-8 leading-relaxed">
                                We have received your application. The board will review your credentials and contact you shortly.
                            </p>
                            <button
                                onClick={() => navigate('/login')}
                                className="w-full py-3 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-axis-light-text dark:text-axis-dark-text rounded-lg font-medium transition-colors"
                            >
                                Return to Login
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSignUp} className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                            <div className="text-center mb-8">
                                <h1 className="font-serif text-3xl font-bold mb-3">Request Access</h1>
                                <p className="text-sm text-axis-light-secondary dark:text-axis-dark-secondary">
                                    Join the operating system for modern business.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-axis-light-text dark:text-axis-dark-text">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="e.g. Joshua Doo"
                                        className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-axis-light-accent focus:border-transparent transition-all"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-axis-light-text dark:text-axis-dark-text">Organization</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="e.g. Axis Inc."
                                        className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-axis-light-accent focus:border-transparent transition-all"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-axis-light-text dark:text-axis-dark-text">Work Email</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="joshua@company.com"
                                        className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-axis-light-accent focus:border-transparent transition-all"
                                    />
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
                                        Submit Application <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>

                            <div className="text-center pt-2">
                                <span className="text-sm text-axis-light-secondary dark:text-axis-dark-secondary">Already have an account? </span>
                                <button
                                    type="button"
                                    onClick={() => navigate('/login')}
                                    className="text-sm font-semibold text-axis-light-accent dark:text-axis-dark-accent hover:underline"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </main>
        </div>
    );
};

export default SignUpPage;
