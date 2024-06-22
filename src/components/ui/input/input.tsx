import { ComponentPropsWithoutRef } from 'react'

import { CloseOutline } from '@/icon/CloseOutline'
import { EyeOutline } from '@/icon/EyeOutline'
import { MaximizeOutline } from '@/icon/MaximizeOutline'

import s from './input.module.scss'

export type InputProps = {
  className?: string
  disabled: boolean
  value: string
  variant?: 'eye' | 'regular' | 'search'
} & ComponentPropsWithoutRef<'input'>

export const Input = (props: InputProps) => {
  const { className, disabled, value, variant = 'regular', ...rest } = props

  return (
    <div>
      <div className={`${s.input__wrapper}`}>
        {variant === 'search' && <MaximizeOutline />}
        <input
          className={s.input}
          disabled={disabled}
          onChange={() => {}}
          type={'text'}
          {...rest}
        />
        {variant === 'eye' && <EyeOutline />}
        {variant === 'search' && <CloseOutline />}
      </div>
    </div>
  )
}
