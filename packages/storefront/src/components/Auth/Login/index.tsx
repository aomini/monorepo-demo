import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Input } from '../../utility/Input/Input';
import { Button } from '../../utility/Button/Button';
import AuthLayout from '../AuthLayout';
import { StyledSection } from './style';

const Login = () => {
  const schema = Yup.object().shape({
    store_url: Yup.string().required('Store Url is required'),
    email: Yup.string()
      .email('Is not a valid email')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      store_url: '',
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <StyledSection>
      <AuthLayout>
        <div className='form-container'>
          <form action='' onSubmit={formik.handleSubmit}>
            <Input
              name='store_url'
              appearance='flushed'
              label='Store Url'
              placeholder='sailracing.com'
              variant='url'
              onChange={formik.handleChange}
              value={formik.values.store_url}
              touched={formik.touched.store_url}
              error={'store_url' in formik.errors}
              showFeedback={false}
              feedback={{
                message: formik.errors?.store_url || '',
                level: 'error',
              }}
            />
            <Input
              name='email'
              appearance='flushed'
              label='Email'
              placeholder='Your Email'
              variant='email'
              onChange={formik.handleChange}
              value={formik.values.email}
              touched={formik.touched.email}
              error={'email' in formik.errors}
              feedback={{ message: formik.errors?.email || '', level: 'error' }}
            />
            <Input
              name='password'
              appearance='flushed'
              label='Password'
              placeholder='Enter your password'
              variant='password'
              onChange={formik.handleChange}
              value={formik.values.password}
              touched={formik.touched.password}
              error={'password' in formik.errors}
              feedback={{
                message: formik.errors?.password || '',
                level: 'error',
              }}
            />

            <div className='button-wrapper text-center'>
              <Button
                skin='success'
                type='submit'
                disabled={formik.isSubmitting}
                rounded
                size='xl'
                variant='contained'
                isLoading={formik.isSubmitting}
              >
                Log In
              </Button>
            </div>
          </form>
        </div>
        <div className='link-button-wrapper text-center'>
          <Button skin='dark' variant='link' onClick={() => {}}>
            Forgot password? Reset it here
          </Button>
        </div>
      </AuthLayout>
    </StyledSection>
  );
};

export default Login;
