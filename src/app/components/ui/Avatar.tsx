import Image from 'next/image';
import React from 'react'

type Props = {
    image ?: string | null;
    size: 'small' | 'normal';
    highlight?:boolean;
}
function getImageSizeStyle(size:string):string{
  return size==='small'? 'w-[34px] h-[34px]  p-[0.1rem]' : 'w-16 h-16 p-[0.2rem]'
}

function getContainerStyle(size:string,hightlight:boolean):string{
  const baseStyle = 'rounded-full flex justify-center items-center';
  const hightlightStyle = hightlight ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300':''
  const sizeStyle = size === 'small' ? 'w-9 h-9' : 'w-[68px] h-[68px]'
  return `${baseStyle} ${hightlightStyle} ${sizeStyle}`
}

export default function Avatar({image, size='normal', highlight=false}:Props) {
  return (
    <div className={getContainerStyle(size,highlight)}>
         {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={`bg-white rounded-full ${getImageSizeStyle(size)}`} alt='user profile' src={image ?? undefined}></img>
    </div>
  )
}

