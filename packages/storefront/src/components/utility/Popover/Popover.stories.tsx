import { Story } from '@storybook/react';
import { Popover, IProps, PositionType } from './Popover';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Popover',
  component: Popover,
};

export const Playground: Story<IProps> = (args) => (
  <Popover {...args} onClick={action('clicked')} />
);

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

Playground.args = {
  position: 'left',
  children: (
    <ul>
      <li>option 1</li>
      <li>option 2</li>
      <li>option 3</li>
      <li>option 4</li>
    </ul>
  ),
};

export const LeftPopover = ({ position }: { position: PositionType }) => (
  <>
    <div>
      <Heading title={`Popover ${position}`} />
      <Popover position={position}>
        <ul>
          <li>option 1</li>
          <li>option 2</li>
          <li>option 3</li>
          <li>option 4</li>
        </ul>
      </Popover>
      <br />
    </div>
  </>
);

export const RightPopover = ({ position }: { position: PositionType }) => (
  <>
    <div>
      <Heading title={`Popover ${position}`} />
      <Popover position={position}>
        <ul>
          <li>option 1</li>
          <li>option 2</li>
          <li>option 3</li>
          <li>option 4</li>
        </ul>
      </Popover>
      <br />
    </div>
  </>
);

LeftPopover.args = {
  position: 'left',
};

RightPopover.args = {
  position: 'right',
};
