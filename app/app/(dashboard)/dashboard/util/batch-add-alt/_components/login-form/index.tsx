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
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";
import { addAlt } from "@/actions/intra/wallets";

const FormSchema = z.object({
  logins: z.string(),
  value: z.coerce.number().int(),
});

export const LoginsForm = (props: ILoginsForm) => {
  const logins = props["logins"]
    ? [...new Set(props["logins"].split(" ").filter(Boolean))]
    : [];
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const { errLogins, users, clear } = useBatchAddAltStore();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { logins: props.logins, value: 0 },
  });

  function onCheckUsers(data: z.infer<typeof FormSchema>) {
    if (props.logins === data["logins"]) {
      return;
    }
    clear();
    const logins = [...new Set(data["logins"].split(" ").filter(Boolean))];
    router.push(`/dashboard/util/batch-add-alt/?logins=${logins.join(",")}`);
  }
  async function onCommit() {
    const value = Number(form.getValues("value"));
    if (value === 0) {
      toast.error("Why are you tring to add 0?");
      return;
    }
    setIsPending(true);
    for (const user of users) {
      const { data, error } = await addAlt({
        value: value,
        user_id: user.id,
        login: user.login,
      });
      if (error) {
        toast.error(`Failed to add $Alt to ${user.login}`);
      } else {
        toast.success(`Added $Alt to ${user.login}`);
      }
    }
    setIsPending(false);
  }
  const isChecking = users.length !== logins.length;
  const isZeroLogin = logins.length === 0;
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onCheckUsers)}
        className="w-3/4 space-y-2"
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
                Separate multiple logins with a space. Duplicated logins are
                automatically cleared.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add, or remove $Alt</FormLabel>
              <FormControl>
                <Input
                  className="rounded-none w-[100px]"
                  type="number"
                  step={50}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-2">
          <div>
            {errLogins.length > 0 ? (
              <p className="text-red-500">
                logins &quot;{errLogins.join(", ")}&quot; appears invalid,
                please remove to commit.
              </p>
            ) : null}
          </div>
          <div className="flex gap-2">
            <Button className="w-32" type="submit" disabled={isPending}>
              Check users
            </Button>
            <Button
              className="w-32"
              variant="destructive"
              type="button"
              disabled={
                form.formState.isSubmitting ||
                errLogins.length > 0 ||
                isPending ||
                isChecking ||
                isZeroLogin
              }
              onClick={onCommit}
            >
              Commit
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
