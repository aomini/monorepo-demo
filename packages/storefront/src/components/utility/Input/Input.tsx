import React from 'react';
import clsx from 'clsx';
import { rem, transparentize } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';
import { SkinType } from '../../../types/button.types';
import {
  border,
  themeColor,
  fieldHeight,
  transitions,
} from '../../../theme/theme';
export type AppearanceType = 'filled' | 'outline' | 'flushed' | 'unstyled';
export type feedbackType = {
  message: string;
  level: 0 | 1 | 2 | 'warn' | 'error';
};

export type VariantType =
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'tel'
  | 'url'
  | 'search';

type Props = {
  /**
   * Input Variant name
   */
  name: string;
  /**
   * Input Variant appearance
   */
  appearance: AppearanceType;
  /**
   * Input Variant options
   */
  variant: VariantType;

  /**
   * Input Variant disabled
   */
  disabled?: boolean;
  /**
   * Input Variant id
   */
  id?: string;
  /**
   * Input Variant placeholder
   */
  placeholder?: string;
  /**
   * Input Variant label
   */
  label?: string;
  /**
   * Input Variant label show/hide
   */
  showLabel?: boolean;
  /**
   * Input Variant border radius
   */
  rounded?: boolean;
  /**
   * Input Variant Error
   */
  error?: boolean;
  touched?: boolean;
  showFeedback?: boolean;
  feedback?: feedbackType;
};

const getDefaultAttributes = (variant: VariantType) => {
  switch (variant) {
    case 'number':
      return {
        min: 0,
      };
  }
};

const getAppearanceType = (appearance: AppearanceType) => {
  switch (appearance) {
    case 'filled':
      return 'filled';
    case 'outline':
      return 'outline';
    case 'flushed':
      return 'flushed';
    default:
      return 'filled';
  }
};

const Feedback = ({ message, level }: feedbackType) => (
  <FeedbackDiv level={level}>
    <p className='error'>{message}</p>
  </FeedbackDiv>
);

export type InputProps = Props & JSX.IntrinsicElements['input'];

export const Input = ({
  id,
  name,
  label,
  showLabel = true,
  variant,
  placeholder,
  disabled = false,
  appearance = 'filled',
  rounded = false,
  error = false,
  showFeedback = true,
  touched,
  ...props
}: InputProps) => {
  return (
    <InputField
      appearance={appearance}
      variant={variant}
      name={name}
      label={label}
      disabled={disabled}
      rounded={rounded}
      level={props.feedback?.level || 0}
      error={error}
      className={clsx(
        'input-field',
        { disabled },
        getAppearanceType(appearance)
      )}
    >
      {showLabel ? label ? <label htmlFor={id}>{label}</label> : null : null}
      <div className='inputWrap'>
        <input
          name={name}
          type={variant}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          className={clsx({ rounded })}
          {...getDefaultAttributes(variant)}
          {...props}
        />
        {/*{error &&*/}
        {/*(props.feedback?.level === 1 || props.feedback?.level === 'warn') ? (*/}
        {/*  <span className='icon warning-icon'>*/}
        {/*    <img src='warning.svg' alt='' />*/}
        {/*  </span>*/}
        {/*) : null}*/}
        {/*{error &&*/}
        {/*(props.feedback?.level === 2 || props.feedback?.level === 'error') ? (*/}
        {/*  <span className='icon error-icon'>*/}
        {/*    <img src='warning.svg' alt='' />*/}
        {/*  </span>*/}
        {/*) : null}*/}
      </div>
      {showFeedback && error ? (
        <Feedback
          message={props.feedback?.message || ''}
          level={props.feedback?.level || 0}
        />
      ) : null}
    </InputField>
  );
};

const FillInputStyle = (
  theme: DefaultTheme,
  skin: SkinType,
  error: boolean
) => {
  return css`
    .inputWrap {
      input {
        background-color: ${themeColor.white['500']};
        padding: 0 ${rem(15)};

        ${error
          ? css`
              border-color: ${themeColor.red['200']};
            `
          : css`
              border-color: ${themeColor.white['500']};
            `}

        &:focus,
        &:focus-visible {
          ${error
            ? css`
                border-color: ${themeColor.red['200']};
                box-shadow: ${themeColor.red['200']} 0 0 0 2px;
              `
            : css`
                border-color: ${theme.color[skin].disable};
                box-shadow: ${theme.color[skin].disable} 0 0 0 2px;
              `}
        }
      }
    }
  `;
};

