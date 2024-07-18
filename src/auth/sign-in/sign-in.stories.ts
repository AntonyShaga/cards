import type { Meta, StoryObj } from '@storybook/react'

import { SignIn } from '@/auth/sign-in/sign-in'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: SignIn,
  tags: ['autodocs'],
  title: 'src/auth/SignIn',
} satisfies Meta<typeof SignIn>

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
