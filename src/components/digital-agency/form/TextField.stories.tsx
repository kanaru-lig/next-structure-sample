import { ErrorText, Label, SupportText, Tag, TextField } from ".";
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
        <TextField id="test" />
        <ErrorText>エラーテキスト</ErrorText>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="test-error">
          ラベル<Tag isRequired={true}>必須</Tag>
        </Label>
        <SupportText>サポートテキスト</SupportText>
        <TextField id="test-error" isError={true} />
        <ErrorText>エラーテキスト</ErrorText>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="test-disabled">
          ラベル<Tag>任意</Tag>
        </Label>
        <SupportText>サポートテキスト</SupportText>
        <TextField disabled id="test-disabled" />
        <ErrorText>エラーテキスト</ErrorText>
      </div>
    </div>
  );
}

const meta = {
  title: "Component/Form/TextField",
  component: Component,
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: Component,
};
