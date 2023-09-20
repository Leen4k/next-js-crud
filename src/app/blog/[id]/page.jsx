import React from 'react'
import {notFound} from "next/navigation"

const getData = async (id) => {
  const res = await fetch("http://localhost:3000/api/posts/"+id,{next:{revalidate:10}})
  if(!res.ok){
    console.log("can't fetch the data")
    return notFound();
  }
  return res.json();
}

// or Dynamic metadata
export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc
  }
}


const post = async ({params}) => {
  const data = await getData(params.id);
  console.log(data)
  return (
    <div key={data._id} className="px-32 min-h-screen mt-8">
        <div>This post is talkin about {data.title}</div>
    </div>
  )
}

export default post