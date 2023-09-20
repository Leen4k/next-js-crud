"use client"
import React, { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

const page = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const session = useSession();
  const router = useRouter();
  
  if(session.status === "authenticated") {
    router?.push("/dashboard")
  }

  const handleLogin = () => {
    signIn("credentials",{email,password});
  }

  return (
    <div>
      <form action="">
      <div className="flex flex-col">
          <label className="text-sm" htmlFor="">Email:</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} className="text-sm p-2 mt-1 bg-[#303030]" type="text" placeholder='email' required />
        </div>
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="">Password:</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} className="text-sm p-2 mt-1 bg-[#303030]" type="text" placeholder='password' required />
        </div>
        <button onClick={(e)=>{e.preventDefault();handleLogin()}} className="bg-indigo-500 rounded-md py-2 mt-4">Login</button>
      <button onClick={(e)=>{e.preventDefault();signIn("google")}}>Login with google</button>
      </form>
    </div>
  )
}

export default page