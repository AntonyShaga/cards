import type { Meta, StoryObj } from '@storybook/react'

import { CardStars } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: CardStars,
  tags: ['autodocs'],
  title: 'Components/UI/CardStars',
} satisfies Meta<typeof CardStars>

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
