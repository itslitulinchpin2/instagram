'use client';
import { HomeUser } from '@/model/user';
import React from 'react'
import { PropagateLoader } from 'react-spinners';
import useSWR from 'swr';
import Link from 'next/link';
import Avatar from './Avatar';
import Scroll from './Scroll';
import useMe from '@/hooks/me';

export default function Followingbar() {
    const {user, isLoading:loading, error} = useMe();
    //console.log(data);
    const users = user?.following;

  return (
    <section className='w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto relative z-0'>
        {loading ? <PropagateLoader size={8} color='red' /> :
        (
        (!users || users.length===0) && <p>{`You don't have following`}</p> ) }
        {
            users && users.length>0 &&
            
                <Scroll>
                    {users.map(({image,username})=> <Link key={username} className='flex flex-col items-center w-20 ' href={`/user/${username}`}>
                    <Avatar size='large' image={image} highlight />
                    <p className='w-full text-center text-sm text-ellipsis overflow-hidden'>{username}</p>
                    </Link>)}
                </Scroll>
            
        }
    </section>
  )
}
