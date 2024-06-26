import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '@/app/lib/auth';
import { getUserByUsername } from '@/service/user';
import { getFollowingPostsOf } from '@/service/posts';
import { getPost } from '@/service/posts';
type Context = {
    params:{id:string};
}

export async function GET(request:NextRequest,context:Context){
    const session = await getServerSession(authOptions);
    const user = session?.user;

    if(!user){
        return new Response('Authentication Error', {status:401});
    }

    return getPost(context.params.id)
    .then(data=>NextResponse.json(data));
}