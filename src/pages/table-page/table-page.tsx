import { FC, useState } from 'react'

// import { clsx } from 'clsx'

import { Page } from '@/components/ui/page'
import { Pagination } from '@/components/ui/pagination'
import { Sort, Table } from '@/components/ui/table'
import { columns } from '@/components/ui/table/colum.ts'

export const TablePage: FC = () => {
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('7')
  const [sort, setSort] = useState<Sort>(null)

  // console.log('data', data)
  // console.log('error', error)
  // console.log('isLoading', isLoading)

  // const cNames = {
  //   container: clsx(s.container),
  // }
  const tableRows = [].slice(0, +pageSize).map((row, i) => (
    <Table.Row key={i}>
      <Table.DataCell>{row}</Table.DataCell>
      {/*<Table.DataCell>{row.cardsCount}</Table.DataCell>*/}
      {/*<Table.DataCell>{row.updated}</Table.DataCell>*/}
      {/*<Table.DataCell>{row.createdBy}</Table.DataCell>*/}
    </Table.Row>
  ))

  return (
    <Page>
      <>
        <div>
          <Table.Root>
            <Table.Head sort={sort} onSort={setSort} columns={columns}></Table.Head>
            <Table.Body>{tableRows}</Table.Body>
          </Table.Root>

          <Pagination
            currentPage={page}
            totalCount={400}
            pageSize={+pageSize}
            siblingCount={3}
            onPageChange={setPage}
            onPageSizeChange={setPageSize}
          />
        </div>
      </>
      )
    </Page>
  )
}
