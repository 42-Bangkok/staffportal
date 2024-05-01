import { createGatewayClient } from "@/lib/gateway/client";
import { Table } from "./table";

export const SnappyTable = async () => {
  const gateway = createGatewayClient();
  const { data, error } = await gateway.GET("/api/apptasks/tasks/", {
    params: {
      query: {
        startswith: "snappy:",
      },
    },
  });
  if (error) {
    new Error("Failed to fetch data");
  }
  return <Table data={data.items} />;
};
