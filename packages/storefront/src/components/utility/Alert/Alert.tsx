import { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { rem, transparentize } from 'polished';
import styled from 'styled-components';

export type VariantType = 'success' | 'info' | 'warning' | 'danger';
export type WidthType = 'sm' | 'md' | 'lg' | 'xl';

export interface IProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Spinner Variant options
   */
  variant: VariantType;
  /**
   * title
   */
  title: string;
  /**
   * subtitle
   */
  subTitle: string;
  /**
   * Boolean value to define the button roundness
   */
  rounded?: boolean;
  /**
   * Boolean value to define the alert next line
   */
  nextLine?: boolean;
  /**
   * Boolean value to define the alert border
   */

  border?: boolean;
  /**
   * Spinner width options
   */
  width?: WidthType;

  /**
   * Spinner click action
   */

  onClick(): void;
}

export const Alert = ({
  variant,
  width = 'xl',
  title,
  subTitle,
  rounded,
  nextLine = false,
  border = true,
  onClick,
  ...props
}: IProps) => {
  const loadClass = (variant: string) => {
    switch (variant) {
      case 'success':
        return 'alert alert-success';
      case 'info':
        return 'alert alert-info';
      case 'warning':
        return 'alert alert-warning';
      case 'danger':
        return 'alert alert-danger';
      default:
        return 'alert alert-success';
    }
  };

  const loadIcons = (variant: string) => {
    switch (variant) {
      case 'success':
        return 'icon-success';
      case 'info':
        return 'icon-info';
      case 'warning':
        return 'icon-warning';
      case 'danger':
        return 'icon-danger';
      default:
        return 'icon-success';
    }
  };

  return (
    <AlertBlock
      /*{...props}*/
      className={clsx(loadClass(variant), width, { rounded, border })}
      role='alert'
    >
      <div className={clsx('icon', loadIcons(variant))} />
      <div className='label'>
        {title ? <strong>{title}</strong> : null}
        {nextLine ? <br /> : ''}
        {subTitle ? subTitle : null}
      </div>
      <span className='close' onClick={onClick}>
        <svg
          className='fill-current h-6 w-6 text-red-500'
          role='button'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <title>Close</title>
          <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
        </svg>
      </span>
    </AlertBlock>
  );
};

const AlertBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  margin: 0 auto;
  width: 100%;

  &.alert {
    &.xl {
      max-width: 100%;
    }

    &.lg {
      max-width: 75%;
    }

    &.md {
      max-width: 50%;
    }

    &.sm {
      max-width: 25%;
    }

    &.border {
      border-width: 1px;
      border-left-width: 5px;
    }

    border-left-width: 5px;

    &-success {
      background-color: ${transparentize('0.7', '#2dad51')};
      border-color: ${transparentize('0.5', '#2dad51')};
      border-left-color: #2dad51;
    }
    &-info {
      background-color: ${transparentize('0.7', '#1d59db')};
      border-color: ${transparentize('0.5', '#1d59db')};
      border-left-color: #1d59db;
    }
    &-warning {
      background-color: ${transparentize('0.7', '#fac500')};
      border-color: ${transparentize('0.5', '#fac500')};
      border-left-color: #fac500;
    }
    &-danger {
      background-color: ${transparentize('0.7', '#f01038')};
      border-color: ${transparentize('0.5', '#f01038')};
      border-left-color: #f01038;
    }

    .icon {
      max-width: 30px;
      width: 100%;
      margin-right: 10px;
      background-color: #f01038;
    }

    .close {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }

    .label {
      padding-right: 10px;
      margin-right: auto;

      strong {
        margin-right: 5px;
      }

      &:not(strong) {
        font-size: ${rem(15)};
      }
    }
  }
`;
