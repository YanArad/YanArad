import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

/**
 * ThemeProvider - wraps the app and provides dark/light mode state.
 * Persists preference to localStorage.
 */
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    // Restore preference from localStorage on load
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    // Persist preference on change
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    // Apply class to <html> for global CSS
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useTheme - custom hook for accessing theme context.
 * @returns {{ isDark: boolean, toggleTheme: () => void }}
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
