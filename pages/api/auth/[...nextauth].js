import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks:{
    async signIn({user,accountl,profile,email,credentials}){
      return true;
    },
    async jwt({token,user,account,profile,isNewUser}){
      if(account){
        token.accessToken = account.access_token;
        return token;
      }
      console.log(`account:${JSON.stringify(account)}`);
      return token;
    }
  }
});