import { ThemeProvider } from './context/ThemeContext';
import { DarkModeToggle } from './components/DarkModeToggle/DarkModeToggle';
import './styles/theme.css';

export default function App() {
  return (
    <ThemeProvider>
      <header style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '12px 24px',
        borderBottom: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-surface)',
      }}>
        <DarkModeToggle />
      </header>
      <main style={{ padding: '24px' }}>
        <h1>My App</h1>
        <p>Toggle dark mode using the button in the header.</p>
      </main>
    </ThemeProvider>
  );
}
