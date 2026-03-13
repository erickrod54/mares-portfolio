import React from 'react';
import { useTheme } from './contexts/theme.context';
import { Button } from './components/ui/button'; 

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header>
        <div>
          <h1>Erika Rodriguez</h1>
          <p className="text-brand-teal uppercase tracking-[0.2em] font-mono">
            Finance & Sterile Operations
          </p>
        </div>
        <Button 
          onClick={toggleTheme}
          variant="outline"
          className="w-full sm:w-auto border-brand-teal text-brand-teal"
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </Button>
      </header>

      <main>
        <section className="bg-main-text/5 p-6 sm:p-10 rounded-brand shadow-sm">
          <h2>Brand Concept: Technical Precision</h2>
          <p>
            Visual identity built on authority and hygiene. 
            The deep navy provides financial trust, while medical teal 
            bridges sterile environments with modern digital systems.
          </p>
        </section>

        {/* You still use Tailwind grid here because grids are content-specific */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { label: 'Deep Navy', hex: '#1B263B', class: 'bg-brand-navy' },
            { label: 'Medical Teal', hex: '#415A77', class: 'bg-brand-teal' },
            { label: 'Silver Steel', hex: '#E0E1DD', class: 'bg-brand-silver' }
          ].map((color) => (
            <div key={color.label} className="group">
              <div className={`${color.class} h-40 lg:h-56 w-full rounded-brand shadow-lg mb-3`} />
              <h3 className="font-bold uppercase tracking-widest">{color.label}</h3>
              <p className="font-mono opacity-50">{color.hex}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}