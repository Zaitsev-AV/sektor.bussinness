import { FC, useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import s from './post-page.module.scss'

import { TextField } from '@/components'
import { Box } from '@/components/ui/Box/Box.tsx'
import { Page } from '@/components/ui/page'
import { Pagination } from '@/components/ui/pagination'
import { Table } from '@/components/ui/table'
import { columns } from '@/components/ui/table/colum.ts'
import { usePosts } from '@/services/posts/hooks/usePosts.ts'

export const PostsPage: FC = () => {
  const { page } = useParams()
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState<number>(Number(page) || 1)
  const { setSortData, sortData, data, onSearch, searchQuery } = usePosts()

  useEffect(() => {
    setCurrentPage(Number(page) || 1)
  }, [page])

  const noData = 0
  const pageSize = 10
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const lastPage = data.length / pageSize

  const tableRows = data.slice(startIndex, endIndex).map(row => (
    <Table.Row key={row.id}>
      <Table.DataCell>{row.id}</Table.DataCell>
      <Table.DataCell>{row.title}</Table.DataCell>
      <Table.DataCell>{row.body}</Table.DataCell>
    </Table.Row>
  ))
  const emptyData = (
    <Table.Row>
      <Table.DataCell></Table.DataCell>
      <Table.DataCell>По вашему запросу ничего не найдено 😦</Table.DataCell>
      <Table.DataCell></Table.DataCell>
    </Table.Row>
  )

  return (
    <Page>
      <Box className={s.container}>
        <TextField
          value={searchQuery}
          onChange={e => onSearch(e.currentTarget.value)}
          inputType={'search'}
          className={s.field}
        />
        <Box className={s.tableContainer}>
          <Table.Root className={s.table}>
            <Table.Head
              sort={sortData}
              onSort={sort => setSortData(sort)}
              columns={columns}
            ></Table.Head>
            <Table.Body>{data.length !== noData ? tableRows : emptyData}</Table.Body>
          </Table.Root>
        </Box>
        <Box className={s.pagination}>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={newPage => {
              setCurrentPage(newPage)
              navigate(`/posts/${newPage}`)
            }}
            pageSize={pageSize}
            lastPage={lastPage}
          />
        </Box>
      </Box>
    </Page>
  )
}
