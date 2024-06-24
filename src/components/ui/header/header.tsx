import { ComponentPropsWithoutRef } from 'react'

import { Button } from '@/components/ui/button'
import { FontIcon } from '@/components/ui/fontIcon'
import { Modal } from '@/components/ui/modal'
import { User } from '@/components/ui/user'
import { Logo } from '@/icon/Logo'
import { LogoOut } from '@/icon/logoOut/logoOut'
import { Person } from '@/icon/person/person'

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
          <Modal
            icon={
              <User
                alt={'as'}
                email={'someEmaill'}
                name={'Ivanov'}
                src={''}
                variant={'forHeader'}
              />
            }
          >
            {
              <User
                alt={'as'}
                email={'j&johnson@gmail.com'}
                name={'Ivanov'}
                src={''}
                variant={'forModal'}
              />
            }
            {<FontIcon icon={<Person />} text={'My Profile'} />}
            {<FontIcon icon={<LogoOut />} text={'Sign Out'} />}
          </Modal>
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
