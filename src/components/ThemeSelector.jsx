// src/components/ThemeSelector.jsx
import { useState } from 'react';
import { Palette, Check } from 'lucide-react';
import { themes } from '../data/themes';

export default function ThemeSelector() {
  const [open, setOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(themes[0].id);

  const applyTheme = (theme) => {
    const root = document.documentElement;
    // CSS Variables আপডেট → সারাসরি UI update হয় (Tailwind utilities auto-refresh)
    root.style.setProperty('--primary-hsl', theme.primary);
    root.style.setProperty('--primary-hover-hsl', theme.primaryHover);
    root.style.setProperty('--primary-light-hsl', theme.primaryLight);
    
    setActiveTheme(theme.id);
    localStorage.setItem('theme', theme.id);
    setOpen(false);
  };

  // Initial load from localStorage
  const saved = localStorage.getItem('theme');
  if (saved) {
    const t = themes.find(x => x.id === saved) || themes[0];
    applyTheme(t);
    setActiveTheme(t.id);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="glass-card flex items-center gap-2 px-4 py-2.5 text-sm
                   hover:border-[hsl(var(--primary-hsl))] transition-colors"
        aria-label="Select theme"
      >
        <Palette className="w-4 h-4 text-[hsl(var(--primary-hsl))]" />
        <span className="hidden sm:inline">Theme</span>
        <span className="w-3 h-3 rounded-full border border-[hsl(var(--border-hsl))] 
                         bg-[hsl(var(--primary-hsl))] ml-1" />
      </button>

      {open && (
        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden="true" />
      )}

      {open && (
        <div className="fixed top-16 right-4 z-50 glass-card w-56 p-2 animate-fade-in"
             role="menu" onClick={e => e.stopPropagation()}>
          <p className="px-3 py-2 text-xs font-medium text-[hsl(var(--text-muted-hsl))] uppercase tracking-wider">
            Color Palette
          </p>
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => applyTheme(theme)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-[var(--radius-input)]
                         transition-all duration-200 hover:bg-[hsl(var(--primary-light-hsl))]
                         ${activeTheme === theme.id ? 'bg-[hsl(var(--primary-light-hsl))]' : ''}`}
              role="menuitem"
            >
              <span 
                className="w-5 h-5 rounded-full border-2 border-[hsl(var(--border-hsl))] flex-shrink-0"
                style={{ backgroundColor: `hsl(${theme.primary})` }}
              />
              <span className="text-sm font-medium text-[hsl(var(--text-hsl))] flex-1 text-left">
                {theme.name}
              </span>
              {activeTheme === theme.id && (
                <Check className="w-4 h-4 text-[hsl(var(--primary-hsl))] flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 150ms ease-out; }
      `}</style>
    </div>
  );
}