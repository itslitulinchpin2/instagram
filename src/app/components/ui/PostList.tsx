'use client';
import React from 'react'
import PostListCard from './PostListCard';
import GridSpinner from './icons/GridSpinner';
import usePosts from '@/hooks/posts';

export default function PostList() {
  const {posts, isLoading:loading, error} = usePosts();

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

