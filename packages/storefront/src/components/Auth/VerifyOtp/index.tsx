import React from 'react';
import OtpInput from 'react-otp-input';
import { StyledSection } from './style';
import AuthLayout from '../AuthLayout';
import { Button } from '@/components/utility/Button/Button';

const VerifyOtp = () => {
  const [code, setCode] = React.useState('');

  const handleChange = (code: string) => setCode(code);

  return (
    <StyledSection>
      <AuthLayout>
        <div className='form-container'>
          <div className='title'>
            <h6>Enter your OPT code</h6>
          </div>
          <form action=''>
            <div className='otp-input'>
              <OtpInput
                className='otp-code'
                value={code}
                onChange={handleChange}
                numInputs={6}
                isInputNum={true}
                shouldAutoFocus={true}
              />
            </div>

            <div className='button-wrapper text-center'>
              <Button
                onClick={() => {}}
                rounded
                size='xl'
                skin='success'
                variant='contained'
              >
                Submit
              </Button>

              <Button
                onClick={() => {}}
                rounded
                size='xl'
                skin='dark'
                variant='outline'
              >
                Send new code
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

export default VerifyOtp;
