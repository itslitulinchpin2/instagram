import { FullPost, SimplePost } from '@/model/model'
import Image from 'next/image';
import React from 'react'
import useSWR from 'swr';
import PostUserAvatar from './PostUserAvatar';
import ActionBar from './ActionBar';
import CommentForm from './CommentForm';
import Avatar from './Avatar';
type Props = {
    post:SimplePost
}
export default function PostDetail({post}:Props) {
  const {id,userImage,username,image,createdAt,likes} = post;
  const {data} = useSWR<FullPost>(`/api/posts/${id}`)
  const comments = data?.comments;
  //console.log(comments);
    return (
    <section className='flex w-full h-full'>
        <div className='relative basis-3/5'>
            <Image className='object-cover' src={image} alt={`photo by ${username}`} priority fill sizes='650px'/> 
        </div>
        <div className='w-full basis-2/5 flex flex-col'>
        <PostUserAvatar image={userImage} username={username}/>
        <ul className='border-t border-gray-200 h-full overflow-y-auto p-4 mb-1'>
            {comments&& comments.map(({image,username:commentUsername, comment},index)=> <li
            className='flex items-center mb-1'
            key={index}>
                <Avatar image={image} size='small' highlight={commentUsername===username}/>
                <div className='ml-2'>
                    <span className='font-bold mr-1'>
                        {commentUsername}
                    </span>
                    <span>
                        {comment}
                    </span>
                </div>
            </li>)}
        </ul>
        
        <ActionBar post={post}/>
        
        <CommentForm/>
        </div>
        
    </section>
  )
}
