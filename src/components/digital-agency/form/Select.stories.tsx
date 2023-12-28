import { ErrorText, Label, Select, SupportText, Tag } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

function Component() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Label htmlFor="test">
          ラベル<Tag>任意</Tag>
        </Label>
        <SupportText>サポートテキスト</SupportText>
        <Select id="test">
          <option>選択してください</option>
          <option>選択肢1</option>
          <option>選択肢2</option>
          <option>選択肢3</option>
        </Select>
        <ErrorText>エラーテキスト</ErrorText>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="test-error">
          ラベル<Tag>任意</Tag>
        </Label>
        <SupportText>サポートテキスト</SupportText>
        <Select id="test-error" isError={true}>
          <option>選択してください</option>
          <option>選択肢1</option>
          <option>選択肢2</option>
          <option>選択肢3</option>
        </Select>
        <ErrorText>エラーテキスト</ErrorText>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="test-disabled">
          ラベル<Tag isRequired={true}>必須</Tag>
        </Label>
        <SupportText>サポートテキスト</SupportText>
        <Select disabled id="test-disabled">
          <option>選択してください</option>
          <option>選択肢1</option>
          <option>選択肢2</option>
          <option>選択肢3</option>
        </Select>
        <ErrorText>エラーテキスト</ErrorText>
      </div>
    </div>
  );
}

const meta = {
  title: "Component/Form/Select",
  component: Component,
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: Component,
};
