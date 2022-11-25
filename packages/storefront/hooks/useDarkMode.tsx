import React from 'react';
type Mode = 'light' | 'dark';

export const useDarkMode = (): [Mode, () => void] => {
  const [theme, setTheme] = React.useState<Mode>('light');
  const setMode = (mode: Mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };
  const toggleTheme = () => {
    theme === 'dark' ? setMode('light') : setMode('dark');
  };
  React.useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme ? setTheme(localTheme as Mode) : setMode('dark');
  }, []);
  return [theme, toggleTheme];
};
