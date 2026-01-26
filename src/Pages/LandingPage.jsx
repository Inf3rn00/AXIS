import React from 'react';
import Navigation from '../Components/LandingPage/Navigation';
import Hero from '../Components/LandingPage/Hero';
import Features from '../Components/LandingPage/Features';
import LedgerPreview from '../Components/LandingPage/LedgerPreview';
import Manifesto from '../Components/LandingPage/Manifesto';
import Footer from '../Components/LandingPage/Footer';

/**
 * LandingPage component.
 * The main entry point for the application's public-facing site.
 * Composed of several modular sections.
 */
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-axis-light-bg dark:bg-axis-dark-bg text-axis-light-text dark:text-axis-dark-text font-sans transition-colors duration-300 overflow-x-hidden">

      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Value Proposition / Capabilities */}
      <Features />

      {/* Ledger Preview Section */}
      <LedgerPreview />

      {/* Manifesto Section */}
      <Manifesto />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
