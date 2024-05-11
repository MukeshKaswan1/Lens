import Image from 'next/image'
import React from 'react'

export default function Button() {
  return (
        <div className='flex items-center relative w-48 group'>
                <div className="bg-transparent border-[1px] border-white w-44 text-white px-8 py-3 rounded-lg cursor-pointer text-lg            transition-transform duration-100 ease-in-out hover:w-48 hover:bg-white  hover:text-black">
                    Learn More
                </div>
                <div className='absolute right-6 hidden group-hover:block'><Image src={"/arrow.svg"} height={20} width={20} alt="arrow"/></div>
        </div>
  )
}
