import NextAuth from 'next-auth';
import DiscordProvider from "next-auth/providers/discord";
export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET
    }),
  ],
  debug: false
}

const handler = (req, res) => {
  console.log('hakuna matata')
  return NextAuth(req, res, authOptions)
}

export { handler as GET, handler as POST };

