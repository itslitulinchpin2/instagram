'use client';
import { DetailUser } from '@/model/user';
import React from 'react'
import { PropagateLoader } from 'react-spinners';
import useSWR from 'swr';
import Link from 'next/link';
import Avatar from './Avatar';

export default function Followingbar() {
    const {data, isLoading:loading, error} = useSWR<DetailUser>('/api/me');
    console.log(data);
    const users = data?.following;

  return (
    <section>
        {loading ? <PropagateLoader size={8} color='red' /> :
        (
        (!users || users.length===0) && <p>{`You don't have following`}</p> ) }
        {
            users && users.length>0 &&
            <ul>
                {users.map(({image,username})=> <li key={username}><Link href={`/user/${username}`}>
                <Avatar size='normal' image={image} highlight />
                <p>{username}</p>
                </Link></li>)}
            </ul> 
        }
    </section>
  )
}
