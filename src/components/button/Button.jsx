import React from 'react'
import Link from 'next/link'



const Button = ({text,url}) => {
  return (
    <div className="mt-8">
        <Link href={url}><button className="bg-black text-slate-50 w-32 p-2 rounded-md">{text}</button></Link>
    </div>
  ) 
}

export default Button