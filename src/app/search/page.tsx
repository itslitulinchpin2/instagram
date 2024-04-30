import React from 'react'
import UserSearch from '../components/ui/UserSearch'
import { Metadata } from 'next';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'User Search',
  description: "Search Users to Follow",
};

export default function page() {
  return <UserSearch/>
}
