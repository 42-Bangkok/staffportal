"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const SignOutBtn = () => {
  return (
    <Button variant="destructive" onClick={() => signOut({
      callbackUrl: "/auth/sign-in"
    })}>
      Sign Out
    </Button>
  );
};
