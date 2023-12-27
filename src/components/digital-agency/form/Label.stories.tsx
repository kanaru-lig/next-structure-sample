import { Label } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
  title: "Component/Form/Label",
  component: Label,
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-8">
        <Label>ラベル</Label>
        <Label isDisabled={true}>ラベル</Label>
      </div>
    );
  },
};
