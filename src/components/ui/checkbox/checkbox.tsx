import { forwardRef } from 'react'

import { CheckBoxStatusIcon } from '@/icon/checkBoxIcon/checkBoxStatusIcon'
import * as Checkbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

type Props = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onValueChange?: (checked: boolean) => void
  required?: boolean
}

export const CheckBox = forwardRef<HTMLButtonElement, Props>((props, forwardedRef) => {
  const { checked, disabled = false, id, label, onValueChange, required = false } = props

  return (
    <div className={s.checkboxConteiner}>
      <div className={s.checkbox}>
        <Checkbox.Root
          checked={checked}
          className={s.checkboxRoot}
          disabled={disabled}
          id={id}
          onCheckedChange={onValueChange}
          ref={forwardedRef}
          required={required}
        >
          <CheckBoxStatusIcon checked={checked} disabled={disabled} />
          <Checkbox.Indicator className={s.checkboxIndicator}>
            <CheckBoxStatusIcon checked={checked} disabled={disabled} />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <label>{label}</label>
    </div>
  )
})
