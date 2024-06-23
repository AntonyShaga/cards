import { ReactNode, useState } from 'react'

import s from './modal.module.scss'

type Props = {
  children: ReactNode[]
  icon: ReactNode
}
export const Modal = ({ children, icon }: Props) => {
  const [visible, setVisible] = useState<boolean>(false)

  const toggleVisibility = () => {
    setVisible(prev => !prev)
  }

  return (
    <div className={s.modal}>
      <div className={s.modalIcon} onClick={toggleVisibility}>
        {icon}
      </div>
      {visible && (
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
