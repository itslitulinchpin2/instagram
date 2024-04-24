'use client';
import React from 'react'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import { BsPlusSquareFill } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';
import { RiSearchFill } from 'react-icons/ri';
import styles from './appHeaer.module.css'
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import NewIcon from './ui/icons/NewIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import { usePathname } from 'next/navigation';
import ColorButton from './ui/ColorButton';
import {useSession, signIn, signOut} from 'next-auth/react';
import Avatar from './ui/Avatar';

const menu = [
    {
        href: '/',
        icon:<HomeIcon/> ,
        clickedIcon: <HomeFillIcon/>
    },
    {
        href:'/search',
        icon:<SearchIcon/>,
        clickedIcon:<SearchFillIcon/>
    },
    {
        href:'/new',
        icon:<NewIcon></NewIcon>,
        clickedIcon:<NewFillIcon/>
    }
]

export default function AppHeader() {
    const { data: session } = useSession();
    const pathName = usePathname();
    const user = session?.user;

  return (
    <div className='flex justify-between items-center  '>
      <Link href='/'><h1 className='text-3xl font-bold '>Instagram!</h1></Link>
      <nav>
        <ul className='flex gap-4 items-center p-4 px-6'>
            { menu.map((item)=><li key={item.href}>
                <Link href={item.href}>
                    {item.href===pathName ? item.clickedIcon : item.icon}
                </Link>
            </li>)}
            {user && 
            <li>
                <Link href={`/user/${user.username}`}>
                <Avatar size='small' highlight image={user.image}/>
                </Link>
               

            </li> }
            <li>
            {
                session ? <ColorButton text="Sign Out" onClick={()=>signOut()} size='small'></ColorButton>
                : <ColorButton text="Sign In" onClick={()=>signIn()} size='small' />
            }
            </li>
        </ul>
      </nav>
   
    </div>
  )
}
