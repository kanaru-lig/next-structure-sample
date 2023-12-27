import { Tag } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
  title: "Component/Form/Tag",
  component: Tag,
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-8">
        <Tag>任意</Tag>
        <Tag isRequired={true}>必須</Tag>
      </div>
    );
  },
};
