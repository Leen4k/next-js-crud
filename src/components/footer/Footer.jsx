import React from 'react'
import Image from 'next/image'


const Footer = () => {
  console.log("hello")
  return (
    <div className="flex gap-2 items-center absolute bottom-0 left-0 right-0">
      <div>Made by nak</div>
      <div className="">
        <Image src="/favicon.ico" width={30} height={30}></Image>
      </div> 
    </div>
  )
}

export default Footer