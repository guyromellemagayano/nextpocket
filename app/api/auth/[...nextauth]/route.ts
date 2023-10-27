import type { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const nextAuthOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    })
  ]
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }
