import type { Meta, StoryObj } from '@storybook/react'

import { SwitcherButton } from './'

const meta = {
  argTypes: {
    value: {
      control: { type: 'radio' },
      //options: ['eye', 'regular', 'serch'],
    },
  },
  component: SwitcherButton,
  tags: ['autodocs'],
  title: 'Components/UI/SwitcherButton',
} satisfies Meta<typeof SwitcherButton>

export default meta
type Story = StoryObj<typeof meta>

export const SwitcherButtonStory: Story = {
  args: {
    children: 'Switcher',
  },
}
