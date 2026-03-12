import React from 'react';
import { useTheme } from './contexts/theme.context';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-main-bg text-main-text p-8 transition-colors duration-300">
      
      {/* Header Area */}
      <header className="max-w-4xl mx-auto flex justify-between items-center mb-16 border-b border-brand-silver/30 pb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight uppercase">Erika Rodriguez</h1>
          <p className="text-sm font-mono text-brand-teal uppercase tracking-widest">Finance & Sterile Operations</p>
        </div>
        
        <button 
          onClick={toggleTheme}
          className="px-4 py-2 rounded-brand bg-brand-navy text-brand-silver font-medium text-sm hover:ring-2 hover:ring-brand-teal transition-all"
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </header>

      <main className="max-w-4xl mx-auto space-y-12">
        <section className="bg-main-surface p-8 rounded-brand shadow-sm border border-brand-silver/20">
          <h2 className="text-lg font-bold mb-4 border-l-4 border-brand-teal pl-4 uppercase tracking-tighter">
            Option 1: Technical Precision
          </h2>
          <p className="leading-relaxed opacity-80">
            Currently viewing the <strong>{theme}</strong> theme. This palette leverages Deep Navy for stability 
            and Medical Teal for professional clarity.
          </p>
        </section>

        {/* Swatches will now respond automatically to the 'dark' class on <html> */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="h-32 w-full bg-brand-navy rounded-brand shadow-lg" />
            <p className="text-xs font-bold uppercase tracking-tighter">Deep Navy</p>
          </div>
          <div className="space-y-2">
            <div className="h-32 w-full bg-brand-teal rounded-brand shadow-lg" />
            <p className="text-xs font-bold uppercase tracking-tighter">Medical Teal</p>
          </div>
          <div className="space-y-2">
            <div className="h-32 w-full bg-brand-silver rounded-brand shadow-lg border border-black/5" />
            <p className="text-xs font-bold uppercase tracking-tighter">Silver Steel</p>
          </div>
        </section>
      </main>
    </div>
  );
}