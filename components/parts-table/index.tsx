"use client";
import React, { useState } from "react";
import { Input, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";

interface DataType {
  key: React.Key;

  partNumber: string;
  year: number;
  make: string;
  model: string;
  description: string;
  quantityInStock: number;
  orderQuantity: number;
  listPrice: number;
  salePrice: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Part Number",
    dataIndex: "partNumber",
    key: "partNumber",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Year",
    dataIndex: "year",
    key: "year",
  },
  {
    title: "Make",
    dataIndex: "make",
    key: "make",
  },
  {
    title: "Model",
    dataIndex: "model",
    key: "model",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Quantity In Stock",
    dataIndex: "quantityInStock",
    key: "quantityInStock",
    render: (text: string) => <div className="text-center ">{text}</div>,
  },
  {
    title: "Order Quantity",
    dataIndex: "orderQuantity",
    key: "orderQuantity",
    render: (text: string) => (
      <div className="w-full">
        <Input className="w-2/3 mx-auto" />
      </div>
    ),
  },
  {
    title: "List Price",
    dataIndex: "listPrice",
    key: "listPrice",
  },
  {
    title: "Sale Price",
    dataIndex: "salePrice",
    key: "salePrice",
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    partNumber: "84431",
    year: 2012,
    make: "Toyota",
    model: "Camry",
    description: "LT Front fende Sedan Hybrid",
    quantityInStock: 123,
    orderQuantity: 123,
    listPrice: 123,
    salePrice: 123,
  });
}

const PartsTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  );
};

export default PartsTable;
