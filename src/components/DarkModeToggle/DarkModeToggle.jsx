import { useTheme } from '../../context/ThemeContext';
import styles from './DarkModeToggle.module.css';

/**
 * DarkModeToggle - A toggle switch placed in the app header.
 * Shows a Sun icon in dark mode and a Moon icon in light mode.
 */
export function DarkModeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={styles.wrapper}>
      <label
        className={styles.toggle}
        title="Toggle Dark Mode"
        aria-label="Toggle dark mode"
      >
        <input
          type="checkbox"
          checked={isDark}
          onChange={toggleTheme}
          className={styles.input}
        />
        <span className={styles.slider}>
          <span className={styles.icon}>
            {isDark ? '☀️' : '🌙'}
          </span>
        </span>
      </label>
    </div>
  );
}
