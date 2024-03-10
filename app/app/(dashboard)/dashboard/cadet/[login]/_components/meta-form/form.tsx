"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { IInputForm } from "./types";
import { Textarea } from "@/components/ui/textarea";
import { patchCadetMeta } from "./actions";
import { Skeleton } from "@/components/ui/skeleton";

const FormSchema = z.object({
  note: z.string(),
});

export function InputForm(props: IInputForm) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: props.initialValues,
  });

  async function onSubmit() {
    if (!form.formState.isDirty) return;
    const { data, error } = await patchCadetMeta(props.login, {
      note: form.getValues("note"),
    });
    if (error) {
      toast.error("Failed to submit.");
    }
    if (data) {
      toast.success("Saved.");
      form.reset({ ...data });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Note</FormLabel>
              <FormControl>
                <Textarea {...field} className="min-h-32 resize-none" />
              </FormControl>
              <FormDescription>
                Keep a note anything about this cadet here. Has this cadet been
                naughty? Private to staffs.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={!form.formState.isDirty || form.formState.isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
