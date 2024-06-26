import type { Meta, StoryObj } from '@storybook/react'

import { CardTab } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: CardTab,
  tags: ['autodocs'],
  title: 'Components/UI/CardTab',
} satisfies Meta<typeof CardTab>

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
