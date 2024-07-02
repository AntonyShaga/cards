import * as Avatar from '@radix-ui/react-avatar'

import s from './avatar.module.scss'
type Props = {
  email?: string
  name?: string
  src: string
}
export const AvatarLogo = ({ email, name, src }: Props) => {
  return (
    <div className={s.Avatar}>
      <div className={s.AvatarWrapper}>
        <div className={s.AvatarName}>{name}</div>
        <div className={s.AvatarEmail}>{email}</div>
      </div>
      <Avatar.Root className={s.AvatarRoot}>
        <Avatar.Image alt={name} className={s.AvatarImage} src={src} />

        <Avatar.Fallback className={s.AvatarFallback} delayMs={600}>
          PD
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  )
}
