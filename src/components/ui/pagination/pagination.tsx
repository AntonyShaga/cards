import React from 'react'

import usePageNumbers from '@/hooks/usePageNumbers'

import s from './pagination.module.scss'

type PaginationProps = {
  currentPage: number
  itemsPerPage: number
  onItemsPerPageChange: (itemsPerPage: number) => void
  onPageChange: (page: number) => void
  totalItems: number
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  itemsPerPage,
  onItemsPerPageChange,
  onPageChange,
  totalItems,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePageChange = (page: number) => {
    onPageChange(page)
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1)
    }
  }

  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPage = parseInt(event.target.value, 10)

    onItemsPerPageChange(newItemsPerPage)
    onPageChange(1) // сброс страницы при изменении количества элементов на странице
  }

  const pageNumbers = usePageNumbers(totalPages, currentPage, handlePageChange)

  return (
    <div className={s.paginationContainer}>
      <button
        className={s.pageButton}
        disabled={currentPage === 1}
        onClick={handlePreviousPage}
        type={'button'}
      >
        &lt;
      </button>
      {pageNumbers}
      <button
        className={s.pageButton}
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
        type={'button'}
      >
        &gt;
      </button>
      <div className={s.itemsPerPage}>
        <span>Показать</span>
        <select onChange={handleItemsPerPageChange} value={itemsPerPage}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span>на странице</span>
      </div>
    </div>
  )
}
