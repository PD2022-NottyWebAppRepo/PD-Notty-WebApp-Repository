import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google';

const {SECRET,GOOGLE_ID,GOOGLE_SECRET} = process.env;

/*if (!GOOGLE_ID) throw new Error('You must provide GOOGLE_ID env var.');
if (!GOOGLE_SECRET) throw new Error('You must provide GOOGLE_SECRET env var.');*/

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
        }),
    ],
    secret: SECRET,
});