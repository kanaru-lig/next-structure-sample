import { Link } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
  title: "Component/Link",
  component: Link,
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-8">
        <Link href="#">リンク</Link>

        <Link href="https://www.digital.go.jp" target="_blank">
          外部リンク
        </Link>
      </div>
    );
  },
};
