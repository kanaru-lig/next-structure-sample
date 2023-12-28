import { UtilityLink } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

function Component() {
  return (
    <div className="flex flex-col gap-8">
      <UtilityLink href="#">リンク</UtilityLink>

      <UtilityLink href="https://www.digital.go.jp" target="_blank">
        外部リンク
      </UtilityLink>
    </div>
  );
}

const meta = {
  title: "Component/UtilityLink",
  component: Component,
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: Component,
};
