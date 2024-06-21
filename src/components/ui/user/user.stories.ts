import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

const meta = {
  argTypes: {
    value: {
      control: { type: 'radio' },
      options: ['eye', 'regular', 'serch'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/UI/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputRegular: Story = {
  args: {
    disabled: false,
    value: 'Primary Input',
    variant: 'regular',
  },
}

export const InputEye: Story = {
  args: {
    disabled: false,
    value: 'Primary Input',
    variant: 'eye',
  },
}

export const InputSearch: Story = {
  args: {
    disabled: false,
    value: 'Primary Input',
    variant: 'search',
  },
}
