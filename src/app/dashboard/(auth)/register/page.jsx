"use client"
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Register = () => {
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {

    console.log({name,email,password})
    try {
     const res = await axios .post("/api/auth/register",{name,email,password});
     res.status === 201 && router.push("/dashboard/login?success=Account has been created")
    }catch(err){
      setError(true);
      console.log(err)
    }
  }
  return (
    <div className="h-screen">
      <p className="text-center text-2xl font-bold my-8">Register page</p>
      <form action="" className="bg-[#202020] w-[500px] m-auto flex flex-col justify-center p-12 aspect-square rounded-lg gap-4">
      <div className="flex flex-col">
          <label className="text-sm" htmlFor="">Username:</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} className="text-sm p-2 mt-1 bg-[#303030]" type="text" placeholder='username' required />
        </div>
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="">Email:</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} className="text-sm p-2 mt-1 bg-[#303030]" type="text" placeholder='email' required />
        </div>
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="">Password:</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} className="text-sm p-2 mt-1 bg-[#303030]" type="text" placeholder='password' required />
        </div>
        <button onClick={(e)=>{e.preventDefault();handleSubmit()}} className="bg-indigo-500 rounded-md py-2 mt-4">Sign Up</button>
        <Link href="/dashboard/login" className="text-center text-indigo-500">Login within existing account</Link>
      </form>

    </div>
  )
}

export default Register;