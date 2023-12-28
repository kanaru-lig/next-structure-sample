import { Tag } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

function Component() {
  return (
    <div className="flex flex-col gap-8">
      <Tag>任意</Tag>
      <Tag isRequired={true}>必須</Tag>
    </div>
  );
}

const meta = {
  title: "Component/Form/Tag",
  component: Component,
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: Component,
};
