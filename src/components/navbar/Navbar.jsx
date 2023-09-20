"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import DarkModeToggle from '../Darkmode/DarkModeToggle'
import { ThemeContext } from '@/context/ThemeContext'
import { signOut, useSession } from 'next-auth/react'

const links = [
    {id: 1, title:"Home", href:"/"},
    {id: 2, title:"About", href:"/about"},
    {id: 3, title:"Blog", href:"/blog"},
    {id: 4, title:"Dashboard", href:"/dashboard"},
    {id: 5, title:"Porfolio", href:"/portfolio"},
]

const Navbar = () => {
  const {mode} = useContext(ThemeContext)
  const session = useSession();
  return (
    <nav className={`flex p-4 justify-between px-32 shadow-[0_8px_30px_rgb(0,0,0,0.12)] `+ `theme ${mode === "dark"?"text-white bg-black":"bg-white text-black"}`}>
        <Link href="/">N4k's</Link>
        <div className="flex items-center gap-2">
            <DarkModeToggle />
            {links.map((link)=>(
                <Link key={link.id} href={link.href}>{link.title}</Link>
            ))}
            {session.status === "authenticated" && <button className="bg-indigo-400 rouned-md py-1 px-2 text-slate-50" onClick={signOut}>logout</button>}
        </div>
    </nav>
  )
}

export default Navbar