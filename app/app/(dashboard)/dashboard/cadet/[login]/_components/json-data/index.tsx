import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { BracesIcon } from "lucide-react";

export const JsonData = ({ data }: { data: object }) => {
  return (
    <Collapsible>
      <CollapsibleTrigger className="flex items-center">
        <Button variant={"ghost"} className="w-24">
          <BracesIcon size={18} /> JSON
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-slate-100 text-xs font-mono text-slate-600 p-2">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </CollapsibleContent>
    </Collapsible>
  );
};
