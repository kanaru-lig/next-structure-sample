import { ScrollToTopButton } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Component/ScrollToTopButton",
  component: ScrollToTopButton,
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollToTopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    href: "#",
  },
};
