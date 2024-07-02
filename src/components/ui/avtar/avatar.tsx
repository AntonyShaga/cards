import * as Avatar from '@radix-ui/react-avatar'

import s from './avatar.module.scss'

export const AvatarLogo = () => {
  return (
    <Avatar.Root className={s.AvatarRoot}>
      <Avatar.Image
        alt={'Pedro Duarte'}
        className={s.AvatarImage}
        src={
          'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
        }
      />
      <Avatar.Fallback className={s.AvatarFallback} delayMs={600}>
        PD
      </Avatar.Fallback>
    </Avatar.Root>
  )
}
