import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './index.ts'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: { inputType: 'text' },
}

export const Disabled: Story = {
  args: { disabled: true, label: 'test', inputType: 'text' },
}
