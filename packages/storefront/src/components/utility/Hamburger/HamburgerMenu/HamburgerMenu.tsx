import React from 'react';
import clsx from 'clsx';
import { rem, transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { border, themeColor, transitions } from '../../../../theme/theme';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export type HamburgerMenuProps = Props;

export const HamburgerMenu = ({
  children,
  className,
  ...props
}: HamburgerMenuProps) => {
  return (
    <HamburgerMenuItem className={clsx('hamburgerMenu', className)}>
      {children}
    </HamburgerMenuItem>
  );
};

const HamburgerMenuItem = styled.div<Props>`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    transition: transform ${transitions.transition} ease;
    z-index: 1;
    background-color: ${theme.color.body};
    border-top: ${rem(85)} solid transparent;
    border-bottom: ${rem(100)} solid transparent;
    padding-left: ${rem(24)};
    padding-right: ${rem(15)};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .menu-top {
      overflow-y: auto;
      border-bottom: ${rem(50)} solid transparent;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        padding-left: ${rem(35)};
        padding-top: ${rem(9)};
        padding-bottom: ${rem(9)};
        font-size: 16px;
        line-height: 20px;
        font-family: ${theme.fonts.family.circularStd.medium};
        background-color: transparent;
        color: ${theme.color.blackDark};
        border-radius: ${rem(border.radius)};
        transition: ${transitions.transition_1};

        + li {
          margin-top: ${rem(10)};
        }

        &.active,
        &:hover {
          background-color: ${themeColor.green['200']};
          color: ${themeColor.black['900']};
        }
      }

      + ul {
        margin-top: ${rem(10)};
        padding-top: ${rem(10)};
        border-top: 1px solid ${transparentize('0.9', `${theme.color.text}`)};
      }
    }
  `}
`;
