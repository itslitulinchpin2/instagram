import React from 'react'
import { getUserForProfile } from '@/service/user';
import { notFound } from 'next/navigation';
import UserProfile from '@/app/components/ui/UserProfile';
import UserPosts from '@/app/components/ui/UserPosts';
import { Metadata } from 'next';
import {cache} from 'react';
type Props = {
  params:{username:string}
}
const getUser = cache(async (username:string) => getUserForProfile(username))
export default async function Userpage({params:{username}}:Props) {

  const user = await getUser(username);
  
  if (!user){
    console.log('not found');
    notFound();
  }
  else {
  return <section className='w-full'>
   <UserProfile user={user}/>
   <UserPosts user={user}/>
  </section>
  }
}

export async function generateMetadata({params:{username}}:Props):Promise<Metadata>{
  const user = await getUser(username);
  return {
    title:`${user?.name} (@${user?.username}) . Instagram Photos`,
    description:`${user?.name}'s all Instagram posts`,
  }
}