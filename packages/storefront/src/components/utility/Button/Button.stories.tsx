import { Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['contained', 'outline', 'ghost', 'link'],
      defaultValue: 'contained',
      control: { type: 'select' },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'xs',
      control: { type: 'select' },
    },
    skin: {
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ],
      defaultValue: 'primary',
      control: { type: 'select' },
    },
    rounded: {
      defaultValue: [true, false],
      control: { type: 'boolean' },
    },
    isLoading: {
      defaultValue: [true, false],
      control: { type: 'boolean' },
    },
  },
};

const Template: Story<ButtonProps> = (args) => (
  <Button {...args} onClick={action('clicked')} />
);

export const Playground = Template.bind({});

Playground.args = {
  variant: 'contained',
  rounded: true,
  children: 'button',
};
