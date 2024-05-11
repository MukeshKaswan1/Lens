import React from 'react'
import './index.css'

import Image from 'next/image'
import Button from '../Button'

function AboutUs() {
  return (
    <div className='h-screen text-white bg-[#000] px-32 py-20 flex flex-col items-center'>
      <div className='text-6xl font-[500] '>About Us</div>
      <div className=' mb-16 rounded-lg mt-2 bg-gradient-to-r from-[#0091ff] to-[#9cfeff] w-40 h-2 text-black '>_</div>
      <div className='p-12 bg-[#1b1c1e] rounded-2xl flex hover:scale-105 transform transition duration-300 ease-in-out group'>
        <div className='w-[50%] py-16'>
          <h1 className='text-5xl font-[500]'> Welcome To LENS</h1>
          <p className='text-[#CFCFCF] mt-12'>We put our hearts, souls and sweat into designing and developing custom AI - powered solutions for your business so you don&apos;t have to.</p>
          <div className='mt-8'>
            <Button />
          </div>
        </div>
        <div className='w-[50%] -lg flex justify-end'>
          <div className='h-[395px] overflow-hidden rounded-xl flex items-center border-8 border-white group-hover:border-none transform transition duration-100 ease-in-out'>
            <Image src={'https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=828&q=75'} height={395} width={430} alt="team" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs