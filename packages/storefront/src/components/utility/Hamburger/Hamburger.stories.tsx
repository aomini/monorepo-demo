import { Story } from '@storybook/react';
import { Hamburger, HamburgerProps } from './Hamburger';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Hamburger Menu',
  component: Hamburger,
};

export const Basic: Story<HamburgerProps> = (args) => (
  <Hamburger {...args} onClick={action('clicked')} />
);

Basic.args = {
  open: false,
};
