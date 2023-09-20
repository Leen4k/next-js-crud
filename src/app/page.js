import Button from '@/components/button/button'
import Image from 'next/image'
import hero from "public/next.svg"

export default function Home() {
  return (
    <div className="flex gap-[200px] justify-center items-center m-auto h-screen">
      <div>
        <Image className="flex" src={hero}></Image>
        <Button url={"/blog/2"} text={"hello"} />
      </div>
      <Image className="rounded-md" width={200} height={500} src="https://images.pexels.com/photos/18078984/pexels-photo-18078984/free-photo-of-man-arm-hands-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></Image>
    </div>
  )
}
