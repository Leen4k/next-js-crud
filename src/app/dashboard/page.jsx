"use client"
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import useSWR from 'swr'

const dashboard = () => {
  const session = useSession();
  console.log(session)
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((response) => response.json());
  const {data, mutate, error, isLoading} = useSWR(`/api/posts?username=${session?.data?.user.name}`,fetcher)
  console.log(data)
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    try{
      await axios.post(`/api/posts`,{title,img,desc,content,username:session.data.user.name});
      mutate();
    }catch(err){
      console.log(err)
    }
  }

  if(session.status === "unauthenticated"){ 
    router?.push("/dashboard/login")
  }

  if(session.status === "authenticated"){
    router?.push("/dashboard")
  }
  if(session.status === "loading"){
    return <p>Loading</p>
  }

  console.log(session)
  const handleDelete = async (id) => {
    try{
      await axios.delete(`/api/posts/${id}`)
      mutate();
    }catch(err){
      console.log(err)
    }
  }
  

  // if (error) return <div>error not found</div>;
  // if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex flex-col gap-4 mx-32">
      <div>
          {isLoading?<div>Loading...</div>:data?.length > 0 && data.map(post => (
            <div key={post._id}>
              <Image src={post.img} height={200} width={200}></Image>
              <div className="flex justify-between">
                <p>{post.title}</p>
                <button onClick={(e)=>{e.preventDefault();handleDelete(post._id)}} className="bg-indigo-500 rounded-md">Delete</button>
              </div>
            </div>
          ))}
      </div>
      <form className="flex flex-col bg-[#252525] gap-4" action="">
        <h1>Add new post</h1>
        <input required value={title} onChange={e=>setTitle(e.target.value)} type="text" className="bg-[#232323] shadow-lg" placeholder="title" />
        <input required value={desc} onChange={e=>setDesc(e.target.value)} type="text" className="bg-[#232323] shadow-lg" placeholder="description" />
        <input required value={img} onChange={e=>setImg(e.target.value)} type="text" className="bg-[#232323] shadow-lg" placeholder="image" />
        <textarea required value={content} onChange={e=>setContent(e.target.value)} className="bg-[#232323]" placeholder="content" name="" id="" cols="30" rows="10"></textarea>
        <button onClick={(e)=>{e.preventDefault();handleSubmit()}} className="p-2 bg-indigo-500">post</button>
      </form>
    </div>
  )
}

export default dashboard