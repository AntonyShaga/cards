import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'
export const CheckBox = () => {
  return (
    <div className={s.Checkbox}>
      <Checkbox.Root className={s.CheckboxRoot}>
        <Checkbox.Indicator className={s.ew}>
          <CheckIcon className={s.CheckIcon} />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  )
}
