import type { Meta, StoryObj } from '@storybook/react'

import { NewModal } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['headerButtom', 'headerLogo'],
    },
  },
  component: NewModal,
  tags: ['autodocs'],
  title: 'Components/UI/NewModal',
} satisfies Meta<typeof NewModal>

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
