import type { Meta, StoryObj } from '@storybook/react'

import { User } from './'

const meta = {
  argTypes: {
    value: {
      control: { type: 'radio' },
      //options: ['eye', 'regular', 'serch'],
    },
  },
  component: User,
  tags: ['autodocs'],
  title: 'Components/UI/User',
} satisfies Meta<typeof User>

export default meta
type Story = StoryObj<typeof meta>

export const UserStory: Story = {
  args: {
    som: '',
  },
}
