import { ReactNode } from 'react'

import { useOutsideClick } from '@/hooks'

import s from './modal.module.scss'

type Props = {
  children: ReactNode[]
  icon: ReactNode
}
export const Modal = ({ children, icon }: Props) => {
  const { isActive, ref, setIsActive } = useOutsideClick(false)

  const toggleVisibility = () => {
    setIsActive(prev => !prev)
  }

  return (
    <div className={s.modal} ref={ref}>
      <div className={s.modalIcon} onClick={toggleVisibility}>
        {icon}
      </div>
      {isActive && (
        <div className={s.modalWrapper}>
          <ul className={s.modalList}>
            {children.map((el, index) => (
              <li className={s.modalListItem} key={index}>
                {el}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
