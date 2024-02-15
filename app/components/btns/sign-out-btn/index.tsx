"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const SignOutBtn = ({ className }: { className?: string }) => {
  return (
    <Button
      variant="destructive"
      className={className}
      onClick={() =>
        signOut({
          callbackUrl: "/auth/sign-in",
        })
      }
    >
      Sign Out
    </Button>
  );
};
