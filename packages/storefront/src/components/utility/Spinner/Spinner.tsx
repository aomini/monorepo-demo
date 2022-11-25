import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { SkinType } from '../../../types/button.types';
import clsx from 'clsx';

export type StrokeWidthRange =
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15;

type Props = {
  /**
   * Spinner Variant
   */
  skin?: SkinType;
  width?: number;
  strokeWidth?: StrokeWidthRange;
};
export type SpinnerProps = Props;
export const Spinner = ({
  skin = 'primary',
  width = 16,
  strokeWidth = 2,
  ...props
}: SpinnerProps) => {
  return (
    <IconSpinner skin={skin} className={clsx('spinner', skin)} {...props}>
      <svg
        width={width}
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx={50} cy={50} r='40' strokeWidth={strokeWidth} />
      </svg>
    </IconSpinner>
  );
};

const SpinnerStyle = (theme: DefaultTheme, skin: SkinType) => {
  return css`
    svg {
      stroke: ${theme.color[skin].default};
    }
  `;
};

const IconSpinner = styled.div<Props>`
  ${({ theme, skin }) => css`
    &.spinner {
      ${SpinnerStyle(theme, skin ? skin : 'primary')}

      svg {
        animation: rotate 3.6s linear infinite;

        circle {
          fill: none;
          stroke-dasharray: 300;
          animation: outline 2s cubic-bezier(0.77, 0, 0.18, 1) infinite;
        }
      }

      @keyframes outline {
        0% {
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dashoffset: 300;
        }
        100% {
          stroke-dashoffset: 600;
        }
      }

      @keyframes rotate {
        from {
          transform: rotate(0turn);
        }
        to {
          transform: rotate(-1turn);
        }
      }
    }
  `}
`;
