import { ReactNode, useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './newModal.module.scss'

type Props = {
  children: ReactNode[]
  icon: ReactNode
}
export const NewModal = ({ children, icon }: Props) => {
  const [visibleName, setvisibleName] = useState(true)

  return (
    <DropdownMenu.Root
      onOpenChange={() => {
        setvisibleName(!visibleName)
      }}
    >
      <DropdownMenu.Trigger asChild className={s.DropdownMenuTriger}>
        <div className={s.w}>
          <button className={s.DropdownMenuIconButton} type={'button'}>
            {icon}
          </button>
          {visibleName && <div>name</div>}
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align={'end'} className={s.DropdownMenuContent} sideOffset={1}>
          {children.map((el, index) => {
            return (
              <DropdownMenu.Item
                className={`${index !== children.length - 1 ? s.DropdownMenuItem : s.DropdownMenuItemLastChild}`}
                key={index}
              >
                {el}
              </DropdownMenu.Item>
            )
          })}
          <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
