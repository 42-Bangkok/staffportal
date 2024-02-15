import { SignOutBtn } from "../sign-out-btn";
import { SignInBtn } from "../sign-in-btn";
import { auth } from "@/auth";

export const AuthBtn = async ({ callbackUrl }: { callbackUrl: string }) => {
  const session = await auth();
  return (
    <>{session ? <SignOutBtn /> : <SignInBtn callbackUrl={callbackUrl} />}</>
  );
};
