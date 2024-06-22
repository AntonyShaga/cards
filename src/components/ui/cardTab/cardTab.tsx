//import React from 'react'
import { CardIcon } from '@/components/ui/cardIcon'
import { CardImg } from '@/components/ui/cardImg'
import { CardStars } from '@/components/ui/cardStars'
import { CardTitle } from '@/components/ui/cardTitle'
import ArrowUp from '@/icon/arrowUp'

import s from './cardTab.module.scss'

export const CardTab = () => {
  return (
    <div className={s.card}>
      <CardTitle>Name</CardTitle>
      <CardTitle as={'div'}>Name</CardTitle>
      <CardIcon />
      <CardStars />
      <CardImg> Name</CardImg>
      <CardTitle fullWidth>Name {<ArrowUp />}</CardTitle>
    </div>
  )
}
