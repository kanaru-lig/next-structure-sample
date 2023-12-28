import { Label } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

function Component() {
  return (
    <div className="flex flex-col gap-8">
      <Label>ラベル</Label>
      <Label isDisabled={true}>ラベル</Label>
    </div>
  );
}

const meta = {
  title: "Component/Form/Label",
  component: Component,
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: Component,
};
