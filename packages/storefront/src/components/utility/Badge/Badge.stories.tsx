import { Story } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';
import React from 'react';

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['contextual', 'pill', 'link'],
      defaultValue: 'contextual',
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
  },
};

const Heading = ({ title }: { title: string }) => (
  <h2 style={{ textTransform: 'capitalize' }}>{title}</h2>
);
const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  variant: 'contextual',
  skin: 'primary',
  children: 'Badge',
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
