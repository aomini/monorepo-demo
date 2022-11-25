import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import clsx from 'clsx';
import { rem } from 'polished';
import { transitions } from '../../../theme/theme';
import { Spinner } from '../Spinner/Spinner';
import { SkinType } from '../../../types/button.types';
import { useMountTransition } from '../../../../hooks/useMountTransition';

export type VariantType = 'contained' | 'outline' | 'ghost' | 'link';
export type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Props = {
  /**
   * Status variant
   */
  variant: VariantType;
  /**
   * Status Skin
   */
  skin?: SkinType;
  /**
   * Status sizes
   */
  size?: SizeType;
  /**
   * Status Roundness
   */
  rounded?: boolean;
  /**
   * Status isLoading
   */
  isLoading?: boolean;
  /**
   * Status children
   */
  children?: React.ReactNode;
};

export type ButtonProps = Props & Omit<JSX.IntrinsicElements['button'], 'ref'>;

export const Button = ({
  skin = 'dark',
  variant,
  size,
  rounded,
  isLoading,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  const skinLoaderColor =
    variant === 'contained'
      ? skin === 'dark'
        ? 'light'
        : skin === 'light'
        ? 'dark'
        : 'light'
      : skin;

  const isTransitioning = useMountTransition({
    isMounted: isLoading,
    unmountDelay: 300,
  });

  return (
    <StyledButton
      variant={variant}
      skin={skin}
      rounded={rounded}
      className={clsx(skin, variant, size, { rounded, isLoading })}
      onClick={onClick}
      {...props}
    >
      {isTransitioning ? (
        <Spinner skin={skinLoaderColor} strokeWidth={15} />
      ) : null}
      {children}
    </StyledButton>
  );
};

const defaultSpinner = (color = '#fff') => `
.spinner {
  svg {
    circle {
      stroke: ${color};
    }
  }
}`;

const ContainedButtonStyle = (theme: DefaultTheme, skin: SkinType) => {
  return css`
    background-color: ${theme.color[skin].default};
    color: ${theme.color[skin].contrast};

    &:hover {
      background-color: ${theme.color[skin].hover};

      ${css`
        ${defaultSpinner(theme.color[skin].contrast)}
      `}
    }

    &:active,
    .active {
      background-color: ${theme.color[skin].active};
      box-shadow: ${theme.color[skin].disable} 0 0 0 3px;

      ${css`
        ${defaultSpinner(theme.color[skin].contrast)}
      `}
    }

    &[disabled] {
      background-color: ${theme.color[skin].disable};

      ${css`
        ${defaultSpinner(theme.color[skin].contrast)}
      `}
    }

    &.sm {
      padding-top: ${rem(7.5)};
      padding-bottom: ${rem(7.5)};
    }
  `;
};

const OutlineButtonStyle = (theme: DefaultTheme, skin: SkinType) => {
  return css`
    background-color: transparent;
    border-width: 1px;
    border-color: ${theme.color[skin].default};
    color: ${theme.color[skin].default};

    &:hover {
      background-color: ${theme.color[skin].hover};
      color: ${theme.color[skin].contrast};

      ${css`
        ${defaultSpinner(theme.color[skin].contrast)}
      `}
    }

    &:active,
    .active {
      box-shadow: ${theme.color[skin].disable} 0 0 0 3px;
      border-color: ${theme.color[skin].disable};
      background-color: ${theme.color[skin].active};

      ${css`
        ${defaultSpinner(theme.color[skin].contrast)}
      `}
    }

    &[disabled] {
      background-color: ${theme.color[skin].disable};
      color: ${theme.color[skin].contrast};

      ${css`
        ${defaultSpinner(theme.color[skin].contrast)}
      `}
    }

    &.sm {
      padding-top: ${rem(7.5)};
      padding-bottom: ${rem(7.5)};
    }
  `;
};

const GhostButtonStyle = (theme: DefaultTheme, skin: SkinType) => {
  return css`
    background-color: transparent;
    color: ${theme.color[skin].default};

    &:hover {
      background-color: ${theme.color[skin].hover};
      color: ${theme.color[skin].contrast};

      ${css`
        ${defaultSpinner(theme.color[skin].contrast)}
      `}
    }

    &:active,
    .active {
      background-color: ${theme.color[skin].active};
      box-shadow: ${theme.color[skin].disable} 0 0 0 3px;

      ${css`
        ${defaultSpinner(theme.color[skin].contrast)}
      `}
    }

    &[disabled] {
      background-color: ${theme.color[skin].disable};

      ${css`
        ${defaultSpinner(theme.color[skin].contrast)}
      `}
    }
  `;
};

const LinkButtonStyle = (theme: DefaultTheme, skin: SkinType) => {
  return css`
    padding: 0;
    background-color: transparent;
    color: ${theme.color[skin].default};

    &:hover {
      color: ${theme.color[skin].hover};
      text-decoration: underline;
      ${css`
        ${defaultSpinner(theme.color[skin].hover)}
      `}
    }

    &:active,
    .active {
      color: ${theme.color[skin].active};
      ${css`
        ${defaultSpinner(theme.color[skin].active)}
      `}
    }

    &[disabled] {
      color: ${theme.color[skin].disable};

      ${css`
        ${defaultSpinner(theme.color[skin].disable)}
      `}
    }
  `;
};

const StyledButton = styled.button<Props>`
  ${({ theme, variant, skin, rounded }) => css`
    font-size: ${rem(theme.fonts.font.body.size)};
    line-height: ${rem(theme.fonts.font.body.lineHeight)};
    display: flex;
    align-items: center;
    transition: ${transitions.transition_1} ease;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    padding: ${rem(11)} ${rem(20)};

    &[disabled] {
      pointer-events: none;
    }

    .spinner {
      margin-right: ${rem(10)};
    }

    ${rounded &&
    css`
      border-radius: 5px;
    `}

    //variant contained
    ${variant === 'contained' &&
    css`
      ${ContainedButtonStyle(theme, skin ? skin : 'primary')}
    `}

    //variant outline
    ${variant === 'outline' &&
    css`
      ${OutlineButtonStyle(theme, skin ? skin : 'primary')}
    `}
    
    //variant ghost
    ${variant === 'ghost' &&
    css`
      ${GhostButtonStyle(theme, skin ? skin : 'primary')}
    `} 
    //variant link
    ${variant === 'link' &&
    css`
      ${LinkButtonStyle(theme, skin ? skin : 'primary')}
    `} //sizes
    // &.xs {
    //   padding: 0 ${rem(8)};
    // }
    // &.sm {
    //   padding: ${rem(3)} ${rem(12)};
    // }
    // &.md {
    //   padding: ${rem(6)} ${rem(16)};
    // }
    // &.lg {
    //   padding: ${rem(7)} ${rem(24)};
    // }
    // &.xl {
    //   padding: ${rem(8.5)} ${rem(28)};
    // }
  `}
`;
