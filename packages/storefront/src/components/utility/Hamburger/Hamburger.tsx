import React from 'react';
import clsx from 'clsx';
import { rem } from 'polished';
import styled, { css } from 'styled-components';

type Props = {
  open: boolean;
  onClick(): void;
};

export type HamburgerProps = Props;

export const Hamburger = ({ onClick, open, ...props }: HamburgerProps) => {
  return (
    <HamburgerIcon open={open} onClick={onClick}>
      <div
        className={clsx('hamburger-menu', {
          active: open,
        })}
      >
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </HamburgerIcon>
  );
};

const HamburgerIcon = styled.div<Props>`
  ${({ theme, open }) => css`
    display: inline-block;
    padding: ${rem(10)};
    position: relative;
    z-index: 3;

    .hamburger-menu {
      position: relative;
      display: block;
      width: 22px;
      height: 22px;
      top: -1px;
      cursor: pointer;

      span {
        display: block;
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: ${theme.color.blackDark};
        transition: all 0.2s ease-in-out;

        &:nth-child(1) {
          top: 2px;
          left: 2px;

          ${open &&
          css`
            transform: translate(7px, 7px) scale(1);
          `}
        }
        &:nth-child(2) {
          top: 2px;
          left: 50%;
          transform: translate(-50%);
          ${open &&
          css`
            transform: translate(calc(-50% - 7px), 0) scale(1);
          `}
        }
        &:nth-child(3) {
          top: 2px;
          right: 2px;
          ${open &&
          css`
            transform: translate(-7px, 7px) scale(1);
          `}
        }
        &:nth-child(4) {
          top: 50%;
          left: 2px;
          transform: translateY(-50%);
          ${open &&
          css`
            transform: translate(0, calc(-50% + 8px)) scale(1);
          `}
        }
        &:nth-child(5) {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          ${open &&
          css`
            transform: translate(-50%, -50%) scale(1);
          `}
        }
        &:nth-child(6) {
          top: 50%;
          right: 2px;
          transform: translateY(-50%);
          ${open &&
          css`
            transform: translate(0, calc(-50% - 7px)) scale(1);
          `}
        }
        &:nth-child(7) {
          bottom: 2px;
          left: 2px;
          ${open &&
          css`
            transform: translate(7px, -7px) scale(1);
          `}
        }
        &:nth-child(8) {
          bottom: 2px;
          left: 50%;
          transform: translate(-50%);
          ${open &&
          css`
            transform: translate(calc(-50% + 7px), 1px) scale(1);
          `}
        }
        &:nth-child(9) {
          bottom: 2px;
          right: 2px;
          ${open &&
          css`
            transform: translate(-7px, -7px) scale(1);
          `}
        }
      }
    }
  `}
`;
