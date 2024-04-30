'use client';
import { ProfileUser } from '@/model/user';
import React, { FormEvent } from 'react'
import { useState } from 'react';
import useSWR from 'swr';
import GridSpinner from './icons/GridSpinner';
import UserCard from './UserCard';
import useDebounce from '@/hooks/debounce';

export default function UserSearch() {
  
  //api/search/[keyword]
  //keyword 있으면 username,name으로 검색
  //없다면 전체 유저 반환

  const [keyword,setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword);

  const {data:users,isLoading,error} = useSWR<ProfileUser[]>(`api/search/${debouncedKeyword}`);
  //console.log(data);
  
  const onSubmit = (e: FormEvent)=>{
    e.preventDefault();


  }

    return <section className='w-full max-w-2xl my-4 flex flex-col items-center'>
        <form className='w-full mb-4' onSubmit={onSubmit}>
            <input className='w-full text-xl p-3 outline-none border border-gray-300' type="text" autoFocus placeholder='search for a username or name'
                    value = {keyword} onChange={(e)=>{setKeyword(e.target.value)}}/>
        </form>
        {error && <p>Something Woring</p>}
        {isLoading && <GridSpinner/>}
        {!isLoading && !error && users?.length===0 && <p>Users not found</p>}

        <ul className='w-full p-4'>
            { users && users?.map((user)=><li key={user.username}>
               <UserCard user={user}/>
            </li>)}
        </ul>
    </section>;
}
