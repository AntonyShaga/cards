import type { Meta, StoryObj } from '@storybook/react'

import { CardTitle } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: CardTitle,
  tags: ['autodocs'],
  title: 'Components/UI/CardTitle',
} satisfies Meta<typeof CardTitle>

export default meta
type Story = StoryObj<typeof meta>

export const CardButton: Story = {
  args: {
    as: 'button',
    children: 'Name',
  },
}
export const CardTitleStory: Story = {
  args: {
    as: 'div',
    children: 'Name',
  },
}
