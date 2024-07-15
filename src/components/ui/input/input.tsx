import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { EyeOutline } from '@/icon/EyeOutline'
import { MaximizeOutline } from '@/icon/MaximizeOutline'

import s from './input.module.scss'

export type InputProps = {
  className?: string
  disabled?: boolean
  errorMessage?: string
  inputType: string
  label?: string
  required?: boolean
  variant?: 'eye' | 'regular' | 'search'
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    disabled,
    errorMessage,
    inputType,
    label,
    onChange,
    required = false,
    value,
    variant = 'regular',
    ...rest
  } = props

  const [showPassword, setShowPassword] = useState<'password' | 'text'>('password')

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
          required={required}
          type={inputType !== 'password' ? inputType : showPassword}
          value={value}
          {...rest}
        />
        <div className={s.inputIcon} onClick={handleIconClick}>
          {variant === 'eye' && <EyeOutline disabled={showPassword === 'password'} />}
        </div>
      </div>
      <div className={s.error}>{errorMessage}</div>
    </div>
  )
})
