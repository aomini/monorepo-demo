import React from 'react';
import { Input } from '../../utility/Input/Input';
import { StyledSection } from './style';
import { Button } from '../../utility/Button/Button';
import AuthLayout from '../AuthLayout';

const ForgetPassword = () => {
  return (
    <StyledSection>
      <AuthLayout>
        <div className='form-container'>
          <form action=''>
            <Input
              name='store_url'
              appearance='flushed'
              label='Store Url'
              placeholder='sailracing.com'
              variant='url'
            />
            <Input
              name='email'
              appearance='flushed'
              label='Email'
              placeholder='Your Email'
              variant='email'
            />

            <div className='button-wrapper text-center'>
              <Button
                onClick={() => {}}
                rounded
                size='xl'
                skin='success'
                variant='contained'
              >
                Send Reset email
              </Button>
            </div>
          </form>
        </div>
        <div className='link-button-wrapper text-center'>
          <Button skin='dark' variant='link' onClick={() => {}}>
            Already have an account? Login
          </Button>
        </div>
      </AuthLayout>
    </StyledSection>
  );
};

export default ForgetPassword;
