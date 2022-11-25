// import original module declarations
import 'styled-components';
import { SkinType } from './src/types/button.types';

// and extend them!

type Variants = {
  default: string;
  hover: string;
  active: string;
  disable: string;
  contrast: string;
};
declare module 'styled-components' {
  export interface DefaultTheme {
    toggle: () => void;
    theme: string;
    logo: string;
    smallLogo: string;
    shape: {
      shape1: string;
      shape2: string;
    };
    color: {
      body: string;
      text: string;
      primary: Variants;
      secondary: Variants;
      success: Variants;
      danger: Variants;
      warning: Variants;
      info: Variants;
      light: Variants;
      dark: Variants;
      white: string;
      black: string;
      blackDark: string;
      menuOverlay: string;
    };
    defaultButtonSkin: SkinType;
    borderColor: string;
    fonts: {
      family: {
        circularStd: {
          book: string;
          bookItalic: string;
          medium: string;
          mediumItalic: string;
          bold: string;
          boldItalic: string;
          black: string;
          blackItalic: string;
        };
        body: string;
      };
      font: {
        body: {
          size: number;
          lineHeight: number;
        };
        h1: {
          size: number;
          lineHeight: number;
        };
        h2: {
          size: number;
          lineHeight: number;
        };
        h3: {
          size: number;
          lineHeight: number;
        };
        h4: {
          size: number;
          lineHeight: number;
        };
        h5: {
          size: number;
          lineHeight: number;
        };
        h6: {
          size: number;
          lineHeight: number;
        };
      };
      spacing: {
        spacing: number;
      };
      height: {
        lineHeight: number;
      };
      weight: {
        light: number;
        normal: number;
        medium: number;
        semiBold: number;
        bold: number;
      };
    };
  }
}
