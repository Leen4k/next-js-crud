import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts",{cache: "no-store"})
  if(!res.ok){
    throw new Error("Couldn't fetch the data hikhikk")
  } 
  return res.json();
}

const blog = async () => {
  const data = await getData();
  console.log(data)
  return (
    <div className="grid grid-cols-4 px-32 gap-4 mt-8 min-h-screen">
      {data.length > 0 && data.map((blog)=>(
        <Link href={`blog/${blog._id}`} className="shadow-md flex flex-col cursor-pointer h-[200px]" key={blog._id}>
          <Image width={500} height={200} src={blog.img}></Image>
          {blog.title}
        </Link>
      ))}
    </div>
  )
}

export default blog