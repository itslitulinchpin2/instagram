import { searchUsers } from '@/service/user';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';

export async function GET(){
    //로그인 하지 않아도 전체 유저를 볼 수 있도록

    return searchUsers().then(data=>NextResponse.json(data));
}