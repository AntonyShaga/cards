import { ReactNode } from 'react'

import s from './textIconWrapper.module.scss'
type Props = {
  icon?: ReactNode
  text?: string
}
export const TextIconWrapper = ({ icon, text }: Props) => {
  return (
    <div className={s.fontIconWrapper}>
      <div className={s.fontIcon}>{icon}</div>
      <div>{text}</div>
    </div>
  )
}
