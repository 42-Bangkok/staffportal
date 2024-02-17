import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fetchUser } from "@/lib/intra/users";
import { JsonData } from "./_components/json-data";
import { WalletForm } from "./_components/wallet-form";
import { Separator } from "@/components/ui/separator";
import { CircleUserIcon, MailIcon, UserIcon } from "lucide-react";

export default async function Page({ params }: { params: { login: string } }) {
  const { login } = params;
  let user: any = {};
  try {
    user = await fetchUser({ login });
  } catch (e) {
    return <div>Not Found</div>;
  }
  const walletFormProps = {
    currentValue: user.wallet,
    user_id: user.id,
    login: user.login,
  };
  return (
    <main>
      <Separator className="m-4" />
      <div className="flex gap-4">
        <div>
          <Avatar className="w-24 h-24 rounded">
            <AvatarImage src={user.image.link} alt={user.login} />
            <AvatarFallback className="w-24 h-24 rounded">
              {user.login}
            </AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <UserIcon size={16} />
            <p>{user.login}</p>
          </div>
          <div className="flex items-center gap-1">
            <CircleUserIcon size={16} />
            <p>{user.displayname}</p>
          </div>
          <div className="flex items-center gap-1">
            <MailIcon size={16} />
            <p>{user.email}</p>
          </div>
        </div>
      </div>
      <Separator className="m-4" />
      <div className="flex flex-col gap-4">
        <WalletForm {...walletFormProps} />
      </div>
      <Separator className="m-4" />
      <JsonData data={user} />
    </main>
  );
}
