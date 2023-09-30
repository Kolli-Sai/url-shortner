import { type AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { getNextAuthCredentials } from "./secrets";

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: getNextAuthCredentials().githubClientId,
      clientSecret: getNextAuthCredentials().githubClientSecret,
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, session }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: getNextAuthCredentials().nextAuthSecret,
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
};
