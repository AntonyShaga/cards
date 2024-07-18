import type { Meta, StoryObj } from '@storybook/react'

import { CardTitle } from '@/components/ui/cardTitle/cardTitle'

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

export const CasrdButton: Story = {
  args: {
    as: 'button',
    children: 'Name',
  },
}
