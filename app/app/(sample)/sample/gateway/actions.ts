"use server";

import { createGatewayClient } from "@/lib/gateway/client";
import { revalidatePath } from "next/cache";

export async function patchCadetMeta(formData: FormData) {
  const body = Object.fromEntries(formData.entries());
  const client = createGatewayClient();
  const { data, error } = await client.PATCH("/api/data/cadetmeta/{login}/", {
    params: {
      path: { login: "pleelerd" },
    },
    body: body,
  });
  revalidatePath("/sample/gateway/");
  return null;
}
