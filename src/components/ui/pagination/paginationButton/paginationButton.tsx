import { ReactNode } from 'react'

import s from './paginationButton.module.scss'
type Props = {
  disabled: boolean
  handlePaginationButtonClick: () => void
  icon: ReactNode
}
export const PaginationButton = ({ disabled, handlePaginationButtonClick, icon }: Props) => {
  return (
    <div className={s.paginationContainer}>
      <button
        className={s.pageButton}
        disabled={disabled}
        onClick={handlePaginationButtonClick}
        type={'button'}
      >
        {icon}
      </button>
    </div>
  )
}
