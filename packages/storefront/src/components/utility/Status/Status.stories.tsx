import { Story } from '@storybook/react';
import { Status, BadgeProps } from './Status';
import { SkinType } from '../../../types/button.types';
import React from 'react';

export default {
  title: 'Status',
  component: Status,
  argTypes: {
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
  },
};

const Template: Story<BadgeProps> = (args) => <Status {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  skin: 'primary',
};

// const Temp = ({
//   variant,
//   skin,
//   children,
//   ...props
// }: {
//   variant: VariantType;
//   skin: SkinType;
//   children: React.ReactNode;
// }) => (
//   <div>
//     <Heading title={variant} />
//     <Status variant={variant} skin={skin} {...props}>
//       {children}
//     </Status>
//   </div>
// );
//
// export const Primary: Story<BadgeProps> = Temp.bind({});
// export const Secondary: Story<BadgeProps> = Temp.bind({});
// export const Success: Story<BadgeProps> = Temp.bind({});
// export const Danger: Story<BadgeProps> = Temp.bind({});
// export const Warning: Story<BadgeProps> = Temp.bind({});
// export const Info: Story<BadgeProps> = Temp.bind({});
// export const Light: Story<BadgeProps> = Temp.bind({});
// export const Dark: Story<BadgeProps> = Temp.bind({});
//
// Primary.args = { variant: 'contextual', skin: 'primary', children: 'Primary' };
// Secondary.args = {
//   variant: 'contextual',
//   skin: 'secondary',
//   children: 'Secondary',
// };
// Success.args = { variant: 'contextual', skin: 'success', children: 'Success' };
// Danger.args = { variant: 'contextual', skin: 'danger', children: 'Danger' };
// Warning.args = { variant: 'contextual', skin: 'warning', children: 'Warning' };
// Info.args = { variant: 'contextual', skin: 'info', children: 'Info' };
// Light.args = { variant: 'contextual', skin: 'light', children: 'Light' };
// Dark.args = { variant: 'contextual', skin: 'dark', children: 'Dark' };
