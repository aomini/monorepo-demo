import { Story } from '@storybook/react';
import { Spinner, SpinnerProps } from './Spinner';
import { Button, ButtonProps } from '../Button/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Spinner',
  component: Spinner,
};

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  width: 20,
  skin: 'primary',
  strokeWidth: 5,
};
