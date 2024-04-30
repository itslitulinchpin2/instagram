'use client';

import React, { useState } from 'react'
import { SimplePost } from '@/model/model'
import Avatar from './Avatar';
import Image from 'next/image';
import CommentForm from './CommentForm';
import ActionBar from './ActionBar';
import ModalPortal from './ModalPortal';
import PostModal from './PostModal';

type Props = {
    post:SimplePost;
    priority?:boolean;
}

export default function PostListCard({post, priority=false}:Props) {
  
  const [openModal,setOpenModal] = useState(false);
  const {userImage, username, image, createdAt, likes, text} = post;
    return (

        <article className='rounded-lg shadow-md border border-gray-200'>
        <div className='flex items-center p-2'>
            <Avatar image={userImage} highlight size='medium'/>
            <span className='text-gray-900 font-bold ml-2'>{username}</span>
        </div>
        <Image 
        priority={priority}
        className='w-full object-cover aspect-square'
        src={image} 
        alt={`photo by ${username}`} 
        width={500} 
        height={500}
        onClick={()=>setOpenModal(true)}
        ></Image>
        <ActionBar likes={likes} username={username} text={text} createdAt={createdAt}/>
        <CommentForm/>
        {
          openModal && <ModalPortal>
            <PostModal onClose={()=>setOpenModal(false)}>
              <p>포스트 상세 페이지</p>
            </PostModal>

          </ModalPortal>
        }
        </article>
   
  )
}
