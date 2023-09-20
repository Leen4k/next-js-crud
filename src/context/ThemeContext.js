"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const [mode, setMode] = useState("dark");
    const toggle = () => {
        setMode(prev => prev === "light" ? "dark" : "light");
    }

    return(
        <ThemeContext.Provider value={{toggle,mode}}>
        <div className={`theme ${mode === "dark"?"text-white bg-black":"bg-white text-black"}`}>{children}</div>
    </ThemeContext.Provider>
    )
}