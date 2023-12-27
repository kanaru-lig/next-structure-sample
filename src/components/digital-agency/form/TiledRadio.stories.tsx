import { ErrorText, Legend, SupportText, Tag, TiledRadio, TiledRadioItem } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
  title: "Component/Form/TiledRadio",
  component: TiledRadio,
  tags: ["autodocs"],
} satisfies Meta<typeof TiledRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-8">
        <fieldset className="flex flex-col gap-2">
          <Legend className="mt-2">
            ラベル<Tag>任意</Tag>
          </Legend>
          <SupportText className="mt-2">サポートテキスト</SupportText>
          <div className="flex flex-col gap-4">
            <TiledRadio name="x">
              <TiledRadioItem description="補足説明" title="選択肢1" />
            </TiledRadio>
            <TiledRadio name="x">
              <TiledRadioItem description="補足説明" title="選択肢2" />
            </TiledRadio>
            <TiledRadio name="x">
              <TiledRadioItem description="補足説明" title="選択肢3" />
            </TiledRadio>
          </div>
          <ErrorText>エラーテキスト</ErrorText>
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <Legend className="mt-2" isError={true}>
            ラベル<Tag>任意</Tag>
          </Legend>
          <SupportText className="mt-2">サポートテキスト</SupportText>
          <div className="flex flex-col gap-4">
            <TiledRadio isError={true} name="y">
              <TiledRadioItem description="補足説明" title="選択肢1" />
            </TiledRadio>
            <TiledRadio isError={true} name="y">
              <TiledRadioItem description="補足説明" title="選択肢2" />
            </TiledRadio>
            <TiledRadio isError={true} name="y">
              <TiledRadioItem description="補足説明" title="選択肢3" />
            </TiledRadio>
          </div>
          <ErrorText>エラーテキスト</ErrorText>
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <Legend className="mt-2">
            ラベル<Tag isRequired={true}>必須</Tag>
          </Legend>
          <SupportText className="mt-2">サポートテキスト</SupportText>
          <div className="flex flex-col gap-4">
            <TiledRadio disabled name="z">
              <TiledRadioItem description="補足説明" isDisabled title="選択肢1" />
            </TiledRadio>
            <TiledRadio disabled name="z">
              <TiledRadioItem description="補足説明" isDisabled title="選択肢2" />
            </TiledRadio>
            <TiledRadio disabled name="z">
              <TiledRadioItem description="補足説明" isDisabled title="選択肢3" />
            </TiledRadio>
          </div>
          <ErrorText>エラーテキスト</ErrorText>
        </fieldset>
      </div>
    );
  },
};
