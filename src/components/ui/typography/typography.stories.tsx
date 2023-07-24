import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['subtitle1', 'subtitle2', 'subtitle3', 'toggle', 'title'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Title: Story = {
  args: {
    children: 'Content text',
    variant: 'title',
  },
}

export const Subtitle1: Story = {
  args: {
    children: 'Content text',
    variant: 'subtitle1',
  },
}
export const Toggle: Story = {
  args: {
    children: 'Content text',
    variant: 'toggle',
  },
}

export const Subtitle2: Story = {
  args: {
    children: 'Content text',
    variant: 'subtitle2',
  },
}

export const Body: Story = {
  args: {
    children: 'Content text',
    variant: 'subtitle3',
  },
}
