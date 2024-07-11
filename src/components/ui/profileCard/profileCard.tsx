import { CardIcon } from '@/components/ui/cardIcon'
import { CardImg } from '@/components/ui/cardImg'
import { CardStars } from '@/components/ui/cardStars'
import { CardTitle } from '@/components/ui/cardTitle'
import Arrow from '@/icon/arrow/arrow'

import s from 'src/components/ui/cardTab/profileCard.module.scss'
type Props = {
  name: string
}
export const ProfileCard = ({ name }: Props) => {
  return (
    <div className={s.card}>
      <CardTitle>{name}</CardTitle>
      <CardTitle as={'div'}>{name}</CardTitle>
      <CardIcon />
      <CardStars />
      <CardImg> {name}</CardImg>
      <CardTitle fullWidth>
        {name} {<Arrow direction={'up'} />}
      </CardTitle>
    </div>
  )
}
