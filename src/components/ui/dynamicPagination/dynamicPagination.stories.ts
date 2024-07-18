import type { Meta, StoryObj } from '@storybook/react'

import { DynamicPagination } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['headerButtom', 'headerLogo'],
    },
  },
  component: DynamicPagination,
  tags: ['autodocs'],
  title: 'Components/UI/DynamicPagination',
} satisfies Meta<typeof DynamicPagination>

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
