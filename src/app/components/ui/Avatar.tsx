import Image from 'next/image';
import React from 'react'

type AvatarSize = 'small' | 'large'|'medium' | 'xlarge';
type Props = {
    image ?: string | null;
    size?: AvatarSize;
    highlight?:boolean;
}
function getImageSizeStyle(size:AvatarSize):string{
  switch(size){
    case 'small': return 'w-[34px] h-[34px]  p-[0.1rem]'
    case 'medium': return 'w-[42px] h-[42px]  p-[0.1rem]'
    case 'large': return 'w-16 h-16 p-[0.2rem]'
    case 'xlarge' : return 'w-[138px] h-[138px]  p-[0.3rem]'
    default: throw new Error(`Unsupported type size : ${size}`)

  }
}

function getContainerSize(size:AvatarSize):string{
  switch(size){
    case 'small': return 'w-9 h-9'
    case 'medium': return 'w-11 h-11'
    case 'large': return 'w-[68px] h-[68px]'
    case 'xlarge': return 'w-[142px] h-[142px]'
    default: throw new Error(`Unsupported type size : ${size}`)

  }
}

function getContainerStyle(size:AvatarSize,hightlight:boolean):string{
  const baseStyle = 'rounded-full flex justify-center items-center';
  const hightlightStyle = hightlight ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300':''
  const sizeStyle = getContainerSize(size);
  return `${baseStyle} ${hightlightStyle} ${sizeStyle}`
}

export default function Avatar({image, size='large', highlight=false}:Props) {
  return (
    <div className={getContainerStyle(size,highlight)}>
         {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={`bg-white object-cover rounded-full ${getImageSizeStyle(size)}`} alt='user profile' src={image ?? undefined}></img>
    </div>
  )
}

