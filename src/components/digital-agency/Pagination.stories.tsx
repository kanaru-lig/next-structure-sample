import { Pagination } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Component/Pagination",
  component: Pagination,
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: "default",
    currentPage: 50,
    lastPage: 100,
    onItemClicked: (page) => console.log(page),
  },
};

export const Simple: Story = {
  args: {
    mode: "simple",
    currentPage: 50,
    lastPage: 100,
    onItemClicked: (page) => console.log(page),
  },
};
