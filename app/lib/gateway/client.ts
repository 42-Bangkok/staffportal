import createClient from "openapi-fetch";
import { paths } from "@/schemas/gateway-api-schema";

export function createGatewayClient() {
  const client = createClient<paths>({
    baseUrl: process.env.GATEWAY_URL!,
    headers: {
      Authorization: `Bearer ${process.env.SERVICE_TOKEN}`,
    },
  });
  return client;
}
