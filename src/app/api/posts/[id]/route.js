import { NextResponse } from "next/server"
import connect from "@/utils/db";
import Post from "@/models/Post";


export const GET = async (req, {params}) => {
    const {id} = params;
    try{
        //fetch
        await connect();
        const posts = await Post.findById(id);
        return new NextResponse(JSON.stringify(posts), {status: 200});
    }catch(err){
        return new NextResponse(err,{status: 500});
    }
    
}

export const DELETE = async (req, {params}) => {
    const {id} = params;
    try{
        //fetch
        await connect();
        await Post.findByIdAndDelete(id);
        return new NextResponse(`post ${id} has been deleted!`, {status: 200});
    }catch(err){
        return new NextResponse(err,{status: 500});
    }
    
}