"use client";

import { ColumnDef } from "@tanstack/react-table";
import { SnappySwitch } from "./task-switch";
import { TData } from "./table";

export const columns: ColumnDef<TData[0]>[] = [
  {
    accessorKey: "enabled",
    cell: (cell) => {
      const enabled = cell.cell.row.original.enabled;
      const id = cell.cell.row.original.id;
      return <SnappySwitch {...{ enabled, id }} />;
    },
  },
  {
    accessorKey: "name",
    cell: (cell) => (
      <p className="truncate w-[200px]">
        {(cell.getValue() as string).replace("snappy:", "")}
      </p>
    ),
  },
  {
    accessorKey: "description",
    cell: (cell) => (
      <p className="truncate w-[600px]">{cell.getValue() as string}</p>
    ),
  },
];
