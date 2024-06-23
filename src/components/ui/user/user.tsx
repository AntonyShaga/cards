import { ComponentPropsWithoutRef } from 'react'

import s from './user.module.scss'

export type UserProps = {
  alt: string
  email: string
  name: string
  variant: 'forHeader' | 'forModal' | 'forUser'
} & ComponentPropsWithoutRef<'img'>
export const User = (props: UserProps) => {
  const { alt, email, name, src, variant } = props

  return (
    <div className={`${s.user} ${s[variant]}`}>
      {(variant === 'forModal' || variant === 'forHeader') && (
        <div className={s.userInfo}>
          <p className={s.userName}>{name}</p>
          {variant === 'forModal' && <p className={s.userEmail}>{email}</p>}
        </div>
      )}

      <div className={s.userImgWrapper}>
        <img alt={alt} className={s.userImg} src={src} />
      </div>
    </div>
  )
}
