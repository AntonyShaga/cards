import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['headerButtom', 'headerLogo'],
    },
  },
  component: Header,
  tags: ['autodocs'],
  title: 'Components/UI/Header',
} satisfies Meta<typeof Header>

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
