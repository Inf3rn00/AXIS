import React from 'react';

/**
 * Manifesto component for the Landing Page.
 * Displays the mission statement or philosophical underpinning of the product.
 * @returns {JSX.Element} The Manifesto section component.
 */
const Manifesto = () => {
    return (
        <section id="manifesto" className="py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                <div>
                    <span className="font-mono text-xs tracking-[0.3em] text-slate-400 mb-6 block">The AXIS Manifesto</span>
                    <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
                        "Clarity is the ultimate leverage."
                    </h2>
                </div>
                <div className="space-y-6 text-xl font-light leading-relaxed text-slate-300 max-w-2xl mx-auto">
                    <p>
                        In an age of infinite data, the scarce resource is not information—it is coherence.
                        We built Axis because we believe that the modern enterprise deserves an operating system
                        that is as disciplined as the minds that run it.
                    </p>
                    <p>
                        No clutter. No noise. Just the signals that matter.
                    </p>
                </div>
                <div className="pt-12">
                    <div className="h-px w-32 bg-slate-700 mx-auto mb-8"></div>
                    <p className="font-serif italic text-lg text-slate-400">The Axis Team</p>
                </div>
            </div>
        </section>
    );
};

export default Manifesto;
