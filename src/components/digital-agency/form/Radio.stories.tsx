import { ErrorText, Legend, Radio, SupportText, Tag } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

function Component() {
  return (
    <div className="flex flex-col gap-8">
      <fieldset className="flex flex-col gap-2">
        <Legend className="mt-2">
          ラベル<Tag>任意</Tag>
        </Legend>
        <SupportText className="mt-2">サポートテキスト</SupportText>
        <div className="flex flex-col gap-2">
          <Radio name="x">選択肢1</Radio>
          <Radio name="x">選択肢2</Radio>
          <Radio name="x">選択肢3</Radio>
        </div>
        <ErrorText>エラーテキスト</ErrorText>
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <Legend className="mt-2" isError={true}>
          ラベル<Tag>任意</Tag>
        </Legend>
        <SupportText className="mt-2">サポートテキスト</SupportText>
        <div className="flex flex-col gap-2">
          <Radio isError={true} name="y">
            選択肢1
          </Radio>
          <Radio isError={true} name="y">
            選択肢2
          </Radio>
          <Radio isError={true} name="y">
            選択肢3
          </Radio>
        </div>
        <ErrorText>エラーテキスト</ErrorText>
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <Legend className="mt-2">
          ラベル<Tag isRequired={true}>必須</Tag>
        </Legend>
        <SupportText className="mt-2">サポートテキスト</SupportText>
        <div className="flex flex-col gap-2">
          <Radio disabled name="z">
            選択肢1
          </Radio>
          <Radio disabled name="z">
            選択肢2
          </Radio>
          <Radio disabled name="z">
            選択肢3
          </Radio>
        </div>
        <ErrorText>エラーテキスト</ErrorText>
      </fieldset>
    </div>
  );
}

const meta = {
  title: "Component/Form/Radio",
  component: Component,
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: Component,
};
