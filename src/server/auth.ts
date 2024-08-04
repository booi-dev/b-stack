import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { db } from "./db";

export const config = {
  adapter: DrizzleAdapter(db),
  providers: [Google],
  pages: {
    signIn: "/auth",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
