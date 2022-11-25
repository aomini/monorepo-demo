import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Input, VariantType, InputProps } from './Input';
import exp from 'constants';

export default {
  title: 'Input',
  component: Input,
};

export const Playground: Story<InputProps> = (args) => (
  <Input {...args} onClick={action('clicked')} />
);

Playground.args = {
  variant: 'text',
  appearance: 'filled',
  placeholder: 'Input placeholder',
  label: 'Input label',
  feedback: {
    level: 2,
    message: 'test error',
  },
};

const Heading = ({ title }: { title: string }) => (
  <h2 style={{ textTransform: 'capitalize' }}>{title}</h2>
);

const Temp = ({ variant }: { variant: VariantType }) => (
  <div>
    <Heading title={variant} />
    <Input
      name={variant}
      label='Disabled Input with label'
      placeholder='Disabled Input with label'
      appearance='filled'
      variant={variant}
      disabled={true}
    />
    <br />
    <Input
      name={variant}
      label='Filled Input Field'
      placeholder='Filled Input Field'
      appearance='filled'
      variant={variant}
    />
    <br />
    <Input
      name={variant}
      label='Outline Input Field'
      placeholder='Outline Input Field'
      appearance='outline'
      variant={variant}
    />
    <br />
    <Input
      name={variant}
      label='Flushed Input Field'
      placeholder='Flushed Input Field'
      appearance='flushed'
      variant={variant}
    />
    <br />
    <Input
      name={variant}
      label='Input with label'
      placeholder='Input with label'
      appearance='filled'
      variant={variant}
    />
    <br />
    <Input
      name={variant}
      placeholder='Input without label'
      appearance='filled'
      variant={variant}
    />
    <br />
    <Input
      name={variant}
      placeholder='Input with round corner'
      appearance='filled'
      variant={variant}
      rounded={true}
    />
    <br />
    <Input
      name={variant}
      placeholder='Input with error'
      error={true}
      feedback={{
        message: 'error message',
        level: 2,
      }}
      appearance='filled'
      variant={variant}
    />
    <br />
    <Input
      name={variant}
      placeholder='Input with warning'
      error={true}
      feedback={{
        message: 'warning message',
        level: 1,
      }}
      appearance='filled'
      variant={variant}
    />
    <br />
  </div>
);

export const Email: Story<InputProps> = Temp.bind({});
export const Number: Story<InputProps> = Temp.bind({});
export const Text: Story<InputProps> = Temp.bind({});
export const Password: Story<InputProps> = Temp.bind({});
export const Tel: Story<InputProps> = Temp.bind({});
export const Url: Story<InputProps> = Temp.bind({});
export const Search: Story<InputProps> = Temp.bind({});

Email.args = { variant: 'email' };
Number.args = { variant: 'number' };
Text.args = { variant: 'email' };
Password.args = { variant: 'password' };
Tel.args = { variant: 'tel' };
Url.args = { variant: 'url' };
Search.args = { variant: 'search' };
