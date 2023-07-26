'use client'
import { newUser,user} from "@/lib/atom";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAtom } from "jotai";

export default function Page() {
    const [olduser,setOldUser] = useAtom(user)
    const [newestUser,setNewestUser] = useAtom(newUser)
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/Login')
        },6000)
    },[])
  return (
    <div className="w-screen h-screen bg-[#001F36] animate-fade-up animate-once">
        <div className='flex justify-center p-14'>
            <Image src={'/logo.png'} alt="logo" width={300} height={300}/>
      </div>
      <div className="font-bold text-3xl flex justify-center items-center">
         {olduser.status && 
            <div className="text-white flex flex-col gap-10">
              <div className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Welcome Back
              </div>
              <div>
              !Email or Phone Number is already in use
              </div>
            </div>} 


         {newestUser.status &&  
        <div className='flex flex-col justify-center items-center'>
          <div> 
             <Image src={'/welcome.gif'} alt="wave" width={300} height={300}/> <br />
          </div>
          <div className="text-white">{newestUser.name}</div>
          <div className="text-white">New user created! Diverting you to login page...<br/></div>
        </div>
         } 
      </div>
    </div>
  )
}
