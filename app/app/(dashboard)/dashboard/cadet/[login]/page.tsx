import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fetchUser } from "@/lib/intra/users";
import { JsonData } from "./_components/json-data";
import { WalletForm } from "./_components/wallet-form";

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
          <h2>{user.login}</h2>
          <p>{user.displayname}</p>
          <p>{user.email}</p>
          <p>{user.wallet} $Alt</p>
        </div>
      </div>
      <WalletForm {...walletFormProps} />
      <JsonData data={user} />
    </main>
  );
}
