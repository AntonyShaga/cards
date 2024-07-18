import type { Meta, StoryObj } from '@storybook/react'

import { DualThumbSlider } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['headerButtom', 'headerLogo'],
    },
  },
  component: DualThumbSlider,
  tags: ['autodocs'],
  title: 'Components/UI/dualThumbSlider',
} satisfies Meta<typeof DualThumbSlider>

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
