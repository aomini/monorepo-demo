// @ts-check
// import { RouterContext } from 'next/dist/shared/lib/router-context';
// .storybook/preview.tsx
import { ThemeProvider } from 'styled-components';
import { DecoratorFn } from '@storybook/react';
import { lightTheme, darkTheme } from '../src/theme/theme';

import * as NextImage from 'next/image';
import '../src/pages/globals.css';
// import { AuthProvider } from '../state/auth/AuthContext';

const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    console.log(val);
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
  layout: 'fullscreen',
  // nextRouter: {
  //   Provider: RouterContext.Provider,
  // },
};

const withTheme = (StoryFn, context) => {
  // Get the active theme value from the story parameter
  const { theme } = context.parameters;
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={storyTheme}>
      <StoryFn />
    </ThemeProvider>
  );
};

export const decorators = [withTheme];
