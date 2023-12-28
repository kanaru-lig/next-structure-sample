import { Link } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

function Component() {
  return (
    <div className="flex flex-col gap-8">
      <Link href="#">リンク</Link>

      <Link href="https://www.digital.go.jp" target="_blank">
        外部リンク
      </Link>
    </div>
  );
}

const meta = {
  title: "Component/Link",
  component: Component,
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: Component,
};
