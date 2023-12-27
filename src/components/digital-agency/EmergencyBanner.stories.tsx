import { EmergencyBanner } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
  title: "Component/EmergencyBanner",
  component: EmergencyBanner,
  tags: ["autodocs"],
} satisfies Meta<typeof EmergencyBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-8">
        <EmergencyBanner as="div">
          <h3 className="text-heading-xs text-sun-800 font-bold">バナータイトル</h3>
          <p className="text-std-16N-7 mt-2">
            <time dateTime="2023-01-01">年月日</time>
          </p>
          <p className="text-std-17N-7 mt-8">バナーデスクリプション</p>
        </EmergencyBanner>

        <EmergencyBanner as="a" className="hover:border-sun-1000 group" href="#">
          <h3 className="text-heading-xs text-sun-800 group-hover:text-sun-1000 font-bold">バナータイトル</h3>
          <p className="text-std-16N-7 mt-2">
            <time dateTime="2023-01-01">年月日</time>
          </p>
          <p className="text-std-17N-7 mt-8">バナーデスクリプション</p>
        </EmergencyBanner>
      </div>
    );
  },
};
