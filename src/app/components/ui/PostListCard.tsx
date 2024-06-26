'use client';

import React, { useState } from 'react'
import { SimplePost } from '@/model/model'
import Avatar from './Avatar';
import Image from 'next/image';
import CommentForm from './CommentForm';
import ActionBar from './ActionBar';
import ModalPortal from './ModalPortal';
import PostModal from './PostModal';
import PostDetail from './PostDetail';
import PostUserAvatar from './PostUserAvatar';

type Props = {
    post:SimplePost;
    priority?:boolean;
}

export default function PostListCard({post, priority=false}:Props) {
  
  const [openModal,setOpenModal] = useState(false);
  const {userImage, username, image, createdAt, likes, text} = post;
    return (

        <article className='rounded-lg shadow-md border border-gray-200'>
        <PostUserAvatar image={userImage} username={username}/>
        <Image 
        priority={priority}
        className='w-full object-cover aspect-square'
        src={image} 
        alt={`photo by ${username}`} 
        width={500} 
        height={500}
        onClick={()=>setOpenModal(true)}
        ></Image>
        <ActionBar post={post}/>
        <CommentForm/>
        {
          openModal && <ModalPortal>
            <PostModal onClose={()=>setOpenModal(false)}>
              <PostDetail post={post}/>
            </PostModal>

          </ModalPortal>
        }
        </article>
   
  )
}
