import {client} from './sanity';
type OAuthUser = {
    id:string;
    email:string;
    name:string;
    image ?: string | null;
    username:string;
}
export async function addUser({id, email, name, image, username}:OAuthUser){
    return client.createIfNotExists({
        _id:id,
        _type:'user',
        username,
        email,
        name,
        image,
        following:[],
        followers:[],
        bookmarks:[],
    })
}