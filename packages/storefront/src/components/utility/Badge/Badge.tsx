import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import clsx from 'clsx';
import { rem } from 'polished';
import { SkinType } from '../../../types/button.types';

export type VariantType = 'contextual' | 'pill' | 'link';

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
   * Status children
   */
  children?: React.ReactNode;
};

export type BadgeProps = Props & Omit<JSX.IntrinsicElements['a'], 'ref'>;

const getVariantType = (variant: VariantType) => {
  switch (variant) {
    case 'contextual':
      return '';
    case 'pill':
      return 'badge-pill';
    case 'link':
      return 'badge-link';
    default:
      return '';
  }
};

const getSkinType = (skin: SkinType) => {
  switch (skin) {
    case 'primary':
      return 'badge-primary';
    case 'secondary':
      return 'badge-secondary';
    case 'success':
      return 'badge-success';
    case 'danger':
      return 'badge-danger';
    case 'warning':
      return 'badge-warning';
    case 'info':
      return 'badge-info';
    case 'light':
      return 'badge-light';
    case 'dark':
      return 'badge-dark';
    default:
      return 'badge-primary';
  }
};
export const Badge = ({
  skin = 'primary',
  variant = 'contextual',
  children,
  ...props
}: BadgeProps) => {
  return (
    <StyledBadge
      variant={variant}
      as={variant === 'link' ? 'a' : 'span'}
      skin={skin}
      className={clsx('badge', getVariantType(variant), getSkinType(skin))}
      {...props}
    >
      {children}
    </StyledBadge>
  );
};

const BadgeStyle = (theme: DefaultTheme, skin: SkinType) => {
  return css`
    background-color: ${theme.color[skin].default};
    color: ${theme.color[skin].contrast};
  `;
};

const StyledBadge = styled.span<Props>`
  ${({ theme, skin, variant }) => css`
    &.badge {
      font-size: ${rem(12)};
      line-height: 12px;
      font-weight: bold;
      padding: ${rem(4)} ${rem(9.6)};
      border-radius: 2px;

      ${BadgeStyle(theme, skin ? skin : 'primary')}

      ${variant === 'pill' &&
      css`
        border-radius: 160px;
      `}
    }
  `}
`;
