import type { Meta, StoryObj } from '@storybook/react'

import { SignUp } from '@/auth/sign-up/sign-up'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: SignUp,
  tags: ['autodocs'],
  title: 'src/auth/SignUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    as: 'button',
    children: 'Primary Input',
    disabled: false,
    variant: 'primary',
  },
}
