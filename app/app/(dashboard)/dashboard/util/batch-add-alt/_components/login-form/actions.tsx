"use server";

import { SAResponse } from "@/types/sa-response";

export async function batchAddAlt({
  ids,
  value,
}: {
  ids: string[];
  value: number;
}): Promise<SAResponse<any>> {
  console.log("ids", ids);
  console.log("value", value);
  return { data: "HOLA", error: null };
}
