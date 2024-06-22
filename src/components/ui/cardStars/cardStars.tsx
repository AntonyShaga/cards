import { useState } from 'react'

import { Star } from '@/icon/Star'

import s from './cardStars.module.scss'

type Props = {
  count?: number
}

export const CardStars = (props: Props) => {
  const { count = 5 } = props
  const stars = Array(count).fill(0)
  const initialStarValue = -1
  const [currentItem, setCurrentItem] = useState(initialStarValue)
  const [howerItem, setHoverItem] = useState(initialStarValue)
  const handleStarClick = (index: number) => {
    if (index === 0 && currentItem === 0) {
      setCurrentItem(initialStarValue)
    } else {
      setCurrentItem(index)
    }
  }
  const handleStarHover = (index: number) => {
    setHoverItem(index)
  }
  const handleStarHoverOut = () => {
    setHoverItem(initialStarValue)
  }

  return (
    <div className={s.cardStar}>
      {stars.map((_, index) => {
        return (
          <div
            className={s.cardStarWrapper}
            key={index}
            onClick={() => handleStarClick(index)}
            onMouseMove={() => handleStarHover(index)}
            onMouseOut={handleStarHoverOut}
          >
            <Star fill={index <= currentItem || index <= howerItem} />
          </div>
        )
      })}
    </div>
  )
}
