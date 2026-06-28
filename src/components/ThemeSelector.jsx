// src/components/ThemeSelector.jsx
import { useState } from 'react';
import { Palette, Check } from 'lucide-react';
import { themes } from '../data/themes';

export default function ThemeSelector() {
  const [open, setOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      const found = themes.find(t => t.id === saved);
      if (found) {
        const root = document.documentElement;
        root.style.setProperty('--primary-hsl', found.primary);
        root.style.setProperty('--primary-hover-hsl', found.primaryHover);
        root.style.setProperty('--primary-light-hsl', found.primaryLight);
        return found.id;
      }
    }
    return themes[0].id;
  });

  const handleChange = (theme) => {
    const root = document.documentElement;
    root.style.setProperty('--primary-hsl', theme.primary);
    root.style.setProperty('--primary-hover-hsl', theme.primaryHover);
    root.style.setProperty('--primary-light-hsl', theme.primaryLight);
    setActiveTheme(theme.id);
    localStorage.setItem('theme', theme.id);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="glass-card flex items-center gap-2 px-4 py-2.5 text-sm hover:border-primary transition-colors"
        aria-label="Select theme" aria-expanded={open} aria-haspopup="listbox"
      >
        <Palette className="w-4 h-4 text-primary" aria-hidden="true" />
        <span className="hidden sm:inline">Theme</span>
        <span className="w-3 h-3 rounded-full border border-border bg-primary ml-1" aria-hidden="true" />
      </button>

      {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden="true" />}

      {open && (
        <div className="fixed top-16 right-4 z-50 glass-card w-56 p-2 animate-fade-in" role="listbox" onClick={e => e.stopPropagation()}>
          <p className="px-3 py-2 text-xs font-medium text-text-muted uppercase tracking-wider">Color Palette</p>
          {themes.map((theme) => (
            <button
              key={theme.id} onClick={() => handleChange(theme)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-[var(--radius-input)] transition-all duration-200 hover:bg-primary-light
                         ${activeTheme === theme.id ? 'bg-primary-light' : ''}`}
              role="option" aria-selected={activeTheme === theme.id}
            >
              <span className="w-5 h-5 rounded-full border-2 border-border flex-shrink-0" style={{ backgroundColor: `hsl(${theme.primary})` }} aria-hidden="true" />
              <span className="text-sm font-medium text-text flex-1 text-left">{theme.name}</span>
              {activeTheme === theme.id && <Check className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}