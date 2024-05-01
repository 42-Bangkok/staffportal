import { TypographyH1 } from "@/components/typographies";
import { SnappyTable } from "./_components/snappy-table";

export default async function Page() {
  return (
    <main className="flex flex-col gap-4">
      <TypographyH1>Snappy Tasks</TypographyH1>
      <SnappyTable />
    </main>
  );
}
