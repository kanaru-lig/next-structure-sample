import { Table, Tbody, Td, Th, Thead, Tr } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
  title: "Component/Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
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
  },
};
