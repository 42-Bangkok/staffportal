/**
 * NextAuth's config options
 * @see https://authjs.dev/guides/
 */
import NextAuth from "next-auth";
import FortyTwoProvider from "next-auth/providers/42-school";

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  providers: [
    FortyTwoProvider({
      clientId: process.env.AUTH_42_SCHOOL_CLIENT_ID,
      clientSecret: process.env.AUTH_42_SCHOOL_CLIENT_SECRET
    })
  ],
  callbacks: {
    async jwt({ token, user, profile, trigger }) {
      if (user && profile && trigger === "signIn") {
        token.user = {
          isStaff: profile["staff?"] || false,
          login: profile.login
        };
      }
      return token;
    },
    async session({ session, token, trigger }) {
      if (token) {
        session.user.isStaff = token.user.isStaff;
        session.user.login = token.user.login;
      }
      return session;
    }
  },
});