const OutlineInputStyle = (
  theme: DefaultTheme,
  skin: SkinType,
  error: boolean
) => {
  return css`
    .inputWrap {
      input {
        background-color: transparent;
        padding: 0 ${rem(15)};

        ${error
          ? css`
              border-color: ${themeColor.red['200']};
            `
          : css`
              border-color: ${themeColor.white['500']};
            `}

        &:focus,
        &:focus-visible {
          ${error
            ? css`
                border-color: ${themeColor.red['200']};
                box-shadow: ${themeColor.red['200']} 0 0 0 2px;
              `
            : css`
                border-color: ${theme.color[skin].disable};
                box-shadow: ${theme.color[skin].disable} 0 0 0 2px;
              `}
        }
      }
    }
  `;
};

const FlushedInputStyle = (
  theme: DefaultTheme,
  skin: SkinType,
  error: boolean
) => {
  return css`
    .inputWrap {
      input {
        background-color: transparent;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        padding: 0;

        ${error
          ? css`
              border-color: ${themeColor.red['200']};
            `
          : css`
              border-color: ${themeColor.white['500']};
            `}

        &:focus,
        &:focus-visible {
          ${error
            ? css`
                border-color: ${themeColor.red['200']};
                box-shadow: ${themeColor.red['200']} 0 2px 0 0;
              `
            : css`
                border-color: ${theme.color[skin].disable};
                box-shadow: ${theme.color[skin].disable} 0 2px 0 0;
              `}
        }
      }
    }
  `;
};

const UnstyledInputStyle = (
  theme: DefaultTheme,
  skin: SkinType,
  error: boolean
) => {
  return css`
    .inputWrap {
      input {
        background-color: transparent;
        border: none;
        padding: 0;

        ${error
          ? css`
              border-color: ${themeColor.red['200']};
            `
          : css`
              border-color: ${themeColor.white['500']};
            `}
      }
    }
  `;
};

const InputField = styled.div<
  Props & { error: boolean; level: string | number }
>`
  ${({ theme, error, level, appearance, label, disabled, rounded }) => css`
    ${disabled &&
    css`
      pointer-events: none;
      opacity: 0.4;
    `}

    ${label &&
    css`
      label {
        display: block;
        font-size: ${rem(12)};
        color: ${theme.color.text};
        margin-bottom: ${rem(12)};
      }
    `}
    
    .inputWrap {
      input {
        width: 100%;
        min-width: 0;
        outline: transparent solid ${`${border.outline}px`};
        position: relative;
        appearance: none;
        font-size: ${rem(theme.fonts.font.body.size)};
        line-height: ${rem(theme.fonts.font.body.lineHeight)};
        height: ${`${fieldHeight.height}px`};
        border-style: solid;
        border-width: ${`${border.width}px`};
        transition: ${transitions.transition_1} all;
        color: ${theme.color.text};
        ${rounded
          ? css`
              border-radius: ${rem(border.radius)};
            `
          : css`
              border-radius: 0;
            `}
      }
    }

    ${appearance === 'filled' &&
    css`
      ${FillInputStyle(theme, 'primary', error ? error : false)}
    `}
    ${appearance === 'outline' &&
    css`
      ${OutlineInputStyle(theme, 'primary', error ? error : false)}
    `}
    ${appearance === 'flushed' &&
    css`
      ${FlushedInputStyle(theme, 'primary', error ? error : false)}
    `}
    ${appearance === 'unstyled' &&
    css`
      ${UnstyledInputStyle(theme, 'primary', error ? error : false)}
    `}
  `}
`;

const FeedbackDiv = styled.div<{ level: string | number }>`
  p {
    font-size: ${rem(12)};
    margin-top: ${rem(3)};
    margin-bottom: 0;

    ${(props) => css`
      ${(props.level === 2 || props.level === 'error') &&
      css`
        color: ${themeColor.red['200']};
      `}
    `}
  }
`;
