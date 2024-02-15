import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fetchUser } from "@/lib/intra/users";
import { JsonData } from "./_components/json-data";

export default async function Page({ params }: { params: { login: string } }) {
  const { login } = params;
  let user: any = {};
  try {
    user = await fetchUser({ login });
  } catch (e) {
    return <div>Not Found</div>;
  }
  return (
    <main>
      <div>
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
          </div>
        </div>
        <JsonData data={user} />
      </div>
    </main>
  );
}
