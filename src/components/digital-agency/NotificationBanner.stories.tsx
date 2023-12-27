import { NotificationBanner } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
  title: "Component/NotificationBanner",
  component: NotificationBanner,
  tags: ["autodocs"],
} satisfies Meta<typeof NotificationBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-8">
        <NotificationBanner borderStyle="standard" className="border-sumi-1000">
          <h3 className="text-std-22B-5 mb-5 font-bold">バナータイトル</h3>
          <p>バナーディスクリプション</p>
        </NotificationBanner>

        <NotificationBanner borderStyle="color-chip" className="border-forest-600">
          <h3 className="text-std-22B-5 mb-5 font-bold">バナータイトル</h3>
          <p>バナーディスクリプション</p>
        </NotificationBanner>
      </div>
    );
  },
};