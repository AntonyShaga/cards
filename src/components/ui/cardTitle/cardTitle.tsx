import { Edit2 } from '@/icon/Edit-2'
import PlayCircle from '@/icon/PlayCircle'
import { Trash } from '@/icon/Trash'

import s from './cardIcon.module.scss'

export const CardIcon = () => {
  return (
    <div className={s.card}>
      <PlayCircle />
      <Edit2 />
      <Trash />
    </div>
  )
}
