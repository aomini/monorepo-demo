import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { transitions } from '@/theme/theme';

export const Header = ({ children }: { children: React.ReactNode }) => {
  return <HeaderLayout>{children}</HeaderLayout>;
};

const HeaderLayout = styled.div`
  ${({ theme }) => css`
    padding: ${rem(14)} ${rem(24)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 3;

    .left-menu {
      display: flex;
      align-items: center;

      .logo {
        z-index: 3;
        display: flex;
        font-size: ${rem(19)};
        font-family: ${theme.fonts.family.circularStd.bold};
        min-height: 29px;
        margin-left: ${rem(22)};
        transition: ${transitions.transition};
        color: ${theme.color.blackDark};

        .brand-logo {
          min-height: 24px;
          max-height: 24px;
          min-width: 35px;
          margin-right: ${rem(15)};
        }

        h5 {
          &.logo-text {
            line-height: normal;
            transition: ${transitions.transition};
            max-width: 0;
            overflow: hidden;

            &.in {
              max-width: 100%;
              transition-delay: 0.2s;
            }
          }
        }
      }
    }
  `}
`;
