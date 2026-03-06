import React, { createContext, useState, ReactNode } from 'react';
import { LightTheme, DarkTheme } from './theme';
import { useColorScheme } from 'react-native';

type ThemeType = typeof LightTheme;

interface ThemeContextType {
  theme: ThemeType;
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemTheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemTheme === 'dark' ? true : false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const theme = isDark ? DarkTheme : LightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
