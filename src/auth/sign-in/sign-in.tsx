import { useController, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { CheckBox } from '@/components/ui/checkbox/checkbox'
import { Input } from '@/components/ui/input'

import s from './sign-in.module.scss'
type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}
export const SignIn = () => {
  const { control, handleSubmit, register } = useForm<FormValues>()

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  return (
    <div className={s.signUpContainer}>
      <div className={s.signUpWrapper}>
        <h1>Sign In</h1>
        <div>
          <form onSubmit={onSubmit}>
            <Input inputType={'email'} {...register('email')} label={'Email'} />
            <Input
              inputType={'password'}
              label={'Password'}
              variant={'eye'}
              {...register('password')}
            />
            <CheckBox
              onValueChange={onChange}
              {...register('rememberMe')}
              checked={value}
              label={'Remember Me'}
            />
            <Button fullWidth>Sign In</Button>
          </form>
        </div>
        <div>bla bla bla</div>
        <Button>Sign Up</Button>
      </div>
    </div>
  )
}
