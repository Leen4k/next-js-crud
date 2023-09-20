import { NextResponse } from "next/server"
import connect from "@/utils/db";
import Post from "@/models/Post";


export const GET = async (req) => {
    const url = new URL(req.url);
    const username = url.searchParams.get("username");
    try{
        //fetch
        await connect();
        const posts = await Post.find(username && {username});
        // const posts = await Post.find();
        return new NextResponse(JSON.stringify(posts), {status: 200});
    }catch(err){
        return new NextResponse(err,{status: 500});
    }
    
}

export const POST = async (req) => {
    const {title,img,desc,content,username} = await req.json();
    console.log({title,img,desc,content,username})
    const newPost = new Post({title,img,desc,content,username});
    try{
        await connect();
        await newPost.save();
        return new NextResponse(JSON.stringify("post has been created"), {status: 201});
    }catch(err){
        return new NextResponse(err,{status: 500});
    }
    
}