import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { columns } from '@/components/ui/table/colum.ts'
import { Sort, Table } from '@/components/ui/table/table.tsx'
import { data } from '@/components/ui/table/test_data.ts'

const meta = {
  title: 'Components/Table',
  component: Table.Root,
  decorators: [
    Story => (
      <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Table.Root>

const Container = () => {
  const [sort, setSort] = useState<Sort>(null)

  return (
    <>
      <Table.Head columns={columns} sort={sort} onSort={setSort} />

      <Table.Body>
        {data.map(row => {
          return (
            <Table.Row key={row.id}>
              <Table.DataCell>{row.id}</Table.DataCell>
              <Table.DataCell>{row.title}</Table.DataCell>
              <Table.DataCell>{row.description}</Table.DataCell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </>
  )
}

export default meta
type Story = StoryObj<typeof meta>
export const DefaultWithSort: Story = {
  args: {
    children: <Container />,
  },
  parameters: {
    controls: {
      exclude: /(?:\b|')(children)(?:\b|')/g,
    },
  },
}

export const Head_Cell: Story = {
  args: {
    children: <Table.HeadCell key={'name'} title={'Name'} style={{ color: 'fff' }} />,
  },
}

export const Data_Cell: Story = {
  args: {
    children: <Table.DataCell>{'Name'}</Table.DataCell>,
  },
}
