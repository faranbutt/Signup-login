'use client'

import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { user,newUser } from '../../lib/atom';
import LoginForm from "@/components/LoginForm";

export default function Page() {
    const [olduser,setOldUser]  = useAtom(user);
    const [newestUser,setNewestUser] = useAtom(newUser);


    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
   
  return (
    <div>
        
      <section className="h-screen w-screen bg-gradient-to-tr from-blue-500 to-white dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium  text-sm text-center">
  <div className='flex justify-center p-14'>
            <Image src={'/logo.png'} alt="logo" width={300} height={300}/>
    </div>
     {}
     {olduser.status && <LoginForm emaill={olduser.email}    />}
     {newestUser.status && <LoginForm emaill={newestUser.email}  />}
  </div>
</section>

    </div>
  )
}
