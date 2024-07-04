import { useState } from 'react'

import { CheckBoxIcon } from '@/icon/checkBoxIcon/checkBoxIcon'
import * as Checkbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

export const CheckBox = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div className={s.Checkbox}>
      <Checkbox.Root className={s.CheckboxRoot}>
        <Checkbox.Indicator className={s.ew}>
          <CheckBoxIcon cheacked={checked} />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  )
}
