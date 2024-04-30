import { addUser } from '@/service/user';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      }),
    ],
    callbacks: {
      async signIn({user : {id,name,image,email}}){
          if(!email){
              console.log('no email');
              return false;
          }
          
          addUser({id,name: name ||'', image, email, username:email.split('@')[0] });
          
          return true;
      },
      async session({ session }) {
     
      const user = session?.user;
      if(user){
          session.user = {
              ...user,
              username:user.email?.split('@')[0] || ''
          }
      }
  
        
        return session
      }
    },
    
    pages:{
      signIn:'/auth/signin'
    }
  };