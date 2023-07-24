import { FC, KeyboardEvent } from 'react'

import { clsx } from 'clsx'

import s from './pagination.module.scss'
import { usePagination } from './usePagination'

import { Typography } from '@/components'

export type PaginationPropsType = {
  currentPage: number
  totalCount: number
  pageSize: number
  siblingCount: number
  className?: string
  onPageChange: (page: number) => void
  onPageSizeChange: (pageSize: string) => void
}
export const Pagination: FC<PaginationPropsType> = props => {
  const {
    // onPageSizeChange,
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props
  const DOTS = '\u2026'
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
    DOTS,
  })

  const lastPage = paginationRange[paginationRange.length - 1]
  const disabledLeft = currentPage === 1
  const disableRight = currentPage === lastPage

  const leftTabIndex = disabledLeft ? -1 : 0
  const rightTabIndex = disableRight ? -1 : 0

  const cNames = {
    container: clsx(s.container),
    pages: clsx(s.pages),
    page: clsx(s.page),
    leftArrow: clsx(s.page, disabledLeft && s.disabled),
    rightArrow: clsx(s.page, disableRight && s.disabled),
    dots: clsx(s.page, s.dots),
  }

  if (currentPage === 0 || paginationRange.length < 1) {
    return null
  }

  const onNext = () => {
    !disableRight && onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    !disabledLeft && onPageChange(currentPage - 1)
  }
  const onKeyDownSpaceLeft = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Space') {
      onPrevious()
    }
  }
  const onKeyDownSpaceRight = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Space') {
      onNext()
    }
  }
  const pages = paginationRange.map((pageNumber, index) => {
    const activePage = clsx(s.page, currentPage === pageNumber && s.active)
    const setActivePage = () => {
      onPageChange(+pageNumber)
    }
    const onKeyDownSpace = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.code === 'Space') {
        onPageChange(+pageNumber)
      }
    }

    return pageNumber === DOTS ? (
      <div key={index} className={cNames.dots}>
        <Typography variant={'subtitle3'}>{DOTS}</Typography>
      </div>
    ) : (
      <Typography
        variant={'subtitle3'}
        className={activePage}
        onKeyDown={onKeyDownSpace}
        onClick={setActivePage}
        key={index}
        tabIndex={0}
      >
        {pageNumber}
      </Typography>
    )
  })

  return (
    <div className={cNames.container}>
      <div className={cNames.pages}>
        <div
          tabIndex={leftTabIndex}
          className={cNames.leftArrow}
          onKeyDown={onKeyDownSpaceLeft}
          onClick={onPrevious}
        >
          <Typography variant="toggle">Назад</Typography>
        </div>
        <div className={s.numbers}>{pages}</div>
        <div
          tabIndex={rightTabIndex}
          className={cNames.rightArrow}
          onKeyDown={onKeyDownSpaceRight}
          onClick={onNext}
        >
          <Typography variant="toggle">Вперед</Typography>
        </div>
      </div>
    </div>
  )
}
