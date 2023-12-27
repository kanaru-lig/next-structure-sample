import { HamburgerButton } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
  title: "Component/HamburgerButton",
  component: HamburgerButton,
  tags: ["autodocs"],
} satisfies Meta<typeof HamburgerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-8">
        <HamburgerButton align={"row"} isOpen={false} label={"メニュー"} />
        <HamburgerButton align={"row"} isOpen={true} label={"閉じる"} />
        <HamburgerButton align={"col"} isOpen={false} label={"メニュー"} />
        <HamburgerButton align={"col"} isOpen={true} label={"閉じる"} />
      </div>
    );
  },
};
