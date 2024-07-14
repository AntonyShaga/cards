import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { EyeOutline } from '@/icon/EyeOutline'
import { MaximizeOutline } from '@/icon/MaximizeOutline'

import s from './input.module.scss'

export type InputProps = {
  className?: string
  disabled?: boolean
  inputType: string
  label?: string

  variant?: 'eye' | 'regular' | 'search'
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    disabled,
    inputType,
    label,
    onChange,
    value,
    variant = 'regular',
    ...rest
  } = props
  // const [inputValue, setInputValue] = useState('')
  const [showPassword, setShowPassword] = useState<'password' | 'text'>('password')
  /*const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }*/

  const handleIconClick = () => {
    setShowPassword(showPassword === 'text' ? 'password' : 'text')
  }

  return (
    <div className={s.inputContainer}>
      {label && <span>{label}</span>}
      <div className={`${s.inputWrapper}`}>
        {variant === 'search' && <MaximizeOutline />}
        <input
          className={s.input}
          disabled={disabled}
          onChange={onChange}
          ref={ref}
          type={inputType !== 'password' ? inputType : showPassword}
          value={value}
          {...rest}
        />
        <div className={s.inputIcon} onClick={handleIconClick}>
          {variant === 'eye' && <EyeOutline disabled={showPassword === 'password'} />}
        </div>
      </div>
    </div>
  )
})
