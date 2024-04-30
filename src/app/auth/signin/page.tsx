import { authOptions } from '@/app/lib/auth';
import Signin from '@/app/components/ui/Signin';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth'
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {
    searchParams:{
        callbackUrl:string;
    }
}

export const metadata: Metadata = {
  title: 'Signin',
  description: "Log in or Sign up to instagram",
};

export default async function SignInPage({searchParams : {callbackUrl}}:Props) {
  const session = await getServerSession(authOptions);
 
  if (session){
    redirect('/');
  }

  const providers = (await getProviders()) ?? {};
 

    return (
    <section className='flex justify-center mt-24'>
        <Signin providers={providers} callbackUrl={callbackUrl ?? '/'}/>
    </section>
    )
    
}
