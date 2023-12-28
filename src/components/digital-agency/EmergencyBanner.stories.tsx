import { EmergencyBanner } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

function Component() {
  return (
    <div className="flex flex-col gap-8">
      <EmergencyBanner as="div">
        <h3 className="text-heading-xs font-bold text-sun-800">
          バナータイトル
        </h3>
        <p className="mt-2 text-std-16N-7">
          <time dateTime="2023-01-01">年月日</time>
        </p>
        <p className="mt-8 text-std-17N-7">バナーデスクリプション</p>
      </EmergencyBanner>

      <EmergencyBanner as="a" className="group hover:border-sun-1000" href="#">
        <h3 className="text-heading-xs font-bold text-sun-800 group-hover:text-sun-1000">
          バナータイトル
        </h3>
        <p className="mt-2 text-std-16N-7">
          <time dateTime="2023-01-01">年月日</time>
        </p>
        <p className="mt-8 text-std-17N-7">バナーデスクリプション</p>
      </EmergencyBanner>
    </div>
  );
}

const meta = {
  title: "Component/EmergencyBanner",
  component: Component,
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: Component,
};
