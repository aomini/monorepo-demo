import { useDarkMode } from '@/hooks/useDarkMode';
import { GlobalStyles } from '@/theme/globalStyles';
import {
  ThemeColor,
  Transitions,
  darkTheme,
  lightTheme,
  themeColor,
  transitions,
} from '@/theme/theme';
import type { AppProps } from 'next/app';
import { DefaultTheme, ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const themes = (): DefaultTheme & ThemeColor & Transitions => ({
    ...themeMode,
    toggle: toggleTheme,
    theme,
    themeColor,
    transitions,
  });

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
