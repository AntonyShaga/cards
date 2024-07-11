import type { Meta, StoryObj } from '@storybook/react'

import { DetailCard } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: DetailCard,
  tags: ['autodocs'],
  title: 'Components/UI/CardTab',
} satisfies Meta<typeof DetailCard>

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
