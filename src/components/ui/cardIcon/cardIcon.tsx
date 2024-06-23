import { Edit } from '@/icon/edit/edit'
import Learn from '@/icon/learn/learn'
import { Trash } from '@/icon/trash/trash'

import s from './cardIcon.module.scss'
type Props = {
  vertical?: boolean
}

export const CardIcon = ({ vertical = false }: Props) => {
  return (
    <div className={`${!vertical ? s.card : s.cardVertical}`}>
      <Learn vertical={vertical} />
      <Edit vertical={vertical} />
      <Trash vertical={vertical} />
    </div>
  )
}
