import { useState } from 'react'

import { CheckBoxIcon } from '@/icon/checkBoxIcon/checkBoxIcon'
import { CheckBoxIconRam } from '@/icon/checkBoxIcon/checkBoxIconRam.tsx'
import * as Checkbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

export const CheckBox = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div className={s.Checkbox}>
      <Checkbox.Root className={s.CheckboxRoot}>
        <Checkbox.Indicator className={s.ew}>
          <CheckBoxIconRam />
          {/*<CheckBoxIcon />*/}
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  )
}
