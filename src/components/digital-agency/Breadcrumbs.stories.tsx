import { Breadcrumbs } from ".";
import { breadcrumbsItemStyle } from "./Breadcrumbs";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
  title: "Component/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    items: [
      <a className={breadcrumbsItemStyle} href="#" key="home">
        ホーム
      </a>,
      <a className={breadcrumbsItemStyle} href="#" key="organization">
        組織情報
      </a>,
      <a className={breadcrumbsItemStyle} href="#" key="a">
        長いページタイトルが入ります長いページタイトルが入ります
      </a>,
      <a className={breadcrumbsItemStyle} href="#" key="b">
        長いページタイトルが入ります長いページタイトルが入ります
      </a>,
      "長いページタイトルが入ります長いページタイトルが入ります",
    ],
  },
};
