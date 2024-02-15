import { rdb } from "@/lib/db/redis";

export default async function Page() {
  if (rdb.get("count") === null) {
    rdb.set("count", 0);
  }
  const count = Number(await rdb.get("count"));
  rdb.set("count", count! + 1, "EX", 5);
  return (
    <main className="flex items-center justify-center h-screen p-4">
      <div className="h-3/4">
        <p>Redis counter with ttl of 5s</p>
        <div>Count: {count}</div>
      </div>
    </main>
  );
}
