//import React from 'react';

import { Button } from '@/components/ui/button'

import s from './title.module.scss'
export const Title = () => {
  return (
    <div className={s.title}>
      <Button>{'Switcher'}</Button>
      <Button>{'Switcher'}</Button>
      <Button>{'Switcher'}</Button>
      <Button>{'Switcher'}</Button>
      <Button>{'Switcher'}</Button>
    </div>
  )
}
