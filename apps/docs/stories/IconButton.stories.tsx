import IconButton from '@acme/core/src/IconButton';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { JSX } from 'react/jsx-runtime';

const meta: Meta<typeof IconButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Prantab/Icon Button',
  component: IconButton,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof IconButton> = (args: JSX.IntrinsicAttributes) => (
  <IconButton color={'primary'} {...args}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      style={{ width: '18px', height: '18px' }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
      />
    </svg>
  </IconButton>
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
