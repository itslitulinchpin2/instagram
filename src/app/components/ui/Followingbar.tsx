'use client';
import React from 'react'
import useSWR from 'swr';

export default function Followingbar() {
    const {data, isLoading, error} = useSWR('/api/hello');
    console.log(data);
  return (
    <div>
      <p>FollowingBar</p>
    </div>
  )
}
