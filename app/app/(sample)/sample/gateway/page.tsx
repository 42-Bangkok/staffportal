import { createGatewayClient } from "@/lib/gateway/client";
import { patchCadetMeta } from "./actions";

export default async function Page() {
  const client = createGatewayClient();
  const { data, error } = await client.GET("/api/data/cadetmeta/{login}/", {
    params: {
      path: { login: "pleelerd" },
    },
    next: { revalidate: 0 },
  });
  if (error) {
    return <div>Error</div>;
  }
  return (
    <main>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <form className="flex gap-2" action={patchCadetMeta}>
        <input className="border" type="text" name="note" placeholder="note" />
        <button className="border" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}
