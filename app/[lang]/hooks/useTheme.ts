'use client';
import { useContext } from 'react';
import ThemeContext from '../../../store/ThemeContext';

export function useIsDarkMode(): boolean {
  const { isDarkMode } = useContext(ThemeContext);
  return isDarkMode;
}

export function useToggleThemeHandler(): () => void {
  const { toggleThemeHandler } = useContext(ThemeContext);
  return toggleThemeHandler;
}
