import { useMemo } from 'react'

import s from '../pagination.module.scss'

export const usePageNumbers = (
  totalPages: number,
  currentPage: number,
  handlePageChange: (page: number) => void
) => {
  return useMemo(() => {
    const pageNumbers = []
    const maxPagesToShow = 3
    const startPage = Math.max(2, currentPage - Math.floor(maxPagesToShow / 2))
    const endPage = Math.min(totalPages - 1, currentPage + Math.floor(maxPagesToShow / 2))

    if (currentPage <= 4) {
      // Отображение первых 5 страниц
      for (let i = 1; i <= Math.min(5, totalPages); i++) {
        pageNumbers.push(
          <button
            className={`${s.pageButton} ${i === currentPage ? s.active : ''}`}
            key={i}
            onClick={() => handlePageChange(i)}
            type={'button'}
          >
            {i}
          </button>
        )
      }
      if (totalPages > 5) {
        pageNumbers.push(
          <span className={s.ellipsis} key={'ellipsis'}>
            ...
          </span>
        )
        pageNumbers.push(
          <button
            className={s.pageButton}
            key={totalPages}
            onClick={() => handlePageChange(totalPages)}
            type={'button'}
          >
            {totalPages}
          </button>
        )
      }
    } else if (currentPage >= totalPages - 2) {
      // Отображение последних 5 страниц
      pageNumbers.push(
        <button
          className={s.pageButton}
          key={1}
          onClick={() => handlePageChange(1)}
          type={'button'}
        >
          1
        </button>
      )
      if (totalPages > 5) {
        pageNumbers.push(
          <span className={s.ellipsis} key={'ellipsis'}>
            ...
          </span>
        )
      }
      for (let i = Math.max(totalPages - 4, 1); i <= totalPages; i++) {
        pageNumbers.push(
          <button
            className={`${s.pageButton} ${i === currentPage ? s.active : ''}`}
            key={i}
            onClick={() => handlePageChange(i)}
            type={'button'}
          >
            {i}
          </button>
        )
      }
    } else {
      // Текущая страница где-то посередине
      pageNumbers.push(
        <button
          className={s.pageButton}
          key={1}
          onClick={() => handlePageChange(1)}
          type={'button'}
        >
          1
        </button>
      )
      pageNumbers.push(
        <span className={s.ellipsis} key={'start-ellipsis'}>
          ...
        </span>
      )

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            className={`${s.pageButton} ${i === currentPage ? s.active : ''}`}
            key={i}
            onClick={() => handlePageChange(i)}
            type={'button'}
          >
            {i}
          </button>
        )
      }

      pageNumbers.push(
        <span className={s.ellipsis} key={'end-ellipsis'}>
          ...
        </span>
      )
      pageNumbers.push(
        <button
          className={s.pageButton}
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          type={'button'}
        >
          {totalPages}
        </button>
      )
    }

    return pageNumbers
  }, [totalPages, currentPage, handlePageChange])
}
