import { Story } from '@storybook/react';
import { Drawer, PositionType, DrawerProps } from './Drawer';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Drawer',
  component: Drawer,
};

const Template: Story<DrawerProps> = (args) => <Drawer {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  isOpen: true,
  position: 'right',
  hasOverlay: true,
  width: 300,
};
