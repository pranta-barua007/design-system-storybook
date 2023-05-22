import Button from '@acme/core/src/Button';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { JSX } from 'react/jsx-runtime';

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Prantab/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof Button> = (args: JSX.IntrinsicAttributes) => (
  <Button color={'primary'} {...args}>
    Primary
  </Button>
);

export const InAccessible = Template.bind({});
InAccessible.args = {
  color: 'primary',
};

export const Accessible = Template.bind({});
Accessible.args = {
  color: 'primary',
  'aria-label': 'Star Icon Button',
};
