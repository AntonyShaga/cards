import { useController, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { CheckBox } from '@/components/ui/checkbox/checkbox'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in.module.scss'
type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}
export const SignIn = () => {
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4),
    rememberMe: z.boolean().default(false),
  })

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })
  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  console.log('errors: ', errors)
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })
  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

  return (
    <div className={s.signUpContainer}>
      <div className={s.signUpWrapper}>
        <h1>Sign In</h1>
        <div>
          <form onSubmit={onSubmit}>
            <Input
              inputType={'email'}
              {...register('email')}
              errorMessage={errors.email?.message}
              label={'Email'}
            />
            <Input
              errorMessage={errors.password?.message}
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
