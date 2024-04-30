'use client';
import React from 'react'
import { useState } from 'react';
import useSWR from 'swr';
export default function UserSearch() {
  
  //api/search/[keyword]
  //keyword 있으면 username,name으로 검색
  //없다면 전체 유저 반환

  const [keyword,setKeyword] = useState('bob');
  const {data,isLoading,error} = useSWR(`api/search/${keyword}`);
  console.log(data);

    return <></>;
}
