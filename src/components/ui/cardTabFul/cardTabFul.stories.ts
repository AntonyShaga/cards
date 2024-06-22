import type { Meta, StoryObj } from '@storybook/react'

import { CardTabFul } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: CardTabFul,
  tags: ['autodocs'],
  title: 'Components/UI/CardTabFul',
} satisfies Meta<typeof CardTabFul>

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
