import { Accordion, AccordionContent, AccordionSummary } from ".";
import { AccordionDefaultIcon } from "./Accordion";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

function Component() {
  return (
    <div className="flex flex-col gap-8">
      <Accordion>
        <AccordionSummary className="p-2">
          <h3>ダミーテキストはどのような場合に使用されますか。</h3>
          <AccordionDefaultIcon />
        </AccordionSummary>
        <AccordionContent>
          これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
        </AccordionContent>
      </Accordion>

      <Accordion>
        <AccordionSummary className="bg-secondary p-2">
          <h3>ダミーテキストはどのような場合に使用されますか。</h3>
          <AccordionDefaultIcon />
        </AccordionSummary>
        <AccordionContent>
          これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
        </AccordionContent>
      </Accordion>
    </div>
  );
}

const meta = {
  title: "Component/Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Accordion>
        <AccordionSummary className="p-2">
          <h3>ダミーテキストはどのような場合に使用されますか。</h3>
          <AccordionDefaultIcon />
        </AccordionSummary>
        <AccordionContent>
          これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
        </AccordionContent>
      </Accordion>

      <Accordion>
        <AccordionSummary className="bg-secondary p-2">
          <h3>ダミーテキストはどのような場合に使用されますか。</h3>
          <AccordionDefaultIcon />
        </AccordionSummary>
        <AccordionContent>
          これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
        </AccordionContent>
      </Accordion>
    </div>
  ),
};
