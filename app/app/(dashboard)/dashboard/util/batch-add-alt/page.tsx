import { TypographyH1 } from "@/components/typographies";
import { LoginsForm } from "./_components/login-form";
import { UserCards } from "./_components/user-cards";

export default function Page({
  searchParams,
}: {
  searchParams: { logins: string };
}) {
  const logins = searchParams.logins ? searchParams.logins.split(",") : [];
  return (
    <main className="w-full">
      <TypographyH1>Batch Add $Alt</TypographyH1>
      <div className="flex flex-col gap-4">
        <LoginsForm {...{ logins: logins.join(" ") }} />
        <UserCards {...{ logins }} />
      </div>
    </main>
  );
}
