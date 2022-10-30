import NextAuth, {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import TwitterProvider from "next-auth/providers/twitter"
import DiscordProvider from "next-auth/providers/discord"
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import client from "../../../utils/prisma";


export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      // @ts-ignore
      clientId: process.env.DISCORD_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
    GithubProvider({
      // @ts-ignore
      clientId: process.env.GITHUB_ID,
      // @ts-ignore
      clientSecret: process.env.GITHUB_SECRET,
      scope: "read:user user:email"
    }),
    GoogleProvider({
      // @ts-ignore
      clientId: process.env.GOOGLE_ID,
      // @ts-ignore
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    TwitterProvider({
      // @ts-ignore
      clientId: process.env.TWITTER_ID,
      // @ts-ignore
      clientSecret: process.env.TWITTER_SECRET,
    })
  ],
  adapter: PrismaAdapter(client),
  secret: process.env.SECRET
}

export default NextAuth(authOptions)