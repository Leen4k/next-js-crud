import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'
import {BsMoonStarsFill, BsSunFill} from "react-icons/bs"


const DarkModeToggle = () => {
    const {toggle, mode} = useContext(ThemeContext);
    // const mode = "light"
  return (
    <div onClick={toggle} className="flex gap-4 border-4 p-2 rounded-lg relative items-center cursor-pointer">
        {mode === "dark"
        ?<div><BsMoonStarsFill /></div>
        :<div><BsSunFill /></div>   
        }    
    </div>
  )
}

export default DarkModeToggle