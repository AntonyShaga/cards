import React, { useState } from 'react'

import { usePageNumbers } from '@/components/ui/pagination/hook'
import { PaginationButton } from '@/components/ui/pagination/paginationButton'
import { RadixSelect } from '@/components/ui/radixSelect'

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
    setCurrentPage(1)
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

  return (
    <div className={s.paginationContainer}>
      <PaginationButton
        disabled={currentPage === 1}
        handlePaginationButtonClick={handlePreviousPage}
        icon={''}
      />
      {pageNumbers}
      <PaginationButton
        disabled={currentPage === totalPages}
        handlePaginationButtonClick={handleNextPage}
        icon={''}
      />
      <RadixSelect onChange={handleItemsPerPageChange} value={itemsPerPage} />
    </div>
  )
}
