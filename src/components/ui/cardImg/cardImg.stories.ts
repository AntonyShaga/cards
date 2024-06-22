import type { Meta, StoryObj } from '@storybook/react'

import { CardImg } from './'

const meta = {
  /*argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },*/
  component: CardImg,
  tags: ['autodocs'],
  title: 'Components/UI/CardImg',
} satisfies Meta<typeof CardImg>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Name',
  },
}
