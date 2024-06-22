import type { Meta, StoryObj } from '@storybook/react'

import { Title } from './'

const meta = {
  argTypes: {
    value: {
      control: { type: 'radio' },
      //options: ['eye', 'regular', 'serch'],
    },
  },
  component: Title,
  tags: ['autodocs'],
  title: 'Components/UI/Title',
} satisfies Meta<typeof Title>

export default meta
type Story = StoryObj<typeof meta>

export const TitleStory: Story = {
  args: {
    som: '',
  },
}
