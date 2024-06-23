import { ComponentPropsWithoutRef } from 'react'

import s from './user.module.scss'

export type UserProps = {
  some?: any
  variant: 'forHeader' | 'forModal'
} & ComponentPropsWithoutRef<'img'>
export const User = ({ variant }: UserProps) => {
  return (
    <div className={`${s.user} ${s[variant]}}`}>
      <div>
        <p className={s.user__text}>{'Ivan'}</p>
        <p>some email</p>
      </div>

      <div className={s.user__imgWrapper}>
        <img alt={''} src={''} />
      </div>
    </div>
  )
}
