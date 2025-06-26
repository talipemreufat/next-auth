// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null; // <- bunu ekliyoruz
    };
  }

  interface User {
    role?: string | null; // opsiyonel olarak ekle
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string | null;
  }
}
