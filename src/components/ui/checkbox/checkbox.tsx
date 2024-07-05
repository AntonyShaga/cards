import { useState } from 'react'

import { CheckBoxSelectionIcon } from '@/icon/checkBoxIcon/CheckBoxSelectionIcon.tsx'
import { CheckBoxStatusIcon } from '@/icon/checkBoxIcon/checkBoxStatusIcon.tsx'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckedState } from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

export const CheckBox = () => {
  const [checked, setChecked] = useState<CheckedState | undefined>('indeterminate')
  const onClickHandler = () => {
    setChecked(prevIsChecked => (prevIsChecked === 'indeterminate' ? true : 'indeterminate'))
  }

  return (
    <div className={s.checkbox}>
      <Checkbox.Root
        checked={checked}
        className={s.checkboxRoot}
        disabled={false}
        onCheckedChange={onClickHandler}
      >
        <Checkbox.Indicator className={s.checkboxIndicator}>
          {checked === 'indeterminate' && <CheckBoxStatusIcon disabled={false} />}
          {checked === true && <CheckBoxSelectionIcon disabled={false} />}
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  )
}
