import type { Meta, StoryObj } from '@storybook/react'

import { TextIconWrapper } from './'

const meta = {
  component: TextIconWrapper,
  tags: ['autodocs'],
  title: 'Components/UI/FontIcon',
} satisfies Meta<typeof TextIconWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const FontIconStory: Story = {
  args: {
    text: 'sdf',
  },
}
