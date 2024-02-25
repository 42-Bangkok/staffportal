"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addAlt } from "./actions";
import { IWalletForm } from "./types";
import { toast } from "sonner";
import { useState } from "react";
const FormSchema = z.object({
  value: z.coerce.number().int(),
});

export function WalletForm(props: IWalletForm) {
  const [currentValue, setCurrentValue] = useState(props.currentValue);
  const [prevValue, setPrevValue] = useState(props.currentValue);
  const [isPending, setIsPending] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      value: 0,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.value === 0) {
      toast.error("Why are you tring to add 0?");
      return;
    }
    setIsPending(true);
    setPrevValue(currentValue);
    setCurrentValue(currentValue + data.value);
    const { data: respData, error } = await addAlt({
      value: data.value,
      user_id: props.user_id,
      login: props.login,
    });
    if (error) {
      setCurrentValue(prevValue);
      setIsPending(false);
      toast.error(error);
    } else if (respData) {
      setIsPending(false);
      toast.success("Alt added");
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/3 space-y-6">
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add, or remove $Alt</FormLabel>
              <div className="flex">
                <Input
                  className="rounded-r-none min-w-[100px]"
                  value={`$Alt ${currentValue}`}
                  readOnly
                />
                <FormControl>
                  <Input
                    className="rounded-none min-w-[100px]"
                    type="number"
                    step={50}
                    {...field}
                  />
                </FormControl>
                <Button
                  className="rounded-l-none"
                  type="submit"
                  disabled={isPending}
                >
                  Add
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
