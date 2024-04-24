import React from 'react'
import { SimplePost } from '@/model/model'
import Avatar from './Avatar';
import Image from 'next/image';
import HeartIcon from './icons/HeartIcon';
import BookmarkIcon from './icons/BookmarkIcon';
import { parseDate } from '@/util/date';
import SmileIcon from './icons/SmileIcon';

type Props = {
    post:SimplePost
}

export default function PostListCard({post}:Props) {
  
  const {userImage, username, image, createdAt, likes, text} = post;
    return (
        <>
        <div>
            <Avatar image={userImage} highlight size='normal'/>
            <span>{username}</span>
        </div>
        <Image 
        src={image} 
        alt={`photo by ${username}`} 
        width={500} 
        height={500}></Image>
        <div>
            <HeartIcon/>
            <BookmarkIcon/>
        </div>
        <div>
            <p>{`${likes ?.length ?? 0} ${likes?.length>1 ? 'likes' : 'like'}`}</p>
            <p><span>by {username} || </span>{text}</p>
            <p>{parseDate(createdAt)}</p>
            <form>
                <SmileIcon/>
                <input type="text" placeholder='Add a comment...'/>
                <button>Post</button>
            </form>
        </div>
        </>
   
  )
}
