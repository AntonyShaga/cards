import { ReactNode } from 'react'

import s from './fontIcon.module.scss'
type Props = {
  icon?: ReactNode
  text?: string
}
export const FontIcon = ({ icon, text }: Props) => {
  return (
    <div className={s.fontIconWrapper}>
      <div className={s.fontIcon}>{icon}</div>
      <div>{text}</div>
    </div>
  )
}
