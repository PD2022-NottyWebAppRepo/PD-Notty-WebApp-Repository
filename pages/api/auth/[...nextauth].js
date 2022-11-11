import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { NextRequest } from 'next/server';

export const authOptions = {
  providers:[
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),
  ],
  secret: "secret",
  callback:{
    async signIn({ token, account }){
      session.accessToken = token.accessToken;
      return true;
    },
    async jwt({token,account,session}){
      if(account) token.accessToken = account.accessToken;
      return token;
    }
  }
}

export default NextAuth(authOptions)
