import React, { useState } from 'react'

import { usePageNumbers } from '@/components/ui/pagination/hook'

import s from './pagination.module.scss'

export const DynamicPagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(100)
  const totalItems = 5500

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleItemsPerPageChange = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage)
    setCurrentPage(1) // сброс страницы при изменении количества элементов на странице
  }

  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const pageNumbers = usePageNumbers(totalPages, currentPage, handlePageChange)

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

  const handleItemsPerPageChangeInternal = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPage = parseInt(event.target.value, 10)

    handleItemsPerPageChange(newItemsPerPage)
  }

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
        <select onChange={handleItemsPerPageChangeInternal} value={itemsPerPage}>
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
