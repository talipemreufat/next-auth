// lib/auth.ts
import { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token }) {
      token.role = token.email === "admin@example.com" ? "admin" : "user";
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role ?? "user";
      }
      return session;
    },
  },
};
