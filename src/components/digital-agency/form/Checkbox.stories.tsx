import { Checkbox, ErrorText, Legend, SupportText, Tag } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

function Component() {
  return (
    <div className="flex flex-col gap-8">
      <fieldset className="flex flex-col gap-2">
        <Legend className="mt-2">
          ラベル<Tag isRequired={true}>必須</Tag>
        </Legend>
        <SupportText className="mt-2">サポートテキスト</SupportText>
        <div className="flex flex-col gap-2">
          <Checkbox name="x">選択肢1</Checkbox>
          <Checkbox name="x">選択肢2</Checkbox>
          <Checkbox name="x">選択肢3</Checkbox>
        </div>
        <ErrorText>エラーテキスト</ErrorText>
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <Legend className="mt-2" isError={true}>
          ラベル<Tag>任意</Tag>
        </Legend>
        <SupportText className="mt-2">サポートテキスト</SupportText>
        <div className="flex flex-col gap-2">
          <Checkbox isError={true} name="y">
            選択肢1
          </Checkbox>
          <Checkbox isError={true} name="y">
            選択肢2
          </Checkbox>
          <Checkbox isError={true} name="y">
            選択肢3
          </Checkbox>
        </div>
        <ErrorText>エラーテキスト</ErrorText>
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <Legend className="mt-2" isError={true}>
          ラベル<Tag isRequired={true}>必須</Tag>
        </Legend>
        <SupportText className="mt-2">サポートテキスト</SupportText>
        <div className="flex flex-col gap-2">
          <Checkbox disabled name="z">
            選択肢1
          </Checkbox>
          <Checkbox disabled name="z">
            選択肢2
          </Checkbox>
          <Checkbox disabled name="z">
            選択肢3
          </Checkbox>
        </div>
        <ErrorText>エラーテキスト</ErrorText>
      </fieldset>
    </div>
  );
}

const meta = {
  title: "Component/Form/Checkbox",
  component: Component,
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: Component,
};
