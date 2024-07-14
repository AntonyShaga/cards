import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import s from './sign-up.module.scss'
type FormValues = {
  email: string
  name: string
  password: string
}
export const SignUp = () => {
  const { handleSubmit, register } = useForm<FormValues>()

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <div className={s.signUpContainer}>
      <div className={s.signUpWrapper}>
        <h1>Sign Up</h1>
        <div>
          <form onSubmit={onSubmit}>
            <Input {...register('name')} inputType={'text'} label={'Name'} />
            <Input inputType={'email'} {...register('email')} label={'Email'} />
            <Input
              inputType={'password'}
              label={'Password'}
              variant={'eye'}
              {...register('password')}
            />
            <Input
              inputType={'password'}
              {...register('password')}
              label={'Confirm Password'}
              variant={'eye'}
            />
            <Button fullWidth>Sign Up</Button>
          </form>
        </div>
        <div>bla bla bla</div>
        <Button>Sign In</Button>
      </div>
    </div>
  )
}
