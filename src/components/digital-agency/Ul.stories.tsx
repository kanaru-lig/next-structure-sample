import { Ul } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

function Component() {
  return (
    <Ul>
      <li>サンプルサンプル</li>
      <li>サンプルサンプル</li>
      <li>サンプルサンプル</li>
      <li>
        サンプルサンプル
        <Ul>
          <li>サンプルサンプル</li>
          <li>サンプルサンプル</li>
          <li>サンプルサンプル</li>
          <li>
            サンプルサンプル
            <Ul>
              <li>サンプルサンプル</li>
              <li>サンプルサンプル</li>
              <li>サンプルサンプル</li>
            </Ul>
          </li>
        </Ul>
      </li>
    </Ul>
  );
}

const meta = {
  title: "Component/Ul",
  component: Component,
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: Component,
};
