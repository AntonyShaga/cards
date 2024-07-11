import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './cardTitle.module.scss'
export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  fullWidth?: boolean
} & ComponentPropsWithoutRef<T>
export const CardTitle = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', fullWidth, ...res } = props

  return (
    <Component
      className={`${Component === 'button' ? s.cardButton : s.cardTitle} ${
        fullWidth ? s.fullWidth : ''
      }`}
      {...res}
    />
  )
}
