import { Button, Dialog } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { useRef } from "react";

const meta = {
  title: "Component/Dialog",
  component: Dialog,
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    const DialogWithHooks = () => {
      const dialogRef = useRef<HTMLDialogElement>(null);
      return (
        <div>
          <Button onClick={() => dialogRef.current?.showModal()} size="lg" variant="primary">
            ダイアログ表示
          </Button>

          <Dialog ref={dialogRef}>
            <h2 className="text-std-24B-5 desktop:text-std-28B-5">ダイアログタイトル</h2>
            <p className="text-std-16N-7">補助テキスト補助テキスト補助テキスト補助テキスト</p>
            <div className="flex w-full max-w-xs flex-col gap-4">
              <Button
                onClick={() => {
                  dialogRef.current?.close();
                }}
                size="lg"
                variant="primary"
              >
                中断
              </Button>
              <Button
                onClick={() => {
                  dialogRef.current?.close();
                }}
                size="lg"
                variant="tertiary"
              >
                キャンセル
              </Button>
            </div>
          </Dialog>
        </div>
      );
    };
    return <DialogWithHooks />;
  },
};
