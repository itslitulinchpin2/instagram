'use client';
import useSWR from 'swr';
import React from 'react'
import { SimplePost } from '@/model/model';
import { GridLoader } from 'react-spinners';
import PostListCard from './PostListCard';

export default function PostList() {
  const {data:posts, isLoading:loading, error} = useSWR<SimplePost[]>('/api/posts');
  console.log(posts);
  return (
  <section>
    {loading && <div className='text-center mt-32'>
      <GridLoader color='red'/>
      </div>}
      <ul >
    {posts && posts.map((post)=>
    <li key={post.id} className='mb-4'>
      <PostListCard post={post}/>
      </li>)}
   </ul>
  </section>
  )
}

