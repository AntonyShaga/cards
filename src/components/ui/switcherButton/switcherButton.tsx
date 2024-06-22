import { ComponentPropsWithoutRef, ReactNode } from 'react'

import s from './switcherButton.module.scss'
export type ButtonProps = {
  children: ReactNode
  className?: string
} & ComponentPropsWithoutRef<'button'>
export const SwitcherButton = (props: ButtonProps) => {
  const { children } = props

  return (
    <div>
      <button className={s.button} type={'button'}>{children}</button>
    </div>
  )
}
