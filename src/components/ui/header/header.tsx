import { ComponentPropsWithoutRef } from 'react'

import { Button } from '@/components/ui/button'
import { User } from '@/components/ui/user'
import { Logo } from '@/icon/Logo'

import s from './header.module.scss'

export type HeaderProps = {
  className?: string
  variant?: 'headerButtom' | 'headerLogo'
} & ComponentPropsWithoutRef<'header'>
export const Header = ({ variant = 'headerLogo' }: HeaderProps) => {
  return (
    <header className={s.header}>
      <div className={s.header__wrapper}>
        <div className={s.header__logo}>
          <Logo />
        </div>
        {variant === 'headerLogo' && (
          <User alt={'as'} email={''} name={'asdasdasdasd'} variant={'forHeader'} />
        )}

        {variant === 'headerButtom' && (
          <div>
            <Button variant={'secondary'}>{'Sign In'}</Button>
          </div>
        )}
      </div>
    </header>
  )
}
