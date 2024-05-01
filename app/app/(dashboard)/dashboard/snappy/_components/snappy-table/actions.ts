"use server";

import { createGatewayClient } from "@/lib/gateway/client";
import { SAResponse } from "@/types/sa-response";

export async function enableTask({
  id,
  enabled,
}: {
  id: number;
  enabled: boolean;
}): Promise<SAResponse<boolean>> {
  const gateway = createGatewayClient();
  const { data, error } = await gateway.PATCH(
    "/api/apptasks/tasks/snappy/{id}/",
    {
      params: {
        path: {
          id,
        },
      },
      body: {
        enabled,
      },
    }
  );
  if (error) {
    return { data: null, error: error.detail };
  }
  return { data: true, error: null };
}
