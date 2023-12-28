import { Table, Tbody, Td, Th, Thead, Tr } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

function Component() {
  return (
    <div className="flex flex-col gap-8">
      <Table>
        <caption className="p-4">表組みの例1</caption>
        <Thead>
          <Tr>
            <Th scope="col">Table Header</Th>
            <Th scope="col">Table Header</Th>
            <Th scope="col">Table Header</Th>
            <Th scope="col">Table Header</Th>
            <Th scope="col">Table Header</Th>
            <Th scope="col">Table Header</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
          </Tr>
          <Tr>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
          </Tr>
          <Tr>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
          </Tr>
        </Tbody>
      </Table>

      <Table>
        <caption className="p-4">表組みの例2</caption>
        <Tbody>
          <Tr>
            <Th scope="row">Table Header</Th>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
          </Tr>
          <Tr>
            <Th scope="row">Table Header</Th>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
          </Tr>
          <Tr>
            <Th scope="row">Table Header</Th>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
          </Tr>
          <Tr>
            <Th scope="row">Table Header</Th>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
            <Td>Table Data</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
}

const meta = {
  title: "Component/Table",
  component: Component,
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: Component,
};
