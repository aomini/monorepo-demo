import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import styled, { css } from 'styled-components';
import useOnClickOutside from '../../../../hooks/useOnClickOutside';

export type PositionType = 'left' | 'right';

export interface IProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Spinner Variant position
   */
  position?: PositionType;

  /**
   * Spinner Variant options
   */
  children: any;
}

export const Popover = ({ position = 'left', children, ...props }: IProps) => {
  const popover = React.useRef(null);
  const [isOpen, toggle] = React.useState(false);

  const close = React.useCallback(() => toggle(false), []);
  useOnClickOutside(popover, close);
  return (
    <PopoverBlock isOpen={isOpen} position={position}>
      <div className={clsx('popover-wrapper', position)}>
        <div className='popover-action' onClick={() => toggle(true)}>
          <div className='popover-action-icon' />
        </div>

        {isOpen && (
          <div className='popover-option' ref={popover}>
            {children}
            {/*<ul>*/}
            {/*  <li>option 1</li>*/}
            {/*  <li>option 2</li>*/}
            {/*  <li>option 3</li>*/}
            {/*  <li>option 4</li>*/}
            {/*</ul>*/}
          </div>
        )}
      </div>
    </PopoverBlock>
  );
};

const popoverWidth = '200px';
const PopoverBlock = styled.div<{ isOpen: boolean; position: string }>`
  ${({ theme, isOpen, position }) => css`
    .popover-wrapper {
      position: relative;
      max-width: ${popoverWidth};

      .popover-action {
        width: 50px;
        height: 40px;
        cursor: pointer;
        background-color: transparent;
        position: relative;
        transition: 0.3s ease all;

        &:hover {
          background-color: #f4f4f4;
        }

        ${position === 'left' &&
        css`
          margin-right: auto;
        `}

        ${position === 'right' &&
        css`
          margin-left: auto;
        `}

        ${isOpen &&
        css`
          background-color: #f4f4f4;
          box-shadow: 0 -1px 4px -1px #d6d6d6;
        `}

      &-icon {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background-color: black;
          box-shadow: 0 6px 0 black, 0 12px 0 black;
          margin: 0 auto;
          position: absolute;
          top: calc(50% - 6px);
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }

      .popover-option {
        visibility: visible;
        --popper-transform-origin: top center;
        position: absolute;
        top: 40px;
        max-width: ${popoverWidth};
        width: ${popoverWidth};
        z-index: 1;
        box-shadow: 0 3px 10px 0 rgb(0 0 23 / 41%);
        border-radius: 8px;
        ${position === 'left' &&
        css`
          left: 0;
        `}
        ${position === 'right' &&
        css`
          right: 0;
        `}
          ul {
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
          border-radius: 8px;

          li {
            padding: 10px;
            background-color: transparent;
            transition: 0.3s ease all;

            &.active,
            &:hover {
              background-color: #e7e7e7;
            }

            &.disabled {
              pointer-events: none;
              opacity: 0.4;
            }

            + li {
              border-top: 1px solid #eaeaea;
            }
          }
        }
      }
    }
  `}
`;
