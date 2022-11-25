import React from 'react';
import { AuthLayoutDiv } from './style';
import { useTheme } from 'styled-components';
import { Image } from '@/components/Image';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  return (
    <AuthLayoutDiv className='auth-layout'>
      <div className='shape'>
        <Image src={theme.shape.shape1} width={320} layout='fill' />
      </div>
      <div className='shape shape-circle'>
        <Image src={theme.shape.shape2} width={400} layout='fill' />
      </div>

      <div className='form-wrapper'>
        <div className='logo-wrapper'>
          <Image src={theme.logo} width={280} layout='fill' />
        </div>
        {children}
      </div>
    </AuthLayoutDiv>
  );
};

export default AuthLayout;
