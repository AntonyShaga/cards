//import React from 'react'
import { CardIcon } from '@/components/ui/cardIcon'
import { CardImg } from '@/components/ui/cardImg'
import { CardStars } from '@/components/ui/cardStars'
import { CardTitle } from '@/components/ui/cardTitle'
import ArrowUp from '@/icon/arrowUp'

import s from './cardTabFul.module.scss'

export const CardTabFul = () => {
  return (
    <div className={s.card}>
      <div>
        <CardTitle fullWidth>Name</CardTitle>
        <CardImg> Name</CardImg>
      </div>
      <div className={s.r}>
        <CardTitle fullWidth>Name{<ArrowUp />}</CardTitle>
        <CardTitle as={'div'} fullWidth>
          Name
        </CardTitle>
      </div>
      <div className={s.r}>
        <CardTitle fullWidth>Name</CardTitle>
        <CardTitle as={'div'}>Name</CardTitle>
      </div>
      <div className={s.r}>
        <CardTitle fullWidth>Name</CardTitle>
        <CardTitle as={'div'}>Name</CardTitle>
      </div>
      <div className={s.r}>
        <CardTitle fullWidth>Name</CardTitle>
        <CardStars />
      </div>
      <div className={s.r}>
        <CardTitle fullWidth>Name</CardTitle>
        <CardIcon />
      </div>
    </div>
  )
}
