import type { Meta, StoryObj } from '@storybook/react'

import { CardIcon } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: CardIcon,
  tags: ['autodocs'],
  title: 'Components/UI/CardIcon',
} satisfies Meta<typeof CardIcon>

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
