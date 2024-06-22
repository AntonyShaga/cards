//import React from 'react';

import { SwitcherButton } from '@/components/ui/switcherButton'

import s from './title.module.scss'

export const Title = () => {
  return (
    <div className={s.title}>
      <SwitcherButton>{'Switcher'}</SwitcherButton>
      <SwitcherButton>{'Switcher'}</SwitcherButton>
      <SwitcherButton>{'Switcher'}</SwitcherButton>
      <SwitcherButton>{'Switcher'}</SwitcherButton>
      <SwitcherButton>{'Switcher'}</SwitcherButton>
    </div>
  )
}
