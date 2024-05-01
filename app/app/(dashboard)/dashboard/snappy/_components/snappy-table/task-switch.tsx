"use client";

import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { enableTask } from "./actions";
import { toast } from "sonner";

interface ISnappySwitch {
  enabled: boolean;
  id: number;
}

export function SnappySwitch(props: ISnappySwitch) {
  const [enabled, setEnabled] = useState(props.enabled);
  const [pending, setPending] = useState(false);

  async function handleChange(e: any) {
    const prevState = enabled;
    setEnabled(!prevState);
    setPending(true);
    const { data, error } = await enableTask({
      id: props.id,
      enabled: !prevState,
    });

    if (error) {
      setEnabled(prevState);
    }
    toast("Task updated successfully");
    setPending(false);
  }
  return (
    <div>
      <Switch
        id={props.id.toString()}
        checked={enabled}
        disabled={pending}
        onCheckedChange={handleChange}
      />
    </div>
  );
}
