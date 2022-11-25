import React from 'react';
import clsx from 'clsx';
import { rem, transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { border, themeColor, transitions } from '@/theme/theme';
import { useMountTransition } from '@/hooks/useMountTransition';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export type HamburgerMenuProps = Props;

export const HamburgerSubMenu = ({
  children,
  className,
  ...props
}: HamburgerMenuProps) => {
  return (
    <HamburgerSubMenuWrapper className={clsx('submenu-wrapper', className)}>
      {children}
    </HamburgerSubMenuWrapper>
  );
};

const HamburgerSubMenuWrapper = styled.div<Props>`
  ${({ theme }) => css`
    height: 100%;
    position: relative;
    background-color: ${theme.color.menuOverlay};
    border-top: ${rem(85)} solid transparent;
    border-bottom: ${rem(100)} solid transparent;
    padding-left: ${rem(24)};
    padding-right: ${rem(15)};
    transition: ${transitions.transition};
  `}
`;
