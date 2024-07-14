import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import s from './textIconWrapper.module.scss'
type Props = {
  icon?: ReactNode
  onClick?: () => void
  text?: string
}
export const TextIconWrapper = ({ icon, text }: Props) => {
  const navigate = useNavigate()

  return (
    <div
      className={s.fontIconWrapper}
      onClick={() => {
        navigate('/detailCard')
      }}
    >
      <div className={s.fontIcon}>{icon}</div>
      <div>{text}</div>
    </div>
  )
}
