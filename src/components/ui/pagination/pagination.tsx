import { clsx } from 'clsx'

import s from './pagination.module.scss'

import { Typography } from '@/components'
import { Box } from '@/components/ui/Box/Box.tsx'
import PageLink from '@/components/ui/pagination/page-link.tsx'
import { usePagination } from '@/components/ui/pagination/usePagination.ts'

export type Props = {
  currentPage: number
  lastPage: number
  pageSize: number
  setCurrentPage: (page: number) => void
}

export const Pagination = ({ currentPage, lastPage, pageSize, setCurrentPage }: Props) => {
  const pageNums = usePagination(currentPage, lastPage, pageSize)
  const classNames = {
    pagination: clsx(s.pagination),
    active: clsx(s.active),
  }

  return (
    <Box component={'nav'} className={classNames.pagination} aria-label="Pagination">
      <PageLink disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
        <Typography variant={'toggle'}>Назад</Typography>
      </PageLink>
      <Box>
        {pageNums.map((pageNum, idx) => (
          <PageLink
            key={idx}
            disabled={isNaN(pageNum)}
            onClick={() => setCurrentPage(pageNum)}
            datatype={currentPage === pageNum ? 'active' : undefined}
          >
            <Typography variant={'subtitle2'}>{!isNaN(pageNum) ? pageNum : '...'}</Typography>
          </PageLink>
        ))}
      </Box>
      <PageLink disabled={currentPage === lastPage} onClick={() => setCurrentPage(currentPage + 1)}>
        <Typography variant={'toggle'}>Вперед</Typography>
      </PageLink>
    </Box>
  )
}
