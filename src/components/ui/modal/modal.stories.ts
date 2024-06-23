import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['headerButtom', 'headerLogo'],
    },
  },
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/UI/Modal',
} satisfies Meta<typeof Modal>

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
