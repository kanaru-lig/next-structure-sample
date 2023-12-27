import { Ul } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
  title: "Component/Ul",
  component: Ul,
  tags: ["autodocs"],
} satisfies Meta<typeof Ul>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
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
  },
};
