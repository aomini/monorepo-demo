import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import clsx from 'clsx';
import { SkinType } from '../../../types/button.types';

type Props = {
  /**
   * Status Skin
   */
  width?: number;
  /**
   * Status Skin
   */
  skin?: SkinType;
};

export type BadgeProps = Props;

const getSkinType = (skin: SkinType) => {
  switch (skin) {
    case 'primary':
      return 'status-primary';
    case 'secondary':
      return 'status-secondary';
    case 'success':
      return 'status-success';
    case 'danger':
      return 'status-danger';
    case 'warning':
      return 'status-warning';
    case 'info':
      return 'status-info';
    case 'light':
      return 'status-light';
    case 'dark':
      return 'status-dark';
    default:
      return 'status-primary';
  }
};
export const Status = ({
  skin = 'primary',
  width = 24,
  ...props
}: BadgeProps) => {
  return (
    <StyledStatus
      width={width}
      skin={skin}
      className={clsx('status', getSkinType(skin))}
      {...props}
    />
  );
};

const StatusStyle = (theme: DefaultTheme, skin: SkinType) => {
  return css`
    background-color: ${theme.color[skin].default};
  `;
};

const StyledStatus = styled.span<Props>`
  ${({ theme, skin, width }) => css`
    height: ${`${width}px`};
    width: ${`${width}px`};
    display: inline-block;
    border-radius: 100%;
    ${StatusStyle(theme, skin ? skin : 'primary')}
  `}
`;
