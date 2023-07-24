import { FC, useState } from 'react'

import s from './table-page.module.scss'

// import { clsx } from 'clsx'

import { Page } from '@/components/ui/page'
import { Pagination } from '@/components/ui/pagination'
import { Sort, Table } from '@/components/ui/table'
import { columns } from '@/components/ui/table/colum.ts'
import { usePosts } from '@/services/posts/hooks/usePosts.ts'

export const TablePage: FC = () => {
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('10')
  const [sort, setSort] = useState<Sort>(null)
  const { postData } = usePosts()

  console.log(postData)
  // console.log('data', data)
  // console.log('error', error)
  // console.log('isLoading', isLoading)

  // const cNames = {
  //   container: clsx(s.container),
  // }
  const tableRows = postData.slice(0, +pageSize).map(row => (
    <Table.Row key={row.userId}>
      <Table.DataCell>{row.id}</Table.DataCell>
      <Table.DataCell>{row.title}</Table.DataCell>
      <Table.DataCell>{row.body}</Table.DataCell>
      {/*<Table.DataCell>{row.createdBy}</Table.DataCell>*/}
    </Table.Row>
  ))

  return (
    <Page>
      <div className={s.container}>
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
    </Page>
  )
}
