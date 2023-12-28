import { Legend } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

function Component() {
  return (
    <div className="flex flex-col gap-8">
      <Legend>凡例</Legend>
      <Legend isError={true}>凡例</Legend>
      <Legend isDisabled={true}>凡例</Legend>
    </div>
  );
}

const meta = {
  title: "Component/Form/Legend",
  component: Component,
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: Component,
};
