"use server";

import { createGatewayClient } from "@/lib/gateway/client";
import { SAResponse } from "@/types/sa-response";
import { revalidateTag } from "next/cache";
import type { paths } from "@/schemas/gateway-api-schema";
import { isStaff } from "@/lib/auth/utils";

type TResp =
  paths["/api/data/cadetmeta/{login}/"]["get"]["responses"]["200"]["content"]["application/json"];

export async function patchCadetMeta(
  login: string,
  body: { note: string }
): Promise<SAResponse<TResp>> {
  if (!isStaff()) {
    return { data: null, error: "Not authorized." };
  }
  const client = createGatewayClient();
  const { data, error } = await client.PATCH("/api/data/cadetmeta/{login}/", {
    params: {
      path: { login: login },
    },
    body: body,
  });
  if (error) {
    return { data: null, error: "Failed to patch." };
  }
  revalidateTag(`cadetmeta-${login}`);
  return { data: data, error: null };
}
