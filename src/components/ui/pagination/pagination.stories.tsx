import { FC } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Pagination, Props } from '@/components/ui/pagination/pagination.tsx'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      exclude: /(?:\b|')(currentPage|pageSize|onPageChange)(?:\b|')/g,
    },
  },
} satisfies Meta<typeof Pagination>

const ControlledPagination: FC<Props> = ({ pageSize, currentPage, ...args }) => {
  return <Pagination pageSize={10} currentPage={1} {...args} />
}

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    currentPage: 1,
    pageSize: 10,
    setCurrentPage: () => console.log('call'),
    lastPage: 100,
  },
  render: args => <ControlledPagination {...args} />,
}
