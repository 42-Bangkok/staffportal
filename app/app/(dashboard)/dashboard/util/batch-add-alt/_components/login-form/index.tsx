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
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { ILoginsForm } from "./types";
import { useBatchAddAltStore } from "../../stores";

const FormSchema = z.object({
  logins: z.string(),
});

export const LoginsForm = (props: ILoginsForm) => {
  const router = useRouter();
  const [errLogins] = useBatchAddAltStore((state) => [state.errLogins]);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { logins: props.logins },
  });

  function onCheckUsers(data: z.infer<typeof FormSchema>) {
    const logins = data["logins"].split(" ").filter(Boolean);
    router.push(`/dashboard/util/batch-add-alt/?logins=${logins.join(",")}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onCheckUsers)}
        className="w-3/4 space-y-6"
      >
        <FormField
          control={form.control}
          name="logins"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Logins</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="lpumidol aoudin"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Separate multiple logins with a space.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-2">
          {errLogins.length > 0 ? (
            <p className="text-red-500">
              logins &quot;{errLogins.join(", ")}&quot; appears invalid, please
              remove to commit.
            </p>
          ) : null}
          <div className="flex gap-2">
            <Button type="submit">Check users</Button>
            <Button
              variant="destructive"
              type="submit"
              disabled={form.formState.isSubmitting || errLogins.length > 0}
            >
              Commit
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
