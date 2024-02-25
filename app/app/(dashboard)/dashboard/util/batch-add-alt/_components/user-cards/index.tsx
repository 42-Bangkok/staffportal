import { Suspense } from "react";
import { IUserCards } from "./types";
import { UserCard } from "./user-card";

export const UserCards = (props: IUserCards) => {
  return (
    <div className="flex flex-col gap-1">
      {props.logins.map((login) => (
        <Suspense key={login} fallback={<UserCard.Skeleton />}>
          <UserCard key={login} login={login} />
        </Suspense>
      ))}
    </div>
  );
};
