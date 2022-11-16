import React from 'react';
import { StyledSection } from './style';
import { Input } from '@/components/utility/Input/Input';
import AuthLayout from '../AuthLayout';
import { Button } from '@/components/utility/Button/Button';

const ResetPassword = () => {
  return (
    <StyledSection>
      <AuthLayout>
        <div className='form-container'>
          <form action=''>
            <Input
              name='password'
              appearance='flushed'
              label='New Password'
              placeholder='password'
              variant='password'
            />
            <Input
              name='confirm_password'
              appearance='flushed'
              label='Confirm Password'
              placeholder='Confirm password'
              variant='password'
            />

            <div className='button-wrapper text-center'>
              <Button
                onClick={() => {}}
                rounded
                size='xl'
                skin='success'
                variant='contained'
              >
                Reset password
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

export default ResetPassword;
