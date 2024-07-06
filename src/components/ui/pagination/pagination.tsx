import React from 'react'

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

  const renderPageNumbers = () => {
    const pageNumbers = []
    const maxPagesToShow = 5
    const pagesToShow = maxPagesToShow - 2 // excluding the first and last page

    const startPage = Math.max(2, currentPage - Math.floor(pagesToShow / 2))
    const endPage = Math.min(totalPages - 1, currentPage + Math.floor(pagesToShow / 2))

    if (startPage > 2) {
      pageNumbers.push(
        <span className={s.ellipsis} key={'start-ellipsis'}>
          ...
        </span>
      )
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          className={`${s.pageButton} ${i === currentPage ? s.active : ''}`}
          key={i}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      )
    }

    if (endPage < totalPages - 1) {
      pageNumbers.push(
        <span className={s.ellipsis} key={'end-ellipsis'}>
          ...
        </span>
      )
    }

    return pageNumbers
  }

  return (
    <div className={s.paginationContainer}>
      <button className={s.pageButton} disabled={currentPage === 1} onClick={handlePreviousPage}>
        &lt;
      </button>
      <button
        className={`${s.pageButton} ${1 === currentPage ? s.active : ''}`}
        onClick={() => handlePageChange(1)}
      >
        1
      </button>
      {renderPageNumbers()}
      {totalPages > 1 && (
        <button
          className={`${s.pageButton} ${totalPages === currentPage ? s.active : ''}`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      )}
      <button
        className={s.pageButton}
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
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
