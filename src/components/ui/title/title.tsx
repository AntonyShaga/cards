import { ComponentPropsWithoutRef } from 'react'

import s from './user.module.scss'

export type UserProps = {
  some?: any
} & ComponentPropsWithoutRef<'img'>
export const User = () => {
  return (
    <div className={s.user}>
      <p className={s.user__text}>{'Ivan'}</p>

      <div className={s.user__imgWrapper}>
        <img alt={''} src={''} />
      </div>
    </div>
  )
}
