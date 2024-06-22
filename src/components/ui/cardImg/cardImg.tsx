//import React from 'react'
import { ReactNode } from 'react'

import s from './cardImg.module.scss'

type Props = {
  children: ReactNode
}
export const CardImg = ({ children }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.card__img}>
        <img alt={''} src={''} />
      </div>
      {children}
    </div>
  )
}
