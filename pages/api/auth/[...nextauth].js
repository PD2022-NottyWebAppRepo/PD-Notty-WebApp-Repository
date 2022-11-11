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
      let jsonData = JSON.stringify(session)
      console.log(jsonData)
      return token;
    }
  }
}

export default NextAuth(authOptions)

/*
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
  },
  secret: "secret"
});*/