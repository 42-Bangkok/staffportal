import { createGatewayClient } from "@/lib/gateway/client";
import { InputForm } from "./form";
import { Skeleton } from "@/components/ui/skeleton";

export const MetaForm = async ({ login }: { login: string }) => {
  const client = createGatewayClient();
  const { data, error } = await client.GET("/api/data/cadetmeta/{login}/", {
    params: {
      path: { login },
    },
    next: { tags: [`cadetmeta-${login}`] },
  });
  if (error) {
    return <div>Error</div>;
  }
  const inputFormProps = {
    login: login,
    initialValues: {
      note: data.note!,
    },
  };
  return <InputForm {...inputFormProps} />;
};

MetaForm.Skeleton = function MetaFormSkeleton() {
  return <Skeleton className="min-h-32 w-2/3"></Skeleton>;
};
