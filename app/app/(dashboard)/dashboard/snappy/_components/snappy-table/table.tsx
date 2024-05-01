"use client";

import { DataTable } from "@/components/ui/data-table/";
import { paths } from "@/schemas/gateway-api-schema";
import { columns } from "./columns";

export type TData =
  paths["/api/apptasks/tasks/"]["get"]["responses"]["200"]["content"]["application/json"]["items"];

export const Table = ({ data }: { data: TData }) => {
  return <DataTable columns={columns} data={data} />;
};
