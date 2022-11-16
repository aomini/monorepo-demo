import { createGlobalStyle, css } from 'styled-components';
import { rem } from 'polished';

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  @font-face {
    font-family: 'CircularStd-Book';
    src: url('/fonts/CircularStd-Book.eot');
    src: local('☺'), url('/fonts/CircularStd-Book.woff') format('woff'),
      url('/fonts/CircularStd-Book.ttf') format('truetype'),
      url('/fonts/CircularStd-Book.svg') format('svg');
    font-weight: 350;
    font-style: normal;
  }
  @font-face {
    font-family: 'CircularStd-BookItalic';
    src: url('/fonts/CircularStd-BookItalic.eot');
    src: url('/fonts/CircularStd-BookItalic.eot?#iefix')
        format('embedded-opentype'),
      url('/fonts/CircularStd-BookItalic.woff2') format('woff2'),
      url('/fonts/CircularStd-BookItalic.woff') format('woff'),
      url('/fonts/CircularStd-BookItalic.ttf') format('truetype'),
      url('/fonts/CircularStd-BookItalic.svg#CircularStd-BookItalic')
        format('svg');
    font-weight: 350;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'CircularStd-Medium';
    src: url('/fonts/CircularStd-Medium.eot');
    src: url('/fonts/CircularStd-Medium.eot?#iefix') format('embedded-opentype'),
      url('/fonts/CircularStd-Medium.woff2') format('woff2'),
      url('/fonts/CircularStd-Medium.woff') format('woff'),
      url('/fonts/CircularStd-Medium.ttf') format('truetype'),
      url('/fonts/CircularStd-Medium.svg#CircularStd-Medium') format('svg');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'CircularStd-MediumItalic';
    src: url('/fonts/CircularStd-MediumItalic.eot');
    src: url('/fonts/CircularStd-MediumItalic.eot?#iefix')
        format('embedded-opentype'),
      url('/fonts/CircularStd-MediumItalic.woff2') format('woff2'),
      url('/fonts/CircularStd-MediumItalic.woff') format('woff'),
      url('/fonts/CircularStd-MediumItalic.ttf') format('truetype'),
      url('/fonts/CircularStd-MediumItalic.svg#CircularStd-MediumItalic')
        format('svg');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'CircularStd-Bold';
    src: url('/fonts/CircularStd-Bold.eot');
    src: url('/fonts/CircularStd-Bold.eot?#iefix') format('embedded-opentype'),
      url('/fonts/CircularStd-Bold.woff2') format('woff2'),
      url('/fonts/CircularStd-Bold.woff') format('woff'),
      url('/fonts/CircularStd-Bold.ttf') format('truetype'),
      url('/fonts/CircularStd-Bold.svg#CircularStd-Bold') format('svg');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'CircularStd-BoldItalic';
    src: url('/fonts/CircularStd-BoldItalic.eot');
    src: url('/fonts/CircularStd-BoldItalic.eot?#iefix')
        format('embedded-opentype'),
      url('/fonts/CircularStd-BoldItalic.woff2') format('woff2'),
      url('/fonts/CircularStd-BoldItalic.woff') format('woff'),
      url('/fonts/CircularStd-BoldItalic.ttf') format('truetype'),
      url('/fonts/CircularStd-BoldItalic.svg#CircularStd-BoldItalic')
        format('svg');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'CircularStd-Black';
    src: url('/fonts/CircularStd-Black.eot');
    src: url('/fonts/CircularStd-Black.eot?#iefix') format('embedded-opentype'),
      url('/fonts/CircularStd-Black.woff2') format('woff2'),
      url('/fonts/CircularStd-Black.woff') format('woff'),
      url('/fonts/CircularStd-Black.ttf') format('truetype'),
      url('/fonts/CircularStd-Black.svg#CircularStd-Black') format('svg');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'CircularStd-BlackItalic';
    src: url('/fonts/CircularStd-BlackItalic.eot');
    src: url('/fonts/CircularStd-BlackItalic.eot?#iefix')
        format('embedded-opentype'),
      url('/fonts/CircularStd-BlackItalic.woff2') format('woff2'),
      url('/fonts/CircularStd-BlackItalic.woff') format('woff'),
      url('/fonts/CircularStd-BlackItalic.ttf') format('truetype'),
      url('/fonts/CircularStd-BlackItalic.svg#CircularStd-BlackItalic')
        format('svg');
    font-weight: 800;
    font-style: italic;
    font-display: swap;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: currentColor;
  }

  html,
  body {
    -webkit-text-size-adjust: 100%;
    margin: 0;
    min-height: 100%;
    font-family: ${theme.fonts.family.body};
    letter-spacing: ${theme.fonts.spacing.spacing};
    line-height: ${theme.fonts.height.lineHeight};
    scroll-behavior: smooth;
    background-color: ${theme.color.body};
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  a,
  button {
    &:focus {
      outline: none;
    }
  }

  p {
    margin: 0;

    + p {
      margin-top: 2rem;
    }
  }

  /* Normalize */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: normal;
    color: ${theme.color.text};
  }

  h1,
  .h1 {
    font-size: ${rem(theme.fonts.font.h1.size)};
    line-height: ${rem(theme.fonts.font.h1.lineHeight)};
    font-weight: ${theme.fonts.weight.bold};
  }

  h2,
  .h2 {
    font-size: ${rem(theme.fonts.font.h2.size)};
    line-height: ${rem(theme.fonts.font.h2.lineHeight)};
    font-weight: ${theme.fonts.weight.bold};
  }

  h3,
  .h3 {
    font-size: ${rem(theme.fonts.font.h3.size)};
    line-height: ${rem(theme.fonts.font.h3.lineHeight)};
    font-weight: ${theme.fonts.weight.normal};
  }

  h4,
  .h4 {
    font-size: ${rem(theme.fonts.font.h4.size)};
    line-height: ${rem(theme.fonts.font.h4.lineHeight)};
    font-weight: ${theme.fonts.weight.normal};
  }

  h5,
  .h5 {
    font-size: ${rem(theme.fonts.font.h5.size)};
    line-height: ${rem(theme.fonts.font.h5.lineHeight)};
    font-weight: ${theme.fonts.weight.bold};
  }

  h6,
  .h6 {
    font-size: ${rem(theme.fonts.font.h6.size)};
    line-height: ${rem(theme.fonts.font.h6.lineHeight)};
    font-weight: ${theme.fonts.weight.normal};
  }
`}
`;
