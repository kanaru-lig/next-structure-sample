import { ErrorText } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Component/Form/ErrorText",
  component: ErrorText,
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: "エラーテキスト",
  },
};
