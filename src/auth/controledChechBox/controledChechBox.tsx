import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { CheckBox, CheckboxProps } from '@/components/ui/checkbox'
type Props<T extends FieldValues> = Omit<CheckboxProps, 'checked' | 'onValueChange'> &
  UseControllerProps<T>
export const ControledChechBox = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({ control, defaultValue, disabled, name, rules, shouldUnregister })

  return (
    <div>
      <CheckBox {...rest} {...field} checked={value} disabled={disabled} onValueChange={onChange} />
    </div>
  )
}
