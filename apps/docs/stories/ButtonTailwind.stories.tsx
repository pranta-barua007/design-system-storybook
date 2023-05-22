import TailwindButton from '@acme/core/src/ButtonTailwind';
import type { Meta, StoryObj } from '@storybook/react';
import '@acme/core/dist/output.css';

const meta: Meta<typeof TailwindButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Prantab/Tailwind Button',
  component: TailwindButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TailwindButton>;

export const Default: Story = {
  args: {
    children: 'Default'
  },
};
