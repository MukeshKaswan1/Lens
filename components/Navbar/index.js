'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image';


export const Navebar = () => {

  const router = usePathname()
  
  const navItems = ["MakeMyWeb.","Home","Company", "Blogs"]

  const splittedRouter = router.split('/')
 
  return (

      <div className={`text-black sm:font-extralight bg-white text-[16px] items-center flex justify-between px-28 py-2`}>
        <Image src={"https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=256&q=75"} alt='lens' height={70} width={80}/>
        <ul className='sm:block hidden'>
          <li className='flex justify-between font-semibold '> 
            <div className='flex gap-8 font-poppins'>
              {navItems.map((nav)=>{
                return (
                      <div key={nav} className={`text-[16px] font-[400] tracking-wide ${
                        nav === "Home"
                            ? " bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent"
                            : ""
                    }`}  > {nav}</div>
  
                )
              })}
            </div>
          </li>
        </ul>
      </div>
  )
}
