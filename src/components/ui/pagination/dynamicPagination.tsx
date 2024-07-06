import React, { useState } from 'react'

import { Pagination } from '@/components/ui/pagination/pagination'

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

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
        onPageChange={handlePageChange}
        totalItems={totalItems}
      />
    </div>
  )
}
