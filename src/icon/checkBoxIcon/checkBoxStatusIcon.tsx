import s from './checkBoxIcon.module.scss'
type Props = {
  checked?: boolean
  disabled: boolean
}
export const CheckBoxStatusIcon = ({ checked, disabled }: Props) => {
  return (
    <svg
      className={s.icon}
      fill={'none'}
      height={'18'}
      viewBox={'0 0 18 18'}
      width={'18'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        d={
          'M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z'
        }
        fill={disabled ? '#808080 ' : '#c3c1c7'}
      />
      {checked && (
        <path
          d={
            'M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z'
          }
          fill={disabled ? '#808080 ' : '#fff'}
        />
      )}
    </svg>
  )
}
