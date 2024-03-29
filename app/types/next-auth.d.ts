/**
 * This module extends the types and interfaces provided by the NextAuth library.
 * It defines additional properties for the `Session` and `JWT` objects, and
 * extends the `Profile` interface to include properties specific to the 42 School provider.
 * See: https://next-auth.js.org/getting-started/typescript
 * Note: Docs not updated on how to augment JWT
 */
import NextAuth, { DefaultSession, Profile } from "next-auth";
import { FortyTwoProfile } from "next-auth/providers/42-school";
declare module "next-auth" {
  interface Session {
    user: {
      login: string;
      isStaff: boolean;
    } & DefaultSession["user"];
  }
  interface Profile extends FortyTwoProfile { }
}

// https://github.com/nextauthjs/next-auth/discussions/8945#discussioncomment-7799831
declare module "@auth/core/jwt" {
  interface JWT {
    user: {
      login: string;
      isStaff: boolean;
    };
  }
}
