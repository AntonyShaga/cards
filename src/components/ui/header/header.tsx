import { ComponentPropsWithoutRef } from 'react'

import { AvatarLogo } from '@/components/ui/avtar'
import { Button } from '@/components/ui/button'
import { Logo } from '@/icon/Logo'
import { LogoOut } from '@/icon/logoOut/logoOut'
import { Person } from '@/icon/person/person'

import s from './header.module.scss'

import { DropdownModal } from '../dropdownModal'
import { TextIconWrapper } from '../textIconWrapper'

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
          <DropdownModal
            icon={
              <AvatarLogo
                src={
                  'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
                }
              />
            }
            name={'Long Name'}
          >
            {
              <AvatarLogo
                email={'j&johnson@gmail.com'}
                name={'Pedro Duarte'}
                src={
                  'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
                }
              />
            }
            {<TextIconWrapper icon={<Person />} text={'My Profile'} />}
            {<TextIconWrapper icon={<LogoOut />} text={'Sign Out'} />}
          </DropdownModal>
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
