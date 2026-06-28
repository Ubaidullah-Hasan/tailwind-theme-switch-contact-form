import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('color-scheme');
    let dark;
    if (saved) {
      dark = saved === 'dark';
    } else {
      dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    document.documentElement.classList.toggle('light', !dark);
    return dark;
  });

  const toggle = () => {
    document.documentElement.classList.toggle('light', !isDark);
    localStorage.setItem('color-scheme', isDark ? 'light' : 'dark');
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggle}
      className="glass-card flex items-center gap-2 px-3 py-2.5 text-sm hover:border-primary transition-colors"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-text-muted" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4 text-text-muted" aria-hidden="true" />
      )}
    </button>
  );
}
