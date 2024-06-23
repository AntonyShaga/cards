import type { Meta, StoryObj } from '@storybook/react'

import { FontIcon } from './'

const meta = {
  component: FontIcon,
  tags: ['autodocs'],
  title: 'Components/UI/FontIcon',
} satisfies Meta<typeof FontIcon>

export default meta
type Story = StoryObj<typeof meta>

export const FontIconStory: Story = {
  args: {
    text: 'sdf',
  },
}
