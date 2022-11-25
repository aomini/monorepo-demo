import { Story } from '@storybook/react';
import { Alert, IProps, WidthType, VariantType } from './Alert';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Alert',
  component: Alert,
};

export const Basic: Story<IProps> = (args) => (
  <Alert {...args} onClick={action('clicked')} />
);

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

Basic.args = {
  variant: 'success',
  width: 'xl',
  title: 'Global Spinner',
  subTitle: 'Subtitle goes here',
  rounded: true,
  nextLine: false,
};

const sizes: { name: string; size: WidthType }[] = [
  {
    name: 'Width SM',
    size: 'sm',
  },
  {
    name: 'Width MD',
    size: 'md',
  },
  {
    name: 'Width LG',
    size: 'lg',
  },
  {
    name: 'Width XL',
    size: 'xl',
  },
];

export const Success = ({ variant }: { variant: VariantType }) => (
  <>
    <div>
      <Heading title='Rounded' />
      <Alert
        variant={variant}
        title='Success Spinner'
        subTitle='Subtitle goes here'
        rounded={true}
        border={false}
        width='lg'
        onClick={action('clicked')}
      />
      <br />
      <Heading title='Border' />
      <Alert
        variant={variant}
        title='Success Spinner'
        subTitle='Subtitle goes here'
        rounded={false}
        border={true}
        width='lg'
        onClick={action('clicked')}
      />
      <br />

      <Heading title='Subtitle in New Line' />
      <Alert
        variant={variant}
        title='Success Spinner'
        subTitle='Subtitle goes here'
        rounded={false}
        border={true}
        width='lg'
        nextLine={true}
        onClick={action('clicked')}
      />
      <br />

      {sizes.map(({ name, size }) => {
        return (
          <>
            <br />
            <Heading title={name} />
            <Alert
              variant={variant}
              title='Success Spinner'
              subTitle='Subtitle goes here'
              rounded={false}
              border={false}
              width={size}
              onClick={action('clicked')}
            />
          </>
        );
      })}
    </div>
  </>
);

export const Info = ({ variant }: { variant: any }) => (
  <>
    <div>
      <Heading title='Rounded' />
      <Alert
        variant={variant}
        title='Success Spinner'
        subTitle='Subtitle goes here'
        rounded={true}
        border={false}
        width='lg'
        onClick={action('clicked')}
      />
      <br />
      <Heading title='Border' />
      <Alert
        variant={variant}
        title='Success Spinner'
        subTitle='Subtitle goes here'
        rounded={false}
        border={true}
        width='lg'
        onClick={action('clicked')}
      />
      <br />
      <Heading title='Subtitle in New Line' />
      <Alert
        variant={variant}
        title='Success Spinner'
        subTitle='Subtitle goes here'
        rounded={false}
        border={true}
        width='lg'
        nextLine={true}
        onClick={action('clicked')}
      />
      <br />

      {sizes.map(({ name, size }) => {
        return (
          <>
            <br />
            <Heading title={name} />
            <Alert
              variant={variant}
              title='Success Spinner'
              subTitle='Subtitle goes here'
              rounded={false}
              border={false}
              width={size}
              onClick={action('clicked')}
            />
          </>
        );
      })}
    </div>
  </>
);

export const Warning = ({ variant }: { variant: any }) => (
  <>
    <div>
      <Heading title='Rounded' />
      <Alert
        variant={variant}
        title='Success Spinner'
        subTitle='Subtitle goes here'
        rounded={true}
        border={false}
        width='lg'
        onClick={action('clicked')}
      />
      <br />
      <Heading title='Border' />
      <Alert
        variant={variant}
        title='Success Spinner'
        subTitle='Subtitle goes here'
        rounded={false}
        border={true}
        width='lg'
        onClick={action('clicked')}
      />
      <br />
      <Heading title='Subtitle in New Line' />
      <Alert
        variant={variant}
        title='Success Spinner'
        subTitle='Subtitle goes here'
        rounded={false}
        border={true}
        width='lg'
        nextLine={true}
        onClick={action('clicked')}
      />
      <br />

      {sizes.map(({ name, size }) => {
        return (
          <>
            <br />
            <Heading title={name} />
            <Alert
              variant={variant}
              title='Success Spinner'
              subTitle='Subtitle goes here'
              rounded={false}
              border={false}
              width={size}
              onClick={action('clicked')}
            />
          </>
        );
      })}
    </div>
  </>
);
export const Danger = ({ variant }: { variant: any }) => (
  <>
    <div>
      <Heading title='Rounded' />
      <Alert
        variant={variant}
        title='Success Spinner'
        subTitle='Subtitle goes here'
        rounded={true}
        border={false}
        width='lg'
        onClick={action('clicked')}
      />
      <br />
      <Heading title='Border' />
      <Alert
        variant={variant}
        title='Success Spinner'
        subTitle='Subtitle goes here'
        rounded={false}
        border={true}
        width='lg'
        onClick={action('clicked')}
      />
      <br />
      <Heading title='Subtitle in New Line' />
      <Alert
        variant={variant}
        title='Success Spinner'
        subTitle='Subtitle goes here'
        rounded={false}
        border={true}
        width='lg'
        nextLine={true}
        onClick={action('clicked')}
      />
      <br />

      {sizes.map(({ name, size }) => {
        return (
          <>
            <br />
            <Heading title={name} />
            <Alert
              variant={variant}
              title='Success Spinner'
              subTitle='Subtitle goes here'
              rounded={false}
              border={false}
              width={size}
              onClick={action('clicked')}
            />
          </>
        );
      })}
    </div>
  </>
);

Success.args = {
  variant: 'success',
};
Info.args = {
  variant: 'info',
};
Warning.args = {
  variant: 'warning',
};
Danger.args = {
  variant: 'danger',
};
