import { ErrorText, Label, SupportText, Tag, Textarea, TextareaCounter } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

const meta = {
  title: "Component/Form/Textarea",
  component: Textarea,
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export type TextareaCounterProps = {
  count: number;
  maxCount: number;
  className?: string;
  id?: string;
};

export const Example: Story = {
  render: () => {
    const TextareaCounterWithHooks = () => {
      const [count, setCount] = useState(0);

      return (
        <div className="flex flex-col gap-2">
          <Label htmlFor="test-counter">
            ラベル<Tag>任意</Tag>
          </Label>
          <SupportText>サポートテキスト</SupportText>
          <Textarea aria-describedby={count > 100 ? "test-counter-error" : ""} id="test-counter" onChange={(e) => setCount(e.target.textLength)} />
          <div className="flex justify-end gap-6">
            {count > 100 && (
              <ErrorText className="mr-auto" id="test-counter-error">
                入力できる文字数を超えています。
              </ErrorText>
            )}
            <TextareaCounter count={count} maxCount={100} />
          </div>
        </div>
      );
    };

    return (
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Label htmlFor="test">
            ラベル<Tag>任意</Tag>
          </Label>
          <SupportText>サポートテキスト</SupportText>
          <Textarea id="test" />
          <ErrorText>エラーテキスト</ErrorText>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="test-error">
            ラベル<Tag>任意</Tag>
          </Label>
          <SupportText>サポートテキスト</SupportText>
          <Textarea id="test-error" isError={true} />
          <ErrorText>エラーテキスト</ErrorText>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="test-disabled">
            ラベル<Tag isRequired={true}>必須</Tag>
          </Label>
          <SupportText>サポートテキスト</SupportText>
          <Textarea disabled id="test-disabled" />
          <ErrorText>エラーテキスト</ErrorText>
        </div>

        {TextareaCounterWithHooks()}
      </div>
    );
  },
};
