import type { Meta, StoryObj } from '@storybook/react'

import { RadioButton } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['headerButtom', 'headerLogo'],
    },
  },
  component: RadioButton,
  tags: ['autodocs'],
  title: 'Components/UI/RadioButton',
} satisfies Meta<typeof RadioButton>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderButtom: Story = {
  args: {
    children: 'Primary Input',
    variant: 'headerButtom',
  },
}

export const HeaderLogo: Story = {
  args: {
    children: 'Secondary Input',
    variant: 'headerLogo',
  },
}
