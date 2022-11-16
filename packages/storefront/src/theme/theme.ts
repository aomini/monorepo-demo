import { DefaultTheme } from 'styled-components';

export const themeColor = {
  black: {
    100: '#7A7E83',
    200: '#343A40',
    300: '#23272B',
    400: '#212529',
    500: '#0B0B0B',
    600: '#111111',
    900: '#000000',
  },
  white: {
    100: '#FAFCFC',
    200: '#DAE0E4',
    400: '#DAE0E4',
    300: '#E2E6EA',
    500: '#E0E0E0',
    600: '#F5F5F5',
    900: '#FFFFFF',
  },
  blue: {
    100: '#58AAFF',
    200: '#007BFF',
    300: '#0069D9',
  },
  gray: {
    100: '#B0B6BA',
    200: '#6C757D',
    300: '#5A6268',
  },
  green: {
    100: '#74C686',
    200: '#11FF91',
    300: '#28A745',
    400: '#218838',
  },
  red: {
    100: '#E97B86',
    200: '#DC3545',
    300: '#C82333',
  },
  orange: {
    100: '#FFD75E',
    200: '#FFC107',
    300: '#E0A800',
  },
  bluishCyan: {
    100: '#67C3D0',
    200: '#17A2B8',
    300: '#138496',
  },
};

export type ThemeColor = { themeColor: typeof themeColor };

export const transitions = {
  transition: '0.5s',
  transition_1: '0.3s',
};

export type Transitions = { transitions: typeof transitions };

export const border = {
  radius: 5,
  width: 1,
  outline: 3,
};

export const fieldHeight = {
  height: 38,
};

export const fonts = {
  family: {
    circularStd: {
      book: 'CircularStd-Book',
      bookItalic: 'CircularStd-BookItalic',
      medium: 'CircularStd-Medium',
      mediumItalic: 'CircularStd-MediumItalic',
      bold: 'CircularStd-Bold',
      boldItalic: 'CircularStd-BoldItalic',
      black: 'CircularStd-Black',
      blackItalic: 'CircularStd-BlackItalic',
    },
    body: 'Space Grotesk, sans-serif',
    heading: 'PT Serif, serif',
    bodySecondary: 'Space Grotesk, sans-serif',
    button: 'Space Grotesk, sans-serif',
  },
  font: {
    body: {
      size: 14,
      lineHeight: 16,
    },
    h1: {
      size: 40,
      lineHeight: 49,
    },
    h2: {
      size: 32,
      lineHeight: 49,
    },
    h3: {
      size: 28,
      lineHeight: 49,
    },
    h4: {
      size: 24,
      lineHeight: 49,
    },
    h5: {
      size: 20,
      lineHeight: 49,
    },
    h6: {
      size: 16,
      lineHeight: 49,
    },
  },
  spacing: {
    spacing: 0,
  },
  height: {
    lineHeight: 1.5,
  },
  weight: {
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

export const defaultColors = {
  primary: {
    disable: themeColor.blue['100'],
    default: themeColor.blue['200'],
    hover: themeColor.blue['300'],
    active: themeColor.blue['300'],
    contrast: themeColor.white['900'],
  },
  secondary: {
    disable: themeColor.gray['100'],
    default: themeColor.gray['200'],
    hover: themeColor.gray['300'],
    active: themeColor.gray['300'],
    contrast: themeColor.white['900'],
  },
  success: {
    disable: themeColor.green['100'],
    default: themeColor.green['300'],
    hover: themeColor.green['400'],
    active: themeColor.green['400'],
    contrast: themeColor.white['900'],
  },
  danger: {
    disable: themeColor.red['100'],
    default: themeColor.red['200'],
    hover: themeColor.red['300'],
    active: themeColor.red['300'],
    contrast: themeColor.white['900'],
  },
  warning: {
    disable: themeColor.orange['100'],
    default: themeColor.orange['200'],
    hover: themeColor.orange['300'],
    active: themeColor.orange['300'],
    contrast: themeColor.black['200'],
  },
  info: {
    disable: themeColor.bluishCyan['100'],
    default: themeColor.bluishCyan['200'],
    hover: themeColor.bluishCyan['300'],
    active: themeColor.bluishCyan['300'],
    contrast: themeColor.white['900'],
  },
  light: {
    disable: themeColor.white['100'],
    default: themeColor.white['200'],
    hover: themeColor.white['300'],
    active: themeColor.white['300'],
    contrast: themeColor.black['200'],
  },
  dark: {
    disable: themeColor.black['100'],
    default: themeColor.black['200'],
    hover: themeColor.black['300'],
    active: themeColor.black['300'],
    contrast: themeColor.white['900'],
  },
};

export const lightTheme: Omit<DefaultTheme, 'toggle'> = {
  theme: 'light',
  logo: '/logo-black.svg',
  smallLogo: '/small-logo-black.svg',
  shape: {
    shape1: '/shape1-black.svg',
    shape2: '/shape-circle-black.svg',
  },
  color: {
    body: themeColor.white['900'],
    text: themeColor.black['400'],
    white: themeColor.white['100'],
    black: themeColor.black['100'],
    blackDark: themeColor.black['600'],
    menuOverlay: themeColor.white['600'],
    ...defaultColors,
  },
  defaultButtonSkin: 'dark',
  borderColor: themeColor.gray['100'],
  fonts: fonts,
};

// TS should complain that bogusTheme does not fit type DefaultTheme
export const darkTheme: Omit<DefaultTheme, 'toggle'> = {
  theme: 'dark',
  logo: '/logo-white.svg',
  smallLogo: '/small-logo-white.svg',
  shape: {
    shape1: '/shape1.svg',
    shape2: '/shape-circle.svg',
  },
  color: {
    body: themeColor.black['500'],
    text: themeColor.white['100'],
    white: themeColor.white['100'],
    black: themeColor.black['100'],
    blackDark: themeColor.white['900'],
    menuOverlay: themeColor.black['600'],
    ...defaultColors,
  },
  defaultButtonSkin: 'light',
  borderColor: themeColor.gray['100'],
  fonts: fonts,
};
