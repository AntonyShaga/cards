import { useState } from 'react'

import { CheckBoxIcon } from '@/icon/checkBoxIcon/checkBoxIcon'
import { CheckBoxIconRam } from '@/icon/checkBoxIcon/checkBoxIconRam'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckedState } from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

export const CheckBox = () => {
  const [checked, setChecked] = useState<CheckedState | undefined>('indeterminate')
  const onClickHandler = () => {
    setChecked(prevIsChecked => (prevIsChecked === 'indeterminate' ? true : 'indeterminate'))
  }

  return (
    <div className={s.Checkbox}>
      <Checkbox.Root checked={checked} className={s.CheckboxRoot} onCheckedChange={onClickHandler}>
        <Checkbox.Indicator className={s.ew}>
          {checked === 'indeterminate' && <CheckBoxIconRam />}
          {checked === true && <CheckBoxIcon />}
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  )
}
