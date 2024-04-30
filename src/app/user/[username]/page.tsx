import React from 'react'
import { getUserForProfile } from '@/service/user';
import { notFound } from 'next/navigation';
import UserProfile from '@/app/components/ui/UserProfile';
import UserPosts from '@/app/components/ui/UserPosts';
type Props = {
  params:{username:string}
}
export default async function Userpage({params:{username}}:Props) {

  const user = await getUserForProfile(username);
  
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
