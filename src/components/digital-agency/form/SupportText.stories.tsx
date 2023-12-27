import { SupportText } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Component/Form/SupportText",
  component: SupportText,
  tags: ["autodocs"],
} satisfies Meta<typeof SupportText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: "サポートテキスト",
  },
};
