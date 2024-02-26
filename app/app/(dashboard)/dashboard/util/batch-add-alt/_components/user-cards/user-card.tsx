import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { fetchUser } from "@/lib/intra/users";
import { AddErrloginHandler, AddIdHandler } from "./state-handlers";

export const UserCard = async ({ login }: { login: string }) => {
  let user = null;
  try {
    user = await fetchUser({ login });
  } catch (error: any) {
    return (
      <>
        <Card className="w-3/4 bg-red-300">
          <CardContent className="p-2">
            <div className="flex gap-4 items-center">
              <Avatar>
                <AvatarImage src={""} />
              </Avatar>
              <div>{error.message}</div>
            </div>
          </CardContent>
        </Card>
        <AddErrloginHandler {...{ login }} />
      </>
    );
  }
  return (
    <>
      <Card className="w-3/4">
        <CardContent className="p-2">
          <div className="flex gap-4 items-center">
            <Avatar>
              <AvatarImage src={user.image.link} />
            </Avatar>
            <div>
              <div>{user.login}</div>
              <div>Wallet: {user.wallet}</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <AddIdHandler {...{ id: user.id, login }} />
    </>
  );
};

UserCard.Skeleton = function UserCardSkeleton() {
  return (
    <Card className="w-3/4">
      <CardContent className="p-2">
        <div className="flex gap-4 items-center">
          <Avatar>
            <AvatarImage />
          </Avatar>
          <div>
            <div className="w-20 h-4 bg-gray-300 rounded" />
            <div className="w-10 h-4 bg-gray-300 rounded" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
