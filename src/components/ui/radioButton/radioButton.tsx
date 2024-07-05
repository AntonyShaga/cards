import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radioButton.module.scss'
export const RadioButton = () => {
  return (
    <div className={s.radio}>
      <RadioGroup.Root className={s.RadioRoot}>
        <div className={s.radioRootWraper}>
          <div className={s.radioWrapperItem}>
            <RadioGroup.Item className={s.radioItem} id={'r1'} value={'default'}>
              <RadioGroup.Indicator className={s.radioIndicator} />
            </RadioGroup.Item>
          </div>
          <label className={s.label} htmlFor={'r1'}>
            Default
          </label>
        </div>
      </RadioGroup.Root>
    </div>
  )
}
