import { FC, useState } from 'react'

import s from './table-page.module.scss'

import { TextField } from '@/components'
import { Box } from '@/components/ui/Box/Box.tsx'
import { Page } from '@/components/ui/page'
import { Pagination } from '@/components/ui/pagination'
import { Table } from '@/components/ui/table'
import { columns } from '@/components/ui/table/colum.ts'
import { usePosts } from '@/services/posts/hooks/usePosts.ts'

export const TablePage: FC = () => {
  const [page, setPage] = useState<number>(1)
  const { setSortData, sortData, sortingData } = usePosts()

  const pageSize = 10
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const lastPage = sortingData.length / pageSize

  const tableRows = sortingData.slice(startIndex, endIndex).map(row => (
    <Table.Row key={row.id}>
      <Table.DataCell>{row.id}</Table.DataCell>
      <Table.DataCell>{row.title}</Table.DataCell>
      <Table.DataCell>{row.body}</Table.DataCell>
    </Table.Row>
  ))

  return (
    <Page>
      <Box className={s.container}>
        <TextField inputType={'search'} className={s.field} />

        <Table.Root>
          <Table.Head
            sort={sortData}
            onSort={sort => setSortData(sort)}
            columns={columns}
          ></Table.Head>
          <Table.Body>{tableRows}</Table.Body>
        </Table.Root>

        <Box className={s.pagination}>
          <Pagination
            currentPage={page}
            setCurrentPage={setPage}
            pageSize={pageSize}
            lastPage={lastPage}
          />
        </Box>
      </Box>
    </Page>
  )
}
