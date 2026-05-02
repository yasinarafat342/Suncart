import "server-only";
import { betterAuth } from "better-auth";
import { LibsqlDialect } from "kysely-libsql";
import Database from "better-sqlite3";

const isProduction = process.env.NODE_ENV === "production";

const dialect = isProduction
  ? new LibsqlDialect({
      url: process.env.TURSO_DATABASE_URL!,
      authToken: process.env.TURSO_AUTH_TOKEN!,
    })
  : undefined;

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET!,
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",

  database: isProduction
    ? { dialect: dialect!, type: "sqlite" }
    : new Database("./suncart.db"),

  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
});

export type Session = typeof auth.$Infer.Session;