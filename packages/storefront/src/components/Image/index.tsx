import React from 'react';
import NextImage, { ImageProps } from 'next/image';
import { StyledDiv } from './style';
import clsx from 'clsx';

export const Image: React.FC<ImageProps> = ({ src, className, ...props }) => {
  if (!src) return null;
  return (
    <StyledDiv className={clsx('image', className)}>
      <NextImage src={src} {...props} />
    </StyledDiv>
  );
};
