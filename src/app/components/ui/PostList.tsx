'use client';
import useSWR from 'swr';
import React from 'react'
import { SimplePost } from '@/model/model';
import PostListCard from './PostListCard';
import GridSpinner from './icons/GridSpinner';

export default function PostList() {
  const {data:posts, isLoading:loading, error} = useSWR<SimplePost[]>('/api/posts');
  console.log(posts);
  return (
  <section>
    {loading && <div className='text-center mt-32'>
      <GridSpinner/>
      </div>}
      <ul >
    {posts && posts.map((post, index)=>
    <li key={post.id} className='mb-4'>
      <PostListCard priority={index<2} post={post}/>
      </li>)}
   </ul>
  </section>
  )
}

