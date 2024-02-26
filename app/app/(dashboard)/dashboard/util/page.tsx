import { TypographyH1 } from "@/components/typographies";
import { UtilCard } from "./_components/util-card";

const UTIL_CARDS = [
  {
    title: "Batch Add $Alt",
    content: "Add $Alt to multiple users at once.",
    url: "/dashboard/util/batch-add-alt",
  },
];

export default function Page() {
  return (
    <main>
      <TypographyH1>Utils</TypographyH1>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {UTIL_CARDS.map((card, index) => (
          <UtilCard key={index} {...card} />
        ))}
      </div>
    </main>
  );
}
