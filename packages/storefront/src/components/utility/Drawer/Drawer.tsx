import React, { useEffect, useRef } from 'react';
import Portal from '../../../../hooks/usePortal';
import clsx from 'clsx';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { useMountTransition } from '@/hooks/useMountTransition';
import { transitions } from '@/theme/theme';

type Listener = (this: HTMLElement, ev: KeyboardEvent) => any;

const useOnEscapeClick = (callback: () => void) => {
  useEffect(() => {
    const closeOnEscapeKey: Listener = (e) =>
      e.key === 'Escape' ? callback() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [callback]);
};

export type PositionType = 'left' | 'right';

type ConditionalPropsWidth =
  | {
      fullWidth?: boolean;
      width?: never;
    }
  | {
      width?: number;
      fullWidth?: never;
    };

type Props = {
  wrapperId?: string;
  isOpen: boolean;
  position: PositionType;
  handleClose: () => void;
  showClose?: boolean;

  fullWidth?: boolean;
  cName?: string;
  removeWhenClosed?: boolean;
  hasOverlay?: boolean;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
};

export type DrawerProps = Props & ConditionalPropsWidth;

export const Drawer = ({
  wrapperId,
  isOpen,
  children,
  handleClose,
  showClose = false,
  position = 'right',
  hasOverlay = false,
  removeWhenClosed = true,
  width = 300,
  fullWidth = false,
  styles,
  cName,
}: DrawerProps) => {
  useOnEscapeClick(handleClose);
  const ref = useRef(null);
  const isTransitioning = useMountTransition({
    isMounted: isOpen,
    unmountDelay: 300,
  });

  if (!isTransitioning && removeWhenClosed && !isOpen) {
    return null;
  }

  return (
    <Portal wrapperId={wrapperId}>
      <StyleDiv
        aria-hidden={isOpen ? 'false' : 'true'}
        className={clsx('drawer-provider', cName, {
          open: isOpen,
          in: isTransitioning,
        })}
      >
        <div
          className={clsx('drawer', position)}
          role='dialog'
          style={
            styles
              ? styles
              : { maxWidth: !fullWidth ? `${width}px` : 'calc(100% - 50px)' }
          }
        >
          {showClose && (
            <div className='close' onClick={handleClose}>
              X
            </div>
          )}

          <div className='drawer-content'>{children}</div>
        </div>
        {hasOverlay ? <div className='backdrop' onClick={handleClose} /> : null}
      </StyleDiv>
    </Portal>
  );
};
export default Drawer;

const StyleDiv = styled.div`
  ${({ theme }) => css`
    &.drawer-provider {
      //--transition-speed: 0.3s;
      transition: ${transitions.transition};
      &.open {
        transition: 0.3s;
        &.in {
          transition: 0.3s;
          .left,
          .right {
            transform: translateX(0);
          }

          .drawer {
            &.left {
              .close {
                transform: translateX(50px);
                box-shadow: 5px 0 5px -2px rgba(0, 0, 0, 0.5);
              }
            }

            &.right {
              .close {
                transform: translateX(-50px);
                box-shadow: -5px 0 -5px 2px rgba(0, 0, 0, 0.5);
              }
            }
          }

          .backdrop {
            visibility: visible;
            opacity: 1;
            pointer-events: auto;
            z-index: 1;
          }
        }
      }

      .backdrop {
        visibility: hidden;
        opacity: 0;
        background: rgba(0, 0, 0, 0.5);
        transition: opacity ${transitions.transition} ease,
          visibility ${transitions.transition} ease;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: fixed;
        pointer-events: none;
        z-index: 0;
      }

      .drawer {
        background: #fff;
        height: 100%;
        width: 100%;
        position: fixed;
        transition: transform ${transitions.transition} ease;
        z-index: 2;

        .drawer-content {
          box-shadow: 0 3px 6px ${transparentize(0.84, theme.color.blackDark)};
          height: 100%;
        }

        .close {
          position: absolute;
          top: 0;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ccc;
          color: #fff;
          cursor: pointer;
          transform: translateX(0px);
          transition: transform ${transitions.transition} ease;
        }

        &.right {
          top: 0;
          right: 0;
          transform: translateX(100%);

          .close {
            left: 0;
          }
        }

        &.left {
          top: 0;
          left: 0;
          transform: translateX(-105%);

          .close {
            right: 0;
          }
        }
      }
    }
  `}
`;
