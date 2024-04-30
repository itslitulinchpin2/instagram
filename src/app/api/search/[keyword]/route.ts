import { searchUsers } from '@/service/user';
import { NextResponse, NextRequest } from 'next/server';

type Context = {
    params:{keyword:string};
}

export async function GET(_:NextRequest, context:Context){
    //로그인 하지 않아도 전체 유저를 볼 수 있도록

    return searchUsers(context.params.keyword).then(data=>NextResponse.json(data));
}