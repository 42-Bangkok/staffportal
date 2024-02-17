import { buttonVariants } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { BracesIcon } from "lucide-react";

export const JsonData = ({ data }: { data: object }) => {
  return (
    <Collapsible>
      <CollapsibleTrigger
        className={cn(
          "flex items-center",
          buttonVariants({ variant: "ghost" })
        )}
      >
        <BracesIcon size={18} /> JSON
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-slate-100 text-xs font-mono text-slate-600 p-2">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </CollapsibleContent>
    </Collapsible>
  );
};
