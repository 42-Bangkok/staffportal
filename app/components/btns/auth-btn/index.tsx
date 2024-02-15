import { SignOutBtn } from "../sign-out-btn";
import { SignInBtn } from "../sign-in-btn";
import { auth } from "@/auth";

export const AuthBtn = async ({
  callbackUrl,
  className,
}: {
  callbackUrl: string;
  className?: string;
}) => {
  const session = await auth();
  return (
    <>
      {session ? (
        <SignOutBtn className={className} />
      ) : (
        <SignInBtn callbackUrl={callbackUrl} className={className} />
      )}
    </>
  );
};
